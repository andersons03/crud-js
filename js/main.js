import api from "./api.js";
import ui from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos();
  ui.limparCampos();

  const formularioPensamento = document.getElementById("pensamento-form");
  formularioPensamento.addEventListener('submit', manipularSubmissaoFormulario);
});

async function manipularSubmissaoFormulario(event){
  event.preventDefault();
  const id = document.getElementById("pensamento-id").value
  const conteudo = document.getElementById("pensamento-conteudo").value
  const autoria = document.getElementById("pensamento-autoria").value

  try {
    await api.salvarPensamento({conteudo, autoria});
    ui.renderizarPensamentos();
  } catch (error) {
    alert(error)
  }
}