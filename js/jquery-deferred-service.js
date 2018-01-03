jqueryDeferredService = (function(){

    return {
        callUF :function () {
            var def = $.Deferred();
        
            ajaxService.callUF()
                .done(function(data) {
                    def.resolve(data);
                })
                .fail(function(data) {
                    def.reject(data.responseText);
                });
        
            return def.promise();
        },
        callMunicipios: function() {
            var def = $.Deferred();
        
            ajaxService.callMunicipios()
                .done(function(data) {
                    def.resolve(data);
                })
                .fail(function(data) {
                    def.reject(data.responseText);
                });
        
            return def.promise();	
        }        
    }
    
})();