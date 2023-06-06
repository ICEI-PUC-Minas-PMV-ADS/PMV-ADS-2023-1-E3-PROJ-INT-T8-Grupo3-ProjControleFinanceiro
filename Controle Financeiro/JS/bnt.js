//const teste = document.getElementById('bnt-despesa');

function receita(){
    
	document.getElementById('geren-desp').style.display= "none"
    document.getElementById('form-despesa').style.display= "none"
	document.getElementById('tab-despesa').style.display= "none"

	document.getElementById('geren-rec').style.display= "block"
    document.getElementById('form-receita').style.display= "block"
	document.getElementById('tab-receita').style.display= "block"
        
}

function despesa(){
    
	document.getElementById('geren-rec').style.display= "none"
    document.getElementById('form-receita').style.display= "none"
	document.getElementById('tab-receita').style.display= "none"
    
	document.getElementById('geren-desp').style.display= "block"
    document.getElementById('form-despesa').style.display= "block"
	document.getElementById('tab-despesa').style.display= "block"
}



