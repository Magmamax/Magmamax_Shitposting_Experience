document.getElementById("jaimeBala").addEventListener("click", function() {
    const image = document.getElementById("jaimeBala");
    const audio = document.getElementById("myAudio");
    const originalSrc = "https://magmashitposting.lol/img/JaimeG_01.png";
    const newSrc = "https://magmashitposting.lol/img/JaimeG_02.png";

    // Cambiar la imagen
    image.src = newSrc;

     // Reproducir el sonido
    audio.play();

    // Después de 1 segundo, volver a la imagen original
    setTimeout(function() {
        image.src = originalSrc;
    }, 500);
});