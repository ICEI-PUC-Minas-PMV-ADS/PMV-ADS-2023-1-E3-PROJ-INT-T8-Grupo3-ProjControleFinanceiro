
//funções que ativam e desativam controles html no main

function painel(){
	document.getElementById("gerenciadores").style.display = "none";
	return
		
}

function receita(){
	document.getElementById("gerenciadores").style.display = "block";
    document.getElementById("gerenc-despesas").style.display = "none";
	document.getElementById("gerenc-receita").style.display = "block";	
        
}

function despesa(){
	document.getElementById("gerenciadores").style.display = "block";
	document.getElementById("gerenc-receita").style.display = "none";
	document.getElementById("gerenc-despesas").style.display = "block";    
	
}



