// TERZA RIPETIZIONE

// selezione della freccia dello slider e comando

$(".next").click(function() {

activeImg(); // Creare questa funzione

})

$(".prev").click(function() {

returnImg (); // crreare questa funzione

})


// ***********FUNZIONI*************

function activeImg () {
    var imgRight = $(".images img.active")
    var cerchio = $(".nav i.active")
    imgRight.removeClass("active");
    cerchio.removeClass("active");
    if (imgRight.hasClass("last")) {
    $(".images img.first").addClass("active")
    $(".nav i.first").addClass("active")
} else{
        imgRight.next().addClass("active")
        cerchio.next().addClass("active")

 }


}


function returnImg() {
    var imgRight = $(".images img.active");
    var cerchio = $(".nav i.active")
    imgRight.removeClass("active");
    cerchio.removeClass("active");
    if (imgRight.hasClass("first")) {
    $(".images img.last").addClass("active");
    $(".nav i.last").addClass("active")
} else {
    imgRight.prev().addClass("active");
    cerchio.prev().addClass("active");
    }

}
















//
// // la freccia a destra con il click fa scorrere le immagini
// $(".next").click(function() {
//     nextImg(); // creare funzione
// })
//
//
// $(".prev").click(function() {
//     prevImg(); //creare funzion
// })
//
//
//
//
// // ***********FUNZIONI*************
//
// function nextImg () {
//     var activeImg = $(".images img.active");
//     var cerchioAttivo = $(".nav i.active");
//     activeImg.removeClass("active");
//     cerchioAttivo.removeClass("active");
//     if (activeImg.hasClass("last")) {
//         $(".images img.first").addClass("active");
//         $(".nav i.first").addClass("active");
//     } else {
//     activeImg.next().addClass("active");
//     cerchioAttivo.next().addClass("active");
//     }
// }
//
// function prevImg() {
//     var activeImg = $(".images img.active");
//     var cerchioAttivo = $(".nav i.active");
//     activeImg.removeClass("active");
//     cerchioAttivo.removeClass("active");
//     if (activeImg.hasClass("first")) {
//     $(".images img.last").addClass("active");
//     $(".nav i.last").addClass("active");
//
//     } else {
//     activeImg.prev().addClass("active");
//     cerchioAttivo.prev().addClass("active");
//
//     }
// }
//




















// // quando clicco sul pulsante prev
// $(".prev").click (function() {
// prevImg () // creare una funzione per sscorrere
//
// })
//
// // quando clicco su next
//
// $(".next").click (function() {
//     nextImg() // devo andare a crare unaltra funzione
//
// })
//
//
// // ********FUNZIONI********
//
// function nextImg () {
//     // memorizzo in una variabile immagine attiva
//     var activeImg = $(".images img.active");
//     console.log(activeImg);
//
//     // togliere la classe
//     activeImg.removeClass("active");
//     if (activeImg.hasClass("last")) {
//     $(".images img.first").addClass("active");
// } else {
//     // aggungere la classe al prossimo
//     activeImg.next().addClass("active");
// }
//
//
// }
