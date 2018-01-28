class URLParser {

    constructor(urlTemplate) {  
      this._urlTemplate  = urlTemplate.split("/");
    }
    
    format(fullUrl) { 
        var json    = {}; 
        var aUrl    =  fullUrl.split("?");
        if( aUrl.length>2){
            throw new Error("Error wrong query params");
        } 
        if(aUrl.length>1){ 
            this._setFormatQuery(aUrl[1],json);
        }
        this._setFormatURL(aUrl[0].split("/"),json);

        return json;
    } 

    _setFormatURL(aUrl,json) {
        this._urlTemplate.forEach(function (key, index) {
            if(key && key[0] === ":"){
                key= key.replace(":","");
                json[key] = aUrl[index];
            }
        });   

    }

    _setFormatQuery(aUrl,json) {
        var query = {};
        var pairs = aUrl.split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair      = pairs[i].split('=');
            json[pair[0]] = pair[1] || '';
        } 
    }


}
  var url = new URLParser("/:version/api/:collecton/:id");
  console.log( url.format("/6/api/listings/3?sort=desc&limit=10") );
 