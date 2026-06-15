import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Preencha todos os campos." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      subject: `Nova mensagem de ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
      reply_to: email,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return Response.json(
      { error: "Erro ao enviar. Tente novamente." },
      { status: 500 }
    );
  }
}
