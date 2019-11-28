$(document).ready(function () {
    $(".main").onepage_scroll({
      sectionContainer: "section",
      //responsiveFallback: 600,
      loop: false,
      pagination: true
    });
  });

 /* 
 var app = document.getElementById('app');

  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 85,
  });

  typewriter
    .pauseFor(1000)
    .typeString('Dobrodošli, mi smo <br>')
    .pauseFor(800)
    .typeString('OPTOSINTEZA MARGLASS.')
    .pauseFor(800)
    .deleteChars(21)
    .pauseFor(500)
    .typeString('<span style="color: blue;">OPTOSINTEZA MARGLASS.</span>')
    .pauseFor(800)
    .deleteAll()
    .pauseFor(500)
    .typeString('Zvanični smo distributer za stakla i okvire linije Pro Line, Mono, Reserve i Emporio Sport.<br>')
    .pauseFor(800)
    .typeString('U nastavku pogledajte našu ponudu.')
    .pauseFor(800)
    .deleteAll()
    .pauseFor(1000)
    .start();
    */
