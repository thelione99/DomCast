"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
    return (
        <div className="container py-20 px-4 md:px-6 max-w-screen-md">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 text-white">
                    Contattami <span className="text-primary italic">Ora</span>
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
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nome</Label>
                                <Input id="name" placeholder="Il tuo nome" className="bg-background" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="mario@esempio.it" type="email" className="bg-background" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject">Oggetto</Label>
                            <Input id="subject" placeholder="Info coaching, Domande shop, ecc." className="bg-background" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Messaggio</Label>
                            <Textarea id="message" placeholder="Come posso aiutarti?" className="min-h-[150px] bg-background" />
                        </div>
                        <Button type="submit" className="w-full font-bold text-lg" size="lg">Invia Messaggio</Button>
                    </form>
                </CardContent>
            </Card>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-muted-foreground">
                <div>
                    <h3 className="text-white font-bold mb-2">Email</h3>
                    <p>info@domcast.it</p>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-2">Posizione</h3>
                    <p>Domcast Gym, Centro Città</p>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-2">Social</h3>
                    <p>@domcast_training</p>
                </div>
            </div>
        </div>
    );
}
