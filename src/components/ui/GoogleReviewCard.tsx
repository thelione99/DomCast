import type { GoogleReview } from "@/data/google-reviews";

function GoogleStar({ filled }: { filled: boolean }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={`w-4 h-4 ${filled ? "fill-[#FBBC04] text-[#FBBC04]" : "fill-gray-600 text-gray-600"}`}
        >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );
}

function ProfileInitial({ name }: { name: string }) {
    // Generate a deterministic color from the name
    const colors = [
        "bg-blue-600", "bg-red-500", "bg-green-600",
        "bg-purple-600", "bg-teal-500", "bg-orange-500",
    ];
    const index = name.charCodeAt(0) % colors.length;

    return (
        <div className={`w-10 h-10 rounded-full ${colors[index]} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
            {name.charAt(0).toUpperCase()}
        </div>
    );
}

export function GoogleReviewCard({ review }: { review: GoogleReview }) {
    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 space-y-3 hover:border-white/20 transition-colors">
            {/* Header: Author + Google G logo */}
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    {review.profile_photo_url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={review.profile_photo_url}
                            alt={review.author_name}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    ) : (
                        <ProfileInitial name={review.author_name} />
                    )}
                    <div>
                        <p className="font-semibold text-white text-sm leading-tight">{review.author_name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{review.relative_time_description}</p>
                    </div>
                </div>
                {/* Google "G" logo */}
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 48 48">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                    <path fill="#FBBC05" d="M10.53 28.59a14.5 14.5 0 010-9.18l-7.98-6.19a24.01 24.01 0 000 21.56l7.98-6.19z" />
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
            </div>

            {/* Stars */}
            <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                    <GoogleStar key={i} filled={i < review.rating} />
                ))}
            </div>

            {/* Review text */}
            <p className="text-gray-300 text-sm leading-relaxed">{review.text}</p>

            {/* Footer badge */}
            <a
                href="https://maps.app.goo.gl/5Hx7iDc31yjmsKGd6"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[10px] text-gray-500 uppercase tracking-widest pt-1 hover:text-white transition-colors w-fit"
            >
                Pubblicata su Google
            </a>
        </div>
    );
}
