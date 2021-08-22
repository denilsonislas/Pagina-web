function myFunction2() {
	var copyText=
document.getElementById("myInput2");

	copyText.select();
	copyText.setSelectionRange(0, 9999);
navigator.clipboard.writeText(copyText.value);


}