
$(document).ready(function() {

	$('#btn-deferred').click(function() {
		$.when(
			jqueryDeferredService.callMunicipios(), 
			jqueryDeferredService.callUF())
		.done(ui.desenharTabelaMunicipios)
		.fail(ui.exibirErro)
		.always(ui.exibirConcluido);
	});
	
	$('#btn-promise').click(function(){
		Promise
		.all([
			promiseService.callMunicipios(), 
			promiseService.callUF()])
		.catch(ui.exibirErro)
		.then(function(values){
			ui.desenharTabelaMunicipios(values[0], values[1]);
			ui.exibirConcluido()
		});
	});

	$('#btn-rxjs').click(function(){
		Rx.Observable
		.forkJoin(
			rxService.callMunicipios(),
			rxService.callUF())
		.map(function(data){
			return {
				mun: data[0],
				uf: data[1]
			}
		})
		.subscribe(
			function(data) {
				ui.desenharTabelaMunicipios(data.mun, data.uf);
			},
			ui.exibirErro,
			ui.exibirConcluido
		);
	});

});
