function myFunction6() {
	var copyText=
document.getElementById("myInput6");

	copyText.select();
	copyText.setSelectionRange(0, 9999);
navigator.clipboard.writeText(copyText.value);


}