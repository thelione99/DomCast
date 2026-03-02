"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactContent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `Ciao Domenico, vorrei avere delle informazioni.\n\n*Nome:* ${name}\n*Email:* ${email}\n*Oggetto:* ${subject}\n*Messaggio:*\n${message}`;
        const whatsappUrl = `https://wa.me/393924683142?text=${encodeURIComponent(text)}`;

        window.open(whatsappUrl, '_blank');

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    };

    return (
        <div className="container py-20 px-4 md:px-6 max-w-screen-md mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl tracking-tighter uppercase mb-4 text-white font-[family-name:var(--font-anton)]">
                    Contattami <span className="text-primary">Ora</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                    Hai domande? Invia un messaggio e ti risponderò entro 24 ore.
                </p>
            </div>

            <Card className="bg-card border-border">
                <CardHeader>
                    <CardTitle className="text-xl font-bold uppercase">Invia un messaggio</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nome</Label>
                                <Input id="name" value={name} onChange={e => setName(e.target.value)} required placeholder="Il tuo nome" className="bg-background" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="mario@esempio.it" type="email" className="bg-background" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject">Oggetto</Label>
                            <Input id="subject" value={subject} onChange={e => setSubject(e.target.value)} required placeholder="Info coaching, Domande shop, ecc." className="bg-background" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Messaggio</Label>
                            <Textarea id="message" value={message} onChange={e => setMessage(e.target.value)} required placeholder="Come posso aiutarti?" className="min-h-[150px] bg-background" />
                        </div>
                        <Button type="submit" className="w-full font-bold text-lg bg-green-600 hover:bg-green-700 text-white" size="lg">
                            Invia Messaggio su WhatsApp
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-muted-foreground">
                <div>
                    <h2 className="text-white font-bold mb-2">Email</h2>
                    <p>info@domcast.it</p>
                </div>
                <div>
                    <h2 className="text-white font-bold mb-2">Posizione</h2>
                    <p>Domcast Gym, Centro Città</p>
                </div>
                <div>
                    <h2 className="text-white font-bold mb-2">Social</h2>
                    <p>@domcast_training</p>
                </div>
            </div>
        </div>
    );
}
