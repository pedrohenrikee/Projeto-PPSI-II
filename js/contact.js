function enviarMensagem() {
    const formulario = document.getElementById("contato-whatsapp")
    const mensagem_completa = document.getElementById("mensagem-completa")

    // Pegar os campos para montar mensagem
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const message = document.getElementById("message")

    if (formulario.checkValidity()) {
        mensagem_completa.value = `
                                    Meu nome é ${name.value},
                                    Meu email é ${email.value}.
                                    *Mais informações:* ${message.value}
                                    `
        formulario.submit()
    } else {
        formulario.reportValidity()
    }
}