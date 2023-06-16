
//funções que ativam e desativam controles html no main

function receita(){

    document.getElementById("gerenc-despesas").style.display = "none";
	document.getElementById("gerenc-receita").style.display = "block";	
        
}

function despesa(){
	
	document.getElementById("gerenc-receita").style.display = "none";
	document.getElementById("gerenc-despesas").style.display = "block";    
	
}



