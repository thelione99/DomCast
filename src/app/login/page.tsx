import type { Metadata } from "next";
import { LoginContent } from "@/components/pages/LoginContent";

export const metadata: Metadata = {
    title: "Login",
    description: "Accedi alla tua area riservata Domcast Training per visualizzare i tuoi programmi di allenamento e monitorare i tuoi progressi.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function LoginPage() {
    return <LoginContent />;
}
