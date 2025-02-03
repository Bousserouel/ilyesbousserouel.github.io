function unClicSurUnElement() {
	alert ("Ceci est un message d’alerte." + "\n" + "Vous devez saisir une donnée.")


}

function calculIMC() {
		var poids = document.getElementById('poids').value;
		var taille = document.getElementById('taille').value;
	
	
	

poids = poids * 1;
taille = (taille * 1) / 100;

var IMC = poids / (taille * taille);

IMC = Math.round(IMC * 100) / 100;

 
if ( IMC > 30) {
	document.getElementById('result').innerText = " Vous etes obèse Vous avez un IMC de : " + IMC;
	
} else if (IMC >= 25) {
	
	document.getElementById('result').innerText = " Vous etes en surpoids Vous avez un IMC de : "  + IMC;
} else if (IMC >= 18.5) {
	
	document.getElementById('result').innerText = " Votre corpulence est normal Vous avez un IMC de : " + IMC;
} else {
	
	document.getElementById('result').innerText = " vous avez une Insuffisance pondérale Vous avez un IMC de : " + IMC;
}

}
