document.getElementById("openButton").addEventListener("click", function() {
    var envelope = document.getElementById("envelope");
    var flap = envelope.querySelector(".flap");
    var letter = envelope.querySelector(".letter");

    flap.style.transform = "rotateX(180deg)";
    letter.style.bottom = "0";
});
