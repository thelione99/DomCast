import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Verifica che la chiave API sia impostata, altrimenti usa un default (che fallirà ma evita il crash dell'istanza)
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // Costruisce il contenuto dell'email raggruppato in HTML
        let htmlContent = `
            <div style="font-family: sans-serif; color: #333;">
                <h2>Nuova Candidatura Elite Coaching Online</h2>
                <p>Hai ricevuto un nuovo questionario compilato. Ecco i dettagli:</p>
                <hr style="border: 1px solid #eee; margin: 20px 0;" />
        `;

        // Itera sui dati inviati. Assumiamo che siano passati per raggruppamento (step)
        for (const [section, answers] of Object.entries(data)) {
            if (typeof answers === 'object' && answers !== null) {
                htmlContent += `<h3 style="color: #ea580c; margin-top: 20px;">${section}</h3><ul style="list-style-type: none; padding-left: 0;">`;
                for (const [question, answer] of Object.entries(answers)) {
                    const displayAnswer = Array.isArray(answer) ? answer.join(', ') : (answer || 'Non risposto');
                    htmlContent += `<li style="margin-bottom: 8px;"><strong>${question}:</strong> ${displayAnswer}</li>`;
                }
                htmlContent += `</ul>`;
            }
        }

        htmlContent += `
                <hr style="border: 1px solid #eee; margin: 20px 0;" />
                <p style="font-size: 12px; color: #777;">Domcast System Auto-mailer</p>
            </div>
        `;

        const response = await resend.emails.send({
            from: 'Candidature Coaching <onboarding@resend.dev>', // Modificalo col tuo dominio se lo hai verificato su resend (es. no-reply@domcast.it)
            to: process.env.CONTACT_EMAIL || 'salvatore.s20@gmail.com', // Sostituire con l'email di Domenico in prod
            subject: `🔥 Nuova Candidatura Coaching: ${(data as any)['1️⃣ Dati personali']?.['Nome e cognome'] || 'Nuovo Lead'}`,
            html: htmlContent,
            replyTo: (data as any)['1️⃣ Dati personali']?.['Contatto email / telefono']
        });

        if (response.error) {
            return NextResponse.json({ success: false, error: response.error }, { status: 400 });
        }

        return NextResponse.json({ success: true, data: response.data });
    } catch (error) {
        console.error("Errore invio email:", error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
