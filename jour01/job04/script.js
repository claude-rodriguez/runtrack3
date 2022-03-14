//permet d'afficher le résultat (box+page)

var year = prompt("Année : ");

var result = bisextile(year);

alert(result);
// permet d'indiquer les mois de février de 29 jours

function bisextile(année)
{
    var jours = new Date(année,2,0).getDate();
    if( jours == 29)
    {
        document.write(année + ' est bissextile');
        return(true);
    }
    else
    {
        document.write(année + " n'est pas bissextile");
        return(false);
    }
}