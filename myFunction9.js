function myFunction9() {
	var copyText=
document.getElementById("myInput9");

	copyText.select();
	copyText.setSelectionRange(0, 9999);
navigator.clipboard.writeText(copyText.value);


}