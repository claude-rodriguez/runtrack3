$("#button").click(function (){
    //envoie le texte dans la div
    $("#myarticle").append('<p>le $ est un bon élément monétaire. Le # de twitter est une bonne ID. Il faudra faire le point avec la classe pour cacher cet élément.</p>')
 });
 
 //Empty cache le la div
 $("#buttoncacher").click(function (){
    $("#myarticle").empty();
 });