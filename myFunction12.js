function myFunction12() {
	var copyText=
document.getElementById("myInput12");

	copyText.select();
	copyText.setSelectionRange(0, 9999);
navigator.clipboard.writeText(copyText.value);


}