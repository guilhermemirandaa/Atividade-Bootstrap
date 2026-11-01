const formulario = document.querySelector('#formContato')
const aviso = document.querySelector('#avisoContato')

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault()

  if (!formulario.checkValidity()) {
    formulario.classList.add('was-validated')
    aviso.classList.add('d-none')
    return
  }

  aviso.classList.remove('d-none')
  formulario.reset()
  formulario.classList.remove('was-validated')
})