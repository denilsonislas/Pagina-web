function myFunction16() {
	var copyText=
document.getElementById("myInput16");

	copyText.select();
	copyText.setSelectionRange(0, 9999);
navigator.clipboard.writeText(copyText.value);


}
