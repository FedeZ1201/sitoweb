//prendere l'immagine
var pic = $('.banner .pic li');
//puntini
var tab = $('.banner .tab li');
//lunghezza
var len=pic.length;
var first =0;
//timer
var timer;

//iniziallizzazione
tab.eq(0).addClass('on');
pic.hide().eq(0).show();

//funzione per i puntini
tab.click(function () {
    var x= $(this).index();
    if(x != first){
        change(x)
    }
})

//funzione principale per cambiare le foto
function change(n) {
    // togliere gli attributi vecchi e mettere quelli nuovi
    tab.eq(first).removeClass('on');//togliere il valore on a l'immagine vecchia
    pic.eq(first).fadeOut(2000); // fadeout l'immagine precedente
    first = n;
    tab.eq(first).addClass('on')// display l'immagine nuova
    pic.eq(first).fadeIn(2000); //fadein l'immagine nuova
}

//funzione per far cambiare autonomamente le immagini
function auto() {
    timer = setInterval(function () {
        var x= first;
        x++;
        x %= len;//per non farlo andare oltre al numero di immagini
        change(x);
    },3000);//cambiare immagine ogni 3sec
}
auto();

//funzione per non far cambiare autonomamente l'immagine quando sono sopra l'immagine
$('.banner').hover(function () {
    clearInterval(timer);
},auto);

