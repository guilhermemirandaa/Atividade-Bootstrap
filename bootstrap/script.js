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

const modalProduto = document.querySelector('#modalProduto')

modalProduto.addEventListener('show.bs.modal', (evento) => {
  const botao = evento.relatedTarget
  const imagem = modalProduto.querySelector('#modalProdutoImagem')

  modalProduto.querySelector('#modalProdutoTitulo').textContent = botao.dataset.nome
  modalProduto.querySelector('#modalProdutoDescricao').textContent = botao.dataset.descricao
  modalProduto.querySelector('#modalProdutoPreco').textContent = botao.dataset.preco
  imagem.src = botao.dataset.imagem
  imagem.alt = botao.dataset.nome
})

const menu = document.querySelector('#menu')
const linksMenu = document.querySelectorAll('#menu .nav-link')

linksMenu.forEach((link) => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide()
    }
  })
})