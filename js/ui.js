var ui = (function(){
    return {
        desenharTabelaMunicipios : function(municipios, ufs) {
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
        },
        
        exibirConcluido : function () {
            $('div#result').append($('<p>concluido</p>'));	
        },
        
        exibirErro : function(err) {
            $('div#result').html(err);
        } 
    }   
})();