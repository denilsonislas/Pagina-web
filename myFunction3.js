function myFunction3() {
	var copyText=
document.getElementById("myInput3");

	copyText.select();
	copyText.setSelectionRange(0, 9999);
navigator.clipboard.writeText(copyText.value);


}