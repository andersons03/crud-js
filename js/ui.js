import api from "./api.js";

const ui = {
  async renderizarPensamentos(){
    const listaPensamentos = document.getElementById('lista-pensamentos')

    try{

      const pensamentos = await api.buscarPensamentos();
        pensamentos.forEach(pensamento => this.adicionarPensamentoNaLista(pensamento));
    }catch{
      alert("Erro ao renderizar pensamentos")
    }
  },
  adicionarPensamentoNaLista(pensamento){
    const listaPensamentos = document.getElementById('lista-pensamentos')
    const liElement = document.createElement('li');
    liElement.classList.add('li-pensamento');
    liElement.setAttribute('data-id', pensamento.id);

    const imgElement = document.createElement('img');
    imgElement.src = "assets/imagens/aspas-azuis.png";
    imgElement.alt = "Aspas azuis";
    imgElement.classList.add('icone-aspas');

    const divConteudo = document.createElement('div');
    divConteudo.classList.add('pensamento-conteudo');
    divConteudo.textContent = pensamento.conteudo
    
    const divAutoria = document.createElement('div');
    divAutoria.classList.add('pensamento-autoria');
    divAutoria.textContent = pensamento.autoria

    liElement.appendChild(imgElement);
    liElement.appendChild(divConteudo);
    liElement.appendChild(divAutoria);
    listaPensamentos.appendChild(liElement);

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