function pink() {
  document.getElementById('body').classList.remove('dark-pink')
  document.getElementById('body').classList.remove('dark-blue')
  document.getElementById('body').classList.add('pink')
  mudarTema()
}
function darkPink() {
  document.getElementById('body').classList.remove('pink')
  document.getElementById('body').classList.remove('dark-blue')
  document.getElementById('body').classList.add('dark-pink')
  mudarTema()
}
function darkBlue() {
  document.getElementById('body').classList.remove('pink')
  document.getElementById('body').classList.remove('dark-pink')
  document.getElementById('body').classList.add('dark-blue')
  mudarTema()
}
function blue() {
  document.getElementById('body').classList.remove('pink')
  document.getElementById('body').classList.remove('dark-pink')
  document.getElementById('body').classList.remove('dark-blue')
  mudarTema()
}

function mudarTema() {
  document.getElementById('lista-botao').classList.toggle('esconder')
}
