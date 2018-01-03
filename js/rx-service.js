rxService = (function(){

    return {
        callUF :function () {
            return Rx.Observable.create(function(observer){
                ajaxService.callUF()
                .done(function(data) {
                    observer.next(data);
                    observer.complete();
                })
                .fail(function(data) {
                    observer.error(data);
                });               
            });
        },
        callMunicipios: function() {
            return Rx.Observable.create(function(observer){
                ajaxService.callMunicipios()
                .done(function(data) {
                    observer.next(data);
                    observer.complete();
                })
                .fail(function(data) {
                    observer.error(data);
                });               
            });	
        }        
    }
    
})();