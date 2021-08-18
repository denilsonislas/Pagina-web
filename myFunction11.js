function myFunction11() {
	var copyText=
document.getElementById("myInput11");

	copyText.select();
	copyText.setSelectionRange(0, 9999);
navigator.clipboard.writeText(copyText.value);


}