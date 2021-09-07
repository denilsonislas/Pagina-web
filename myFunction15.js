function myFunction15() {
	var copyText=
document.getElementById("myInput15");

	copyText.select();
	copyText.setSelectionRange(0, 9999);
navigator.clipboard.writeText(copyText.value);


}
