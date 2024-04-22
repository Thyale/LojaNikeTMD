var transparencia = window.document.querySelector("div.transparencia")
var BarraLateral = window.document.querySelector("div.barraLateral")
var BarradePesquisa = window.document.querySelector("div.Pesquisa")
var SectionDestaque = window.document.querySelector("section.sectionDestaque")
var Msg = window.document.querySelector("p.Msg")
var Carrinho = window.document.querySelector("div.Carrinho")

function AparecerBarra() {
  transparencia.style.display = "block"
  BarraLateral.style.display = "flex"
}

function SumirBarra() {
  transparencia.style.display = "none"
  BarraLateral.style.display = "none"
}

function Vercarrinho() {
  BarradePesquisa.style.display = "none"
  SectionDestaque.style.display = "none"
  Msg.style.display = "none"
  Carrinho.style.display = "flex"
}

function VoltarATela() {
  BarradePesquisa.style.display = "block"
  SectionDestaque.style.display = "block"
  Msg.style.display = "block"
  Carrinho.style.display = "none"
}

var sapato1 = window.document.querySelector("div#sapato1")
var sapato2 = window.document.querySelector("div#sapato2")
var sapato3 = window.document.querySelector("div#sapato3")
var sapato4 = window.document.querySelector("div#sapato4")

var valortotal = window.document.querySelector("p.valortotal")
var valorS1 = 399.99
var valorS2 = 299.99
var valorS3 = 249.99
var valorS4 = 349.99
var soma = 0

var itensAdicionados = []

function AddCarrinho(n) {
  if (itensAdicionados.includes(n)) {
    Swal.fire({
      title: "Item já adicionado!",
      icon: "error",
      timer: 1300,
      timerProgressBar: true,
      showConfirmButton: false,
    })
    return
  } else {
    Swal.fire({
      title: "Item Adicionado ao Carrinho!",
      icon: "success",
      timer: 1300,
      timerProgressBar: true,
      showConfirmButton: false,
    })
  }

  itensAdicionados.push(n)

  if (n == 1) {
    sapato1.style.display = "flex"
    soma = soma + valorS1
  } else if (n == 2) {
    sapato2.style.display = "flex"
    soma = soma + valorS2
  } else if (n == 3) {
    sapato3.style.display = "flex"
    soma = soma + valorS3
  } else if (n == 4) {
    sapato4.style.display = "flex"
    soma = soma + valorS4
  }

  valortotal.innerHTML = `Total : R$ ${soma}`
}

function deletar(n) {
  if (n == 1) {
    sapato1.style.display = "none"
    soma = soma - valorS1
  } else if (n == 2) {
    sapato2.style.display = "none"
    soma = soma - valorS2
  } else if (n == 3) {
    sapato3.style.display = "none"
    soma = soma - valorS3
  } else if (n == 4) {
    sapato4.style.display = "none"
    soma = soma - valorS4
  }

  itensAdicionados = itensAdicionados.filter((item) => item !== n)
  valortotal.innerHTML = `Total : R$ ${soma}`
}