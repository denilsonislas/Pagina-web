function myFunction13() {
	var copyText=
document.getElementById("myInput13");

	copyText.select();
	copyText.setSelectionRange(0, 9999);
navigator.clipboard.writeText(copyText.value);


}