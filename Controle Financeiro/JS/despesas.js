const form = document.getElementById('form-despesa');
		const tabela = document.getElementById('tbody-despesas');
		const btnLimpar = document.getElementById('limpar');

		let despesas = [];

		function limparCampos() {
			form.reset();
			document.getElementById('indice').value = '';
		}

		function exibirDespesas() {
			tabela.innerHTML = '';
			despesas.forEach((despesa, indice) => {
				let linha = tabela.insertRow();

				let descricao = linha.insertCell();
				descricao.innerText = despesa.descricao;

				let valor = linha.insertCell();
				valor.innerText = despesa.valor;

				let data = linha.insertCell();
				data.innerText = despesa.data;

				let acoes = linha.insertCell();
				let btnEditar = document.createElement('button');
				btnEditar.innerText = 'Editar';
				btnEditar.addEventListener('click', () => editarDespesa(indice));
			acoes.appendChild(btnEditar);

			let btnExcluir = document.createElement('button');
			btnExcluir.innerText = 'Excluir';
			btnExcluir.addEventListener('click', () => excluirDespesa(indice));
			acoes.appendChild(btnExcluir);
		});
	}

	function salvarDespesa(evento) {
		evento.preventDefault();

		let indice = document.getElementById('indice').value;
		let descricao = document.getElementById('descricao').value;
		let valor = document.getElementById('valor').value;
		let data = document.getElementById('data').value;

		let despesa = {
			descricao: descricao,
			valor: valor,
			data: data
		};

		if (indice === '') {
			despesas.push(despesa);
		} else {
			despesas[indice] = despesa;
		}

		localStorage.setItem('despesas', JSON.stringify(despesas));
		exibirDespesas();
		limparCampos();
	}

	function excluirDespesa(indice) {
		despesas.splice(indice, 1);
		localStorage.setItem('despesas', JSON.stringify(despesas));
		exibirDespesas();
	}

	function editarDespesa(indice) {
		let despesa = despesas[indice];
		document.getElementById('descricao').value = despesa.descricao;
		document.getElementById('valor').value = despesa.valor;
		document.getElementById('data').value = despesa.data;
		document.getElementById('indice').value = indice;
		document.getElementById('btn-salvar').innerText = 'Atualizar';
	}

	form.addEventListener('submit', salvarDespesa);
	btnLimpar.addEventListener('click', limparCampos);

	despesas = JSON.parse(localStorage.getItem('despesas')) || [];
	exibirDespesas();

    function limparCampos() {
        document.getElementById('descricao').value = '';
        document.getElementById('valor').value = '';
        document.getElementById('data').value = '';
        document.getElementById('indice').value = '';
        document.getElementById('btn-salvar').innerText = 'Salvar';
    }

    function exibirDespesas() {
        let tabela = document.getElementById('tabela-body');
        let total = document.getElementById('total');
        tabela.innerHTML = '';
        total.innerText = 0;

        despesas.forEach((despesa, indice) => {
            let linha = tabela.insertRow();

            let cellDescricao = linha.insertCell();
            cellDescricao.innerText = despesa.descricao;

            let cellValor = linha.insertCell();
            cellValor.innerText = despesa.valor;

            let cellData = linha.insertCell();
            cellData.innerText = despesa.data;

            let acoes = linha.insertCell();

            let btnEditar = document.createElement('button');
            btnEditar.innerText = 'Editar';
            btnEditar.addEventListener('click', () => editarDespesa(indice));
            acoes.appendChild(btnEditar);

            let btnExcluir = document.createElement('button');
            btnExcluir.innerText = 'Excluir';
            btnExcluir.addEventListener('click', () => excluirDespesa(indice));
            acoes.appendChild(btnExcluir);

            total.innerText = Number(total.innerText) + Number(despesa.valor);
        });
    }

    function salvarDespesa(evento) {
        evento.preventDefault();

        let indice = document.getElementById('indice').value;
        let descricao = document.getElementById('descricao').value;
        let valor = document.getElementById('valor').value;
        let data = document.getElementById('data').value;

        let despesa = {
            descricao: descricao,
            valor: valor,
            data: data
        };

        if (indice === '') {
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
document.getElementById('descricao').value = despesa.descricao;
document.getElementById('valor').value = despesa.valor;
document.getElementById('data').value = despesa.data;
document.getElementById('indice').value = indice;
document.getElementById('btn-salvar').innerText = 'Atualizar';
}

function init() {
exibirDespesas();
document.getElementById('btn-salvar').addEventListener('click', salvarDespesa);
document.getElementById('btn-limpar').addEventListener('click', limparCampos);
}

init();
