const formReceita = document.getElementById("form-receita");
const tabelaReceita = document.getElementById("tbody-receita");
const btnLimparReceita = document.getElementById("limpar-receita");

let receitas = [];

function limparCampos() {
  formReceita.reset();
  document.getElementById("indice-receita").value = "";
}

function exibirReceitas() {
  tabelaReceita.innerHTML = "";
  receitas.forEach((receita, indiceReceita) => {
    let linhaReceita = tabelaReceita.insertRow();

    let descricaoReceita = linhaReceita.insertCell();
    descricaoReceita.innerText = receita.descricaoReceita;

    let valorReceita = linhaReceita.insertCell();
    valorReceita.innerText = receita.valoReceita;

    let dataReceita = linhaReceita.insertCell();
    dataReceita.innerText = receita.dataReceita;

    let acoesReceita = linhaReceita.insertCell();
    let btnEditarReceita = document.createElement("button-receita");
    btnEditarReceita.innerText = "Editar";
    btnEditarReceita.addEventListener("click", () => editarReceita(indiceReceita));
    acoesReceita.appendChild(btnEditarReceita);

    let btnExcluirReceita = document.createElement("button-receita");
    btnExcluirReceita.innerText = "Excluir";
    btnExcluirReceita.addEventListener("click", () => excluirReceita(indiceReceita));    
    acoesReceita.appendChild(btnExcluirReceita);
  });
}

function salvarReceita(eventoReceita) {
  eventoReceita.preventDefault();

  let indiceReceita = document.getElementById("indice-receita").value;
  let descricaoReceita = document.getElementById("descricao-receita").value;
  let valorReceita = document.getElementById("valor-receita").value;
  let dataReceita = document.getElementById("data-receita").value;

  let receita = {
    descricaoReceita: descricaoReceita,
    valorReceita: valorReceita,
    dataReceita: dataReceita,
  };

  if (indiceReceita === "") {
    receitas.push(receita);
  } else {
    receitas[indiceReceita] = receita;
  }

  localStorage.setItem("receitas", JSON.stringify(receitas));
  exibirReceita();
  limparCamposReceita();
}

function excluirReceita(indiceReceita) {
  receitas.splice(indiceReceita, 1);
  localStorage.setItem("receita", JSON.stringify(receitas));
  exibirReceita();
}

function editarReceita(indiceReceita) {
  let receita = receitas[indiceReceita];
  document.getElementById("descricao-receita").value = receita.descricaoReceita;
  document.getElementById("valor-receita").value = receita.valorReceita;
  document.getElementById("data-receita").value = receita.dataReceita;
  document.getElementById("indice-receita").value = indiceReceita;
  document.getElementById("btn-salvar-receita").innerText = "Atualizar";
}

formReceita.addEventListener("submit", salvarReceita);
btnLimparReceita.addEventListener("click", limparCamposReceita);

receitas = JSON.parse(localStorage.getItem("receitas")) || [];
exibirReceita();

function limparCamposReceita() {
  document.getElementById("descricao-receita").value = "";
  document.getElementById("valor-receita").value = "";
  document.getElementById("data-receita").value = "";
  document.getElementById("indice-receita").value = "";
  document.getElementById("btn-salvar-receita").innerText = "Salvar";
}

function exibirReceita() {
  let tabelaReceita = document.getElementById("tabela-body-receita");
  let totalReceita = document.getElementById("total-receita");
  let totalReceita2 = document.getElementById("total-receita2");
  tabelaReceita.innerHTML = "";
  totalReceita.innerText = 0;
  totalReceita2.innerHTML = "R$";

  receitas.forEach((receita, indiceReceita) => {
    let linhaReceita = tabelaReceita.insertRow();

    let cellDescricaoReceita = linhaReceita.insertCell();
    cellDescricaoReceita.innerText = receita.descricaoReceita;

    let cellValorReceita = linhaReceita.insertCell();
    cellValorReceita.innerText = receita.valorReceita;

    let cellDataReceita = linhaReceita.insertCell();
    cellDataReceita.innerText = receita.dataReceita;

    let acoesReceita = linhaReceita.insertCell();

    let btnEditarReceita = document.createElement("button-receita");
    btnEditarReceita.innerText = "Editar";
    btnEditarReceita.addEventListener("click", () => editarReceita(indiceReceita));
    acoesReceita.appendChild(btnEditarReceita);

    let btnExcluirReceita = document.createElement("button-receita");
    btnExcluirReceita.innerText = "Excluir";
    btnExcluirReceita.addEventListener("click", () => excluirReceita(indiceReceita));
    acoesReceita.appendChild(btnExcluirReceita);

    totalReceita.innerText = Number(totalReceita.innerText) + Number(receita.valorReceita);
    totalReceita2.innerText = `R$ ${Number(totalReceita.innerText)}`;
  });
}

function salvarReceita(eventoReceita) {
  eventoReceita.preventDefault();

  let indiceReceita = document.getElementById("indice-receita").value;
  let descricaoReceita = document.getElementById("descricao-receita").value;
  let valorReceita = document.getElementById("valor-receita").value;
  let dataReceita = document.getElementById("data-receita").value;

  let receita = {
    descricaoReceita: descricaoReceita,
    valorReceita: valorReceita,
    dataReceita: dataReceita,
  };

  if (indiceReceita === "") {
    receitas.push(receita);
  } else {
    receitas[indiceReceita] = receita;
  }

  exibirReceita();
  limparCamposReceita();
}

function excluirReceita(indiceReceita) {
  receitas.splice(indiceReceita, 1);
  exibirReceita();
}

function editarReceita(indiceReceita) {
  let receita = receitas[indiceReceita];
  document.getElementById("descricao-receita").value = receita.descricaoReceita;
  document.getElementById("valor-receita").value = receita.valorReceita;
  document.getElementById("data-receita").value = receita.dataReceita;
  document.getElementById("indice-receita").value = indiceReceita;
  document.getElementById("btn-salvar-receita").innerText = "Atualizar";
}

function initReceita() {
  exibirReceita();
  document
    .getElementById("btn-salvar-receita")
    .addEventListener("click", salvarReceita());
  document.getElementById("btn-limpar-receita").addEventListener("click", limparCamposReceita);
}

initReceita();
