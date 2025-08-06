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
    divAutoria.textContent = pensamento.autoria;

    const botaoEditar = document.createElement('button');
    botaoEditar.classList.add('botao-editar');
    botaoEditar.onclick = () => ui.preencherFormulario(pensamento.id)

    const iconeEditar = document.createElement('img');
    iconeEditar.src = "assets/imagens/icone-editar.png";
    iconeEditar.alt = "Icone editar";
    botaoEditar.appendChild(iconeEditar);
    
    const botoes = document.createElement('div');
    botoes.classList.add('icones');
    botoes.appendChild(botaoEditar)


    liElement.appendChild(imgElement);
    liElement.appendChild(divConteudo);
    liElement.appendChild(divAutoria);
    liElement.appendChild(botoes);
    listaPensamentos.appendChild(liElement);

  },
  limparCampos(){
    document.getElementById("pensamento-form").reset();
  },
  async preencherFormulario(pensamentoId){
    const inputConteudo = document.getElementById('pensamento-conteudo');
    const inputAutoria = document.getElementById('pensamento-autoria');
    const inputId = document.getElementById('pensamento-id');

    try{
      const pensamento = await api.buscarPensamentoPorId(pensamentoId);

      inputConteudo.value = pensamento.conteudo;
      inputAutoria.value = pensamento.autoria;
      inputId.value = pensamento.id;
      inputConteudo.focus();

    }catch(e){
      console.error("Erro ao preencher o formualrio", e)
    }
  }
}

export default ui;