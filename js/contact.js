document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contato-whatsapp");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const nome = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("message").value.trim();

            const numeroWhatsApp = "5511999999999"; 

            const textoMensagem = `Olá, World Micro! Gostaria de solicitar um atendimento:\n\n` +
                                 `*Nome:* ${nome}\n` +
                                 `*E-mail:* ${email}\n\n` +
                                 `*Mensagem:* ${mensagem}`;

            const urlFormatada = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensagem)}`;

            window.open(urlFormatada, "_blank");
        });
    }
});