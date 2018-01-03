var ajaxService = (function(){

    return {
        callMunicipios: function(){
            return 	$.ajax({
                url: 'data/municipios.json',
                type: 'GET',
                dataType: 'json',
                cache: false
            });
        },
        callUF: function(){
            return 	$.ajax({
                url: 'data/uf.json',
                type: 'GET',
                dataType: 'json',
                cache: false
            });
        }
    }

})();