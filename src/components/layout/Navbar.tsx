"use client";

import React, { useCallback, useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";

interface StaggeredMenuItem {
    label: string;
    ariaLabel: string;
    link: string;
}

interface StaggeredMenuSocialItem {
    label: string;
    link: string;
}

interface StaggeredMenuProps {
    position?: "left" | "right";
    colors?: string[];
    items?: StaggeredMenuItem[];
    socialItems?: StaggeredMenuSocialItem[];
    displaySocials?: boolean;
    displayItemNumbering?: boolean;
    className?: string;
    logoUrl?: string;
    menuButtonColor?: string;
    openMenuButtonColor?: string;
    accentColor?: string;
    isFixed?: boolean;
    changeMenuColorOnOpen?: boolean;
    closeOnClickAway?: boolean;
    onMenuOpen?: () => void;
    onMenuClose?: () => void;
}

export function Navbar({
    position = "right",
    colors = ["#2a2018", "#1a140e", "#f48c25"], // Dark browns and Primary Orange
    items = [
        { label: "Home", ariaLabel: "Home Page", link: "/" },
        { label: "Chi Sono", ariaLabel: "About Coach", link: "/coaching" },
        { label: "Piani", ariaLabel: "Training Programs", link: "/shop" },
        { label: "Risultati", ariaLabel: "Client Transformations", link: "/transformations" },
        { label: "Contatti", ariaLabel: "Contact Me", link: "/contact" },
    ],
    socialItems = [
        { label: "Instagram", link: "https://instagram.com" },
        { label: "Facebook", link: "https://facebook.com" },
    ],
    displaySocials = true,
    displayItemNumbering = true,
    className,
    logoUrl = "/Logo_Domcast-3.png",
    menuButtonColor = "#ffffff", // White initially
    openMenuButtonColor = "#221910", // Dark when open (on white background)
    changeMenuColorOnOpen = true,
    accentColor = "#f48c25",
    isFixed = true, // Fixed to top
    closeOnClickAway = true,
    onMenuOpen,
    onMenuClose,
}: StaggeredMenuProps) {
    const [open, setOpen] = useState(false);
    const openRef = useRef(false);
    const [scrolled, setScrolled] = useState(false);
    // Ref for direct DOM manipulation of logo opacity for performance
    const logoLinkRef = useRef<HTMLAnchorElement>(null);

    const panelRef = useRef<HTMLDivElement | null>(null);
    const preLayersRef = useRef<HTMLDivElement | null>(null);
    const preLayerElsRef = useRef<HTMLElement[]>([]);

    const plusHRef = useRef<HTMLSpanElement | null>(null);
    const plusVRef = useRef<HTMLSpanElement | null>(null);
    const iconRef = useRef<HTMLSpanElement | null>(null);

    const textInnerRef = useRef<HTMLSpanElement | null>(null);
    const textWrapRef = useRef<HTMLSpanElement | null>(null);
    const [textLines, setTextLines] = useState<string[]>(["Menu", "Close"]);

    const openTlRef = useRef<gsap.core.Timeline | null>(null);
    const closeTweenRef = useRef<gsap.core.Tween | null>(null);
    const spinTweenRef = useRef<gsap.core.Timeline | null>(null);
    const textCycleAnimRef = useRef<gsap.core.Tween | null>(null);
    const colorTweenRef = useRef<gsap.core.Tween | null>(null);

    const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
    const busyRef = useRef(false);

    const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null);

    // Scroll effect for Navbar background and Logo Opacity
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const viewportHeight = window.innerHeight;

            // standard navbar background blur logic
            setScrolled(currentScrollY > 20);

            // Gradual opacity logic for Logo
            // Start fading in at 30% of viewport, fully visible at 50%
            const startFade = viewportHeight * 0.3;
            const endFade = viewportHeight * 0.5;

            let opacity = 0;
            if (currentScrollY > endFade) {
                opacity = 1;
            } else if (currentScrollY > startFade) {
                opacity = (currentScrollY - startFade) / (endFade - startFade);
            }

            if (logoLinkRef.current) {
                logoLinkRef.current.style.opacity = opacity.toString();
                // Ensure it's not clickable when invisible or very faint
                logoLinkRef.current.style.pointerEvents = opacity > 0.1 ? "auto" : "none";
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const panel = panelRef.current;
            const preContainer = preLayersRef.current;

            const plusH = plusHRef.current;
            const plusV = plusVRef.current;
            const icon = iconRef.current;
            const textInner = textInnerRef.current;

            if (!panel || !plusH || !plusV || !icon || !textInner) return;

            let preLayers: HTMLElement[] = [];
            if (preContainer) {
                preLayers = Array.from(preContainer.querySelectorAll(".sm-prelayer")) as HTMLElement[];
            }
            preLayerElsRef.current = preLayers;

            const offscreen = position === "left" ? -100 : 100;
            gsap.set([panel, ...preLayers], { xPercent: offscreen });

            gsap.set(plusH, { transformOrigin: "50% 50%", rotate: 0 });
            gsap.set(plusV, { transformOrigin: "50% 50%", rotate: 90 });
            gsap.set(icon, { rotate: 0, transformOrigin: "50% 50%" });

            gsap.set(textInner, { yPercent: 0 });

            if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
        });
        return () => ctx.revert();
    }, [menuButtonColor, position]);

    const buildOpenTimeline = useCallback(() => {
        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return null;

        openTlRef.current?.kill();
        if (closeTweenRef.current) {
            closeTweenRef.current.kill();
            closeTweenRef.current = null;
        }
        itemEntranceTweenRef.current?.kill();

        const itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel")) as HTMLElement[];
        const numberEls = Array.from(
            panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")
        ) as HTMLElement[];
        const socialTitle = panel.querySelector(".sm-socials-title") as HTMLElement | null;
        const socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link")) as HTMLElement[];

        const layerStates = layers.map((el) => ({ el, start: Number(gsap.getProperty(el, "xPercent")) }));
        const panelStart = Number(gsap.getProperty(panel, "xPercent"));

        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        if (numberEls.length) gsap.set(numberEls, { ["--sm-num-opacity" as any]: 0 });
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        layerStates.forEach((ls, i) => {
            tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: "power4.out" }, i * 0.07);
        });

        const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
        const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
        const panelDuration = 0.65;

        tl.fromTo(
            panel,
            { xPercent: panelStart },
            { xPercent: 0, duration: panelDuration, ease: "power4.out" },
            panelInsertTime
        );

        if (itemEls.length) {
            const itemsStartRatio = 0.15;
            const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;

            tl.to(
                itemEls,
                { yPercent: 0, rotate: 0, duration: 1, ease: "power4.out", stagger: { each: 0.1, from: "start" } },
                itemsStart
            );

            if (numberEls.length) {
                tl.to(
                    numberEls,
                    { duration: 0.6, ease: "power2.out", ["--sm-num-opacity" as any]: 1, stagger: { each: 0.08, from: "start" } },
                    itemsStart + 0.1
                );
            }
        }

        if (socialTitle || socialLinks.length) {
            const socialsStart = panelInsertTime + panelDuration * 0.4;

            if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: "power2.out" }, socialsStart);
            if (socialLinks.length) {
                tl.to(
                    socialLinks,
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        ease: "power3.out",
                        stagger: { each: 0.08, from: "start" },
                        onComplete: () => {
                            gsap.set(socialLinks, { clearProps: "opacity" });
                        },
                    },
                    socialsStart + 0.04
                );
            }
        }

        openTlRef.current = tl;
        return tl;
    }, [position]);

    const playOpen = useCallback(() => {
        if (busyRef.current) return;
        busyRef.current = true;
        const tl = buildOpenTimeline();
        if (tl) {
            tl.eventCallback("onComplete", () => {
                busyRef.current = false;
            });
            tl.play(0);
        } else {
            busyRef.current = false;
        }
    }, [buildOpenTimeline]);

    const playClose = useCallback(() => {
        openTlRef.current?.kill();
        openTlRef.current = null;
        itemEntranceTweenRef.current?.kill();

        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return;

        const all: HTMLElement[] = [...layers, panel];
        closeTweenRef.current?.kill();

        const offscreen = position === "left" ? -100 : 100;

        closeTweenRef.current = gsap.to(all, {
            xPercent: offscreen,
            duration: 0.32,
            ease: "power3.in",
            overwrite: "auto",
            onComplete: () => {
                const itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel")) as HTMLElement[];
                if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });

                const numberEls = Array.from(
                    panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")
                ) as HTMLElement[];
                if (numberEls.length) gsap.set(numberEls, { ["--sm-num-opacity" as any]: 0 });

                const socialTitle = panel.querySelector(".sm-socials-title") as HTMLElement | null;
                const socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link")) as HTMLElement[];
                if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
                if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

                busyRef.current = false;
            },
        });
    }, [position]);

    const animateIcon = useCallback((opening: boolean) => {
        const icon = iconRef.current;
        const h = plusHRef.current;
        const v = plusVRef.current;
        if (!icon || !h || !v) return;

        spinTweenRef.current?.kill();

        if (opening) {
            gsap.set(icon, { rotate: 0, transformOrigin: "50% 50%" });
            spinTweenRef.current = gsap
                .timeline({ defaults: { ease: "power4.out" } })
                .to(h, { rotate: 45, duration: 0.5 }, 0)
                .to(v, { rotate: -45, duration: 0.5 }, 0);
        } else {
            spinTweenRef.current = gsap
                .timeline({ defaults: { ease: "power3.inOut" } })
                .to(h, { rotate: 0, duration: 0.35 }, 0)
                .to(v, { rotate: 90, duration: 0.35 }, 0)
                .to(icon, { rotate: 0, duration: 0.001 }, 0);
        }
    }, []);

    const animateColor = useCallback(
        (opening: boolean) => {
            const btn = toggleBtnRef.current;
            if (!btn) return;
            colorTweenRef.current?.kill();
            if (changeMenuColorOnOpen) {
                const targetColor = opening ? openMenuButtonColor : (scrolled ? "#ffffff" : menuButtonColor); // Adapt to scroll
                colorTweenRef.current = gsap.to(btn, { color: targetColor, delay: 0.18, duration: 0.3, ease: "power2.out" });
            } else {
                gsap.set(btn, { color: menuButtonColor });
            }
        },
        [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen, scrolled]
    );

    useEffect(() => {
        if (toggleBtnRef.current) {
            const targetColor = openRef.current
                ? openMenuButtonColor
                : (scrolled ? "#ffffff" : menuButtonColor);
            gsap.to(toggleBtnRef.current, { color: targetColor, duration: 0.3 });
        }
    }, [scrolled, openMenuButtonColor, menuButtonColor]);

    const animateText = useCallback((opening: boolean) => {
        const inner = textInnerRef.current;
        if (!inner) return;

        textCycleAnimRef.current?.kill();

        const currentLabel = opening ? "Menu" : "Close";
        const targetLabel = opening ? "Close" : "Menu";
        const cycles = 3;

        const seq: string[] = [currentLabel];
        let last = currentLabel;
        for (let i = 0; i < cycles; i++) {
            last = last === "Menu" ? "Close" : "Menu";
            seq.push(last);
        }
        if (last !== targetLabel) seq.push(targetLabel);
        seq.push(targetLabel);

        setTextLines(seq);
        gsap.set(inner, { yPercent: 0 });

        const lineCount = seq.length;
        const finalShift = ((lineCount - 1) / lineCount) * 100;

        textCycleAnimRef.current = gsap.to(inner, {
            yPercent: -finalShift,
            duration: 0.5 + lineCount * 0.07,
            ease: "power4.out",
        });
    }, []);

    const toggleMenu = useCallback(() => {
        const target = !openRef.current;
        openRef.current = target;
        setOpen(target);

        if (target) {
            onMenuOpen?.();
            playOpen();
        } else {
            onMenuClose?.();
            playClose();
        }

        animateIcon(target);
        animateColor(target);
        animateText(target);
    }, [playOpen, playClose, animateIcon, animateColor, animateText, onMenuOpen, onMenuClose]);

    const closeMenu = useCallback(() => {
        if (openRef.current) {
            openRef.current = false;
            setOpen(false);
            onMenuClose?.();
            playClose();
            animateIcon(false);
            animateColor(false);
            animateText(false);
        }
    }, [playClose, animateIcon, animateColor, animateText, onMenuClose]);

    useEffect(() => {
        if (!closeOnClickAway || !open) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                panelRef.current &&
                !panelRef.current.contains(event.target as Node) &&
                toggleBtnRef.current &&
                !toggleBtnRef.current.contains(event.target as Node)
            ) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [closeOnClickAway, open, closeMenu]);

    return (
        <div
            className={`sm-scope z-50 ${isFixed ? "fixed top-0 left-0 w-full" : "relative w-full"}`}
        >
            <div
                className={
                    (className ? className + " " : "") +
                    "staggered-menu-wrapper w-full h-full z-40 transition-all duration-300"
                }
                style={accentColor ? ({ ["--sm-accent" as any]: accentColor } as React.CSSProperties) : undefined}
                data-position={position}
                data-open={open || undefined}
            >
                {/* Navbar Background for scroll state */}
                <div className={`absolute top-0 left-0 w-full h-20 transition-all duration-300 pointer-events-none -z-10 ${scrolled ? "bg-[#221910]/90 backdrop-blur-md border-b border-white/5 shadow-lg" : "bg-transparent"}`} />

                <div
                    ref={preLayersRef}
                    className="sm-prelayers fixed top-0 right-0 bottom-0 pointer-events-none z-[5] w-screen h-screen overflow-hidden"
                    aria-hidden="true"
                >
                    {(() => {
                        const raw = colors && colors.length ? colors.slice(0, 4) : ["#1e1e22", "#35353c"];
                        let arr = [...raw];
                        if (arr.length >= 3) {
                            const mid = Math.floor(arr.length / 2);
                            arr.splice(mid, 1);
                        }
                        return arr.map((c, i) => (
                            <div
                                key={i}
                                className={`sm-prelayer absolute top-0 right-0 h-full w-full ${position === "left" ? "-translate-x-full" : "translate-x-full"}`}
                                style={{ background: c }}
                            />
                        ));
                    })()}
                </div>

                <header
                    className="staggered-menu-header relative top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20 bg-transparent z-50 pointer-events-none"
                    aria-label="Main navigation header"
                >
                    {/* Logo with Link - Hidden initially, gradual fade in on scroll */}
                    <Link
                        ref={logoLinkRef}
                        href="/"
                        className="pointer-events-none opacity-0 transition-transform duration-300 hover:scale-105"
                        onClick={closeMenu}
                    >
                        <div className="relative w-32 h-10 transition-transform hover:scale-105">
                            <Image
                                src={logoUrl || "/Logo_Domcast-3.png"}
                                alt="Logo"
                                fill
                                sizes="128px"
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>

                    <button
                        ref={toggleBtnRef}
                        className={`sm-toggle relative inline-flex items-center gap-[0.5rem] bg-transparent border-0 cursor-pointer font-bold uppercase tracking-wider text-sm leading-none overflow-visible pointer-events-auto transition-colors duration-300 ${open ? "text-[#221910]" : "text-white"
                            }`}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        aria-controls="staggered-menu-panel"
                        onClick={toggleMenu}
                        type="button"
                    >
                        <span
                            ref={textWrapRef}
                            className="sm-toggle-textWrap relative inline-block h-[1em] overflow-hidden whitespace-nowrap w-[var(--sm-toggle-width,auto)] min-w-[var(--sm-toggle-width,auto)] hidden sm:inline-block"
                            aria-hidden="true"
                        >
                            <span ref={textInnerRef} className="sm-toggle-textInner flex flex-col leading-none">
                                {textLines.map((l, i) => (
                                    <span className="sm-toggle-line block h-[1em] leading-none" key={i}>
                                        {l}
                                    </span>
                                ))}
                            </span>
                        </span>

                        <span
                            ref={iconRef}
                            className="sm-icon relative w-[24px] h-[24px] shrink-0 inline-flex items-center justify-center [will-change:transform]"
                            aria-hidden="true"
                        >
                            <span
                                ref={plusHRef}
                                className="sm-icon-line absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
                            />
                            <span
                                ref={plusVRef}
                                className="sm-icon-line sm-icon-line-v absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
                            />
                        </span>
                    </button>
                </header>

                <aside
                    id="staggered-menu-panel"
                    ref={panelRef}
                    className={`staggered-menu-panel fixed top-0 right-0 h-screen w-full sm:w-[480px] bg-white flex flex-col p-[8em_2em_4em_3em] overflow-y-auto z-40 backdrop-blur-[12px] shadow-2xl pointer-events-auto ${position === "left" ? "-translate-x-full" : "translate-x-full"}`}
                    aria-hidden={!open}
                >
                    <div className="sm-panel-inner flex-1 flex flex-col gap-8">
                        <ul
                            className="sm-panel-list list-none m-0 p-0 flex flex-col gap-4"
                            role="list"
                            data-numbering={displayItemNumbering || undefined}
                        >
                            {items && items.length ? (
                                items.map((it, idx) => (
                                    <li className="sm-panel-itemWrap relative overflow-hidden leading-none" key={it.label + idx}>
                                        <Link
                                            href={it.link}
                                            onClick={closeMenu}
                                            className="sm-panel-item relative text-[#221910] font-black text-[3rem] sm:text-[4rem] cursor-pointer leading-none tracking-tighter uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em] hover:text-[#f48c25]"
                                            aria-label={it.ariaLabel}
                                            data-index={idx + 1}
                                        >
                                            <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                                                {it.label}
                                            </span>
                                        </Link>
                                    </li>
                                ))
                            ) : (
                                <li className="sm-panel-itemWrap relative overflow-hidden leading-none" aria-hidden="true">
                                    <span className="sm-panel-item relative text-[#221910] font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]">
                                        <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                                            No items
                                        </span>
                                    </span>
                                </li>
                            )}
                        </ul>

                        {displaySocials && socialItems && socialItems.length > 0 && (
                            <div className="sm-socials mt-auto pt-12 flex flex-col gap-4 border-t border-gray-100" aria-label="Social links">
                                <h3 className="sm-socials-title m-0 text-sm font-bold uppercase tracking-widest [color:var(--sm-accent,#ff0000)]">Seguimi</h3>
                                <ul
                                    className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-6 flex-wrap"
                                    role="list"
                                >
                                    {socialItems.map((s, i) => (
                                        <li key={s.label + i} className="sm-socials-item">
                                            <a
                                                href={s.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="sm-socials-link text-lg font-bold text-[#221910] no-underline relative inline-block py-[2px] transition-[color,opacity] duration-300 ease-linear hover:text-[#f48c25]"
                                                onClick={closeMenu} // Optional: close menu on social link click? Usually keeps open.
                                            >
                                                {s.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </aside>
            </div>

            <style jsx global>{`
        .sm-scope .staggered-menu-wrapper {  }
        
        .sm-scope .sm-panel-list[data-numbering] { counter-reset: smItem; }
        .sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after { 
            counter-increment: smItem; 
            content: counter(smItem, decimal-leading-zero); 
            position: absolute; 
            top: 0.1em; 
            right: 0; 
            font-size: 1.5rem; 
            font-weight: 700; 
            color: var(--sm-accent, #ff0000); 
            letter-spacing: 0; 
            pointer-events: none; 
            user-select: none; 
            opacity: var(--sm-num-opacity, 0); 
        }
        
        @media (max-width: 640px) {
            .sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after {
                font-size: 1rem;
                top: 0.2em;
            }
        }
      `}</style>
        </div>
    );
}
