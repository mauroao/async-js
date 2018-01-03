promiseService = (function(){

    return {
        callUF :function () {
            return new Promise(function(resolve, reject){
                ajaxService.callUF()
                .done(function(data) {
                    resolve(data);
                })
                .fail(function(data) {
                    reject(data.responseText);
                });               
            });
        },
        callMunicipios: function() {
            return new Promise(function(resolve, reject){
                ajaxService.callMunicipios()
                .done(function(data) {
                    resolve(data);
                })
                .fail(function(data) {
                    reject(data.responseText);
                });               
            });	
        }        
    }
    
})();