function enviarMensagem(event) {
    if (event && event.preventDefault) event.preventDefault()
    const formulario = document.getElementById("contato-whatsapp")
    const mensagem_completa = document.getElementById("mensagem-completa")

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const message = document.getElementById("message")

    if (!formulario) return

    if (formulario.checkValidity()) {
        const msg = `Meu nome é ${name.value}. Email: ${email.value}. Mais informações: ${message.value}`
        mensagem_completa.value = msg
        const phone = '5511999999999'
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`

        window.open(url, '_blank')
    } else {
        formulario.reportValidity()
    }
}