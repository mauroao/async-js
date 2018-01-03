function callUF() {
	var def = $.Deferred();

	$.ajax({
		url: 'data/uf.json',
		type: 'GET',
		dataType: 'json',
		cache: false
	})
	.done(function(data) {
		def.resolve(data);
	})
	.fail(function(data) {
		def.reject(data.responseText);
	});

	return def.promise();
}

function callMunicipios() {
	var def = $.Deferred();

	$.ajax({
		url: 'data/municipios.json',
		type: 'GET',
		dataType: 'json',
		cache: false
	})
	.done(function(data) {
		def.resolve(data);
	})
	.fail(function(data) {
		def.reject(data.responseText);
	});

	return def.promise();	
}

function desenharTabelaMunicipios(municipios, ufs) {
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

function exibirConcluido() {
	$('div#result').append($('<p>concluido</p>'));	
}

function exibirErro(err) {
	$('div#result').html(err);
}

$(document).ready(function() {
	$('button').click(function() {
		$.when(callMunicipios(), callUF())
		.done(desenharTabelaMunicipios)
		.fail(exibirErro)
		.always(exibirConcluido);
	});	
});
