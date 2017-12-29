function callUF() {
	return $.ajax({
		url: 'uf.json.txt',
		type: 'GET',
		dataType: 'json',
		cache: false
	});
}

function callMunicipios() {
	return $.ajax({
		url: 'municipios.json.txt',
		type: 'GET',
		dataType: 'json',
		cache: false
	});
}

function desenharTabelaMunicipios(municipiosResult, ufsResult) {

	var municipios = municipiosResult[0];
	var ufs = ufsResult[0];
	var output = '';

	ufs.forEach(function(uf) {
		output = [ '<p>', uf.UF, '</p> <ul>'].join('');

		var municipiosDoUF = municipios.filter(function(mun) {
			return mun.UF == uf.UF;
		})

		municipiosDoUF.forEach(function(mun) {
			output += ['<li>',mun.cidade,'</li>'].join('');
		});
		output += '</ul>';
		$('div#result').append($(output));
	});
}

$(document).ready(function() {
	
	$('button').click(function() {
		$.when(
			callMunicipios(), 
			callUF())
		.done(desenharTabelaMunicipios);
	});	
});