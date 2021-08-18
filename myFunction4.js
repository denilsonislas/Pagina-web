function myFunction4() {
	var copyText=
document.getElementById("myInput4");

	copyText.select();
	copyText.setSelectionRange(0, 9999);
navigator.clipboard.writeText(copyText.value);


}