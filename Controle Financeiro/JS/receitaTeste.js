
const form = document.getElementById("form-despesa2");
const tabela = document.getElementById("tbody-despesas");
const btnLimpar = document.getElementById("limpar2");

let despesas = [];

function limparCampos() {
  form.reset();
  document.getElementById("indice2").value = "";
}

function exibirDespesas() {
  tabela.innerHTML = "";
  despesas.forEach((despesa, indice) => {
    let linha = tabela.insertRow();

    let descricao = linha.insertCell();
    descricao.innerText = despesa.descricao;

    let valor = linha.insertCell();
    valor.innerText = despesa.valor;

    let data = linha.insertCell();
    data.innerText = despesa.data;

    let acoes = linha.insertCell();
    let btnEditar = document.createElement("button");
    btnEditar.innerText = "Editar";
    btnEditar.addEventListener("click", () => editarDespesa(indice));
    acoes.appendChild(btnEditar);

    let btnExcluir = document.createElement("button");
    btnExcluir.innerText = "Excluir";
    btnExcluir.addEventListener("click", () => excluirDespesa(indice));
    acoes.appendChild(btnExcluir);
  });
}

function salvarDespesa(evento) {
  evento.preventDefault();

  let indice = document.getElementById("indice2").value;
  let descricao = document.getElementById("descricao2").value;
  let valor = document.getElementById("valor2").value;
  let data = document.getElementById("data2").value;

  let despesa = {
    descricao: descricao,
    valor: valor,
    data: data,
  };

  if (indice === "") {
    despesas.push(despesa);
  } else {
    despesas[indice] = despesa;
  }

  localStorage.setItem("despesas", JSON.stringify(despesas));
  exibirDespesas();
  limparCampos();
}

function excluirDespesa(indice) {
  despesas.splice(indice, 1);
  localStorage.setItem("despesas", JSON.stringify(despesas));
  exibirDespesas();
}

function editarDespesa(indice) {
  let despesa = despesas[indice];
  document.getElementById("descricao2").value = despesa.descricao;
  document.getElementById("valor2").value = despesa.valor;
  document.getElementById("data2").value = despesa.data;
  document.getElementById("indice2").value = indice;
  document.getElementById("btn-salvar").innerText = "Atualizar";
}

form.addEventListener("submit", salvarDespesa);
btnLimpar.addEventListener("click", limparCampos);

despesas = JSON.parse(localStorage.getItem("despesas")) || [];
exibirDespesas();

function limparCampos() {
  document.getElementById("descricao2").value = "";
  document.getElementById("valor2").value = "";
  document.getElementById("data2").value = "";
  document.getElementById("indice2").value = "";
  document.getElementById("btn-salvar").innerText = "Salvar";
}

function exibirDespesas() {
  let tabela = document.getElementById("tabela-body2");
  let total = document.getElementById("total2");
  let totalDespesas = document.getElementById("totalDespesas");
  tabela.innerHTML = "";
  total.innerText = 0;
  totalDespesas.innerHTML = "R$";

  despesas.forEach((despesa, indice) => {
    let linha = tabela.insertRow();

    let cellDescricao = linha.insertCell();
    cellDescricao.innerText = despesa.descricao;

    let cellValor = linha.insertCell();
    cellValor.innerText = despesa.valor;

    let cellData = linha.insertCell();
    cellData.innerText = despesa.data;

    let acoes = linha.insertCell();

    let btnEditar = document.createElement("button");
    btnEditar.innerText = "Editar";
    btnEditar.addEventListener("click", () => editarDespesa(indice));
    acoes.appendChild(btnEditar);

    let btnExcluir = document.createElement("button");
    btnExcluir.innerText = "Excluir";
    btnExcluir.addEventListener("click", () => excluirDespesa(indice));
    acoes.appendChild(btnExcluir);

    total.innerText = Number(total.innerText) + Number(despesa.valor);
    totalDespesas.innerText = `R$ ${Number(total.innerText)}`;
  });
}

function salvarDespesa(evento) {
  evento.preventDefault();

  let indice = document.getElementById("indice2").value;
  let descricao = document.getElementById("descricao2").value;
  let valor = document.getElementById("valor2").value;
  let data = document.getElementById("data2").value;

  let despesa = {
    descricao: descricao,
    valor: valor,
    data: data,
  };

  if (indice === "") {
    despesas.push(despesa);
  } else {
    despesas[indice] = despesa;
  }

  exibirDespesas();
  limparCampos();
}

function excluirDespesa(indice) {
  despesas.splice(indice, 1);
  exibirDespesas();
}

function editarDespesa(indice) {
  let despesa = despesas[indice];
  document.getElementById("descricao2").value = despesa.descricao;
  document.getElementById("valor2").value = despesa.valor;
  document.getElementById("data2").value = despesa.data;
  document.getElementById("indice2").value = indice;
  document.getElementById("btn-salvar").innerText = "Atualizar";
}

function init() {
  exibirDespesas();
  document
    .getElementById("btn-salvar")
    .addEventListener("click", salvarDespesa());
  document.getElementById("btn-limpar").addEventListener("click", limparCampos);
}

init();
