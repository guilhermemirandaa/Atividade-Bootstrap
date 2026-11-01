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

const faixa = document.querySelector('#faixa')
const slides = faixa.children
const pontos = document.querySelectorAll('.ponto')
let atual = 0
let timer

function mostrarSlide(indice) {
  atual = (indice + slides.length) % slides.length
  faixa.style.transform = `translateX(-${atual * 100}%)`

  Array.from(slides).forEach((slide, i) => {
    slide.setAttribute('aria-hidden', i !== atual)
  })

  pontos.forEach((ponto, i) => {
    ponto.classList.toggle('bg-white', i === atual)
    ponto.classList.toggle('bg-white/50', i !== atual)
    ponto.toggleAttribute('aria-current', i === atual)
  })

  reiniciarTimer()
}

function reiniciarTimer() {
  clearInterval(timer)
  timer = setInterval(() => mostrarSlide(atual + 1), 4000)
}

document.querySelector('#anterior').addEventListener('click', () => mostrarSlide(atual - 1))
document.querySelector('#proximo').addEventListener('click', () => mostrarSlide(atual + 1))
pontos.forEach((ponto, i) => ponto.addEventListener('click', () => mostrarSlide(i)))
mostrarSlide(0)