function myFunction7() {
	var copyText=
document.getElementById("myInput7");

	copyText.select();
	copyText.setSelectionRange(0, 9999);
navigator.clipboard.writeText(copyText.value);


}