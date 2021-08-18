function myFunction1() {
	var copyText=
document.getElementById("myInput1");

	copyText.select();
	copyText.setSelectionRange(0, 9999);
navigator.clipboard.writeText(copyText.value);


}