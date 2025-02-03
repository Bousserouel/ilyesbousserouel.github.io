function unClicSurUnElement() {
	alert ("Ceci est un message d’alerte." + "\n" + "Vous devez saisir une donnée.")


}

function calculsurfacecorporelle() {
		var poids = document.getElementById('poids').value;
		var taille = document.getElementById('taille').value;
	
	
	


var surfacecorporelle = Math.sqrt((poids * taille)/3600);

surfacecorporelle = Math.round(surfacecorporelle * 100) / 100;


document.getElementById('result').innerText = "Surface corporelle : " + surfacecorporelle + " en m²";

} 