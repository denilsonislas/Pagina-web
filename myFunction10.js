function myFunction10() {
	var copyText=
document.getElementById("myInput10");

	copyText.select();
	copyText.setSelectionRange(0, 9999);
navigator.clipboard.writeText(copyText.value);


}