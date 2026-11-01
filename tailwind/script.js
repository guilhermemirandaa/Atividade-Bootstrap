const botaoMenu = document.querySelector('#botaoMenu')
const menu = document.querySelector('#menu')

botaoMenu.addEventListener('click', () => {
  const aberto = botaoMenu.getAttribute('aria-expanded') === 'true'
  botaoMenu.setAttribute('aria-expanded', String(!aberto))
  menu.classList.toggle('hidden')
  menu.classList.toggle('flex')
})

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    botaoMenu.setAttribute('aria-expanded', 'false')
    menu.classList.add('hidden')
    menu.classList.remove('flex')
  })
})