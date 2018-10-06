function go(page) {
	location.href = page + '.html';
}
function ln(a) {
	//$("#pdf").attr('src', a + '.pdf');
	var parent = $('#pdf').parent();
	var newElement = "<embed src='files/" + a + ".pdf'" + " id='pdf' width='100%' height='100%' type='application/pdf'>";
	$('#pdf').remove();
	parent.append(newElement);
}
function loadBody() {
	var h = $(window).height() - $('#nav').height(); 
	h -= 20;
	$('#pageContainer').css('height', h + 'px');
	$('#sidebar').css('height', h + 'px');
}
$(window).resize(function() {
	loadBody();
});

//FOR WHEN ALL LAB NOTEBOOK ENTRIES ARE COMPLETE, PARSED, & CONVERTED TO PDF//
function loadEntries() {
	var num_entries = 130
	for(i = 1; i <= num_entries; i++) {
		var elem = "<li onClick='ln(" + i + ")'><a class='subtitle'>Entry " + i + "</a></li>";
		$('#sidebar').append(elem);
	}
}
