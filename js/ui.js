import api from "./api.js";

const ui = {
  async renderizarPensamentos(){
    const listaPensamentos = document.getElementById('lista-pensamentos')

    try{

      const pensamentos = await api.buscarPensamentos();
        pensamentos.forEach(pensamento => {
        listaPensamentos.innerHTML += `
          <li class="li-pensamento" data-id="${pensamento.id}">
          <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
          <div class="pensamento-conteudo">${pensamento.conteudo}</div>
          <div class="pensamento-autoria">${pensamento.autoria}</div>
          </li>
        `;
      });

    }catch{
      alert("Erro ao renderizar pensamentos")
    }
  },
  limparCampos(){
    const botaoCancelar = document.getElementById("botao-cancelar");
    const inputPensamento = document.getElementById("pensamento-conteudo");
    const pensamentoAutoria = document.getElementById("pensamento-autoria");

    botaoCancelar.addEventListener('click', () => {
      inputPensamento.value = "";
      pensamentoAutoria.value = "";
    })
  }
}

export default ui;