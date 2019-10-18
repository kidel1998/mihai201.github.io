window.addEventListener("deveceorientation",on_rotate_uab);

function on_roate_uab(e)
{
	document.getElementById("id_alpha").innerHTML =e.alpha;
	document.getElementById("id_beta").innerHTML =e.beta;
	document.getElementById("id_gama").innerHTML =e.gamma;
}