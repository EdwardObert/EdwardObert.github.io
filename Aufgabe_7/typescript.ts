//kick

window.addEventListener("load", function() {

    this.document.querySelector("#b1").addEventListener("mousedown", playSample)

    function playSample () {
        var sound:HTMLAudioElement = new Audio("kick.mp3");
        sound.play();
        
    }})


    //Snare

window.addEventListener("load", function() {

    this.document.querySelector("#b2").addEventListener("mousedown", playSample)

    function playSample () {
        var sound:HTMLAudioElement = new Audio("snare.mp3");
        sound.play();
    }})


    //hihat

    window.addEventListener("load", function() {

        this.document.querySelector("#b3").addEventListener("mousedown", playSample)
    
        function playSample () {
            var sound:HTMLAudioElement = new Audio("hihat.mp3");
            sound.play();
        }})


//Bing1

window.addEventListener("load", function() {

    this.document.querySelector("#b4").addEventListener("mousedown", playSample)

    function playSample () {
        var sound:HTMLAudioElement = new Audio("A.mp3");
        sound.play();
    }})


//B2

window.addEventListener("load", function() {

    this.document.querySelector("#b5").addEventListener("mousedown", playSample)

    function playSample () {
        var sound:HTMLAudioElement = new Audio("C.mp3");
        sound.play();
    }})


    //B3

    window.addEventListener("load", function() {

        this.document.querySelector("#b6").addEventListener("mousedown", playSample)
    
        function playSample () {
            var sound:HTMLAudioElement = new Audio("F.mp3");
            sound.play();
        }})



        //B3

        window.addEventListener("load", function() {

            this.document.querySelector("#b7").addEventListener("mousedown", playSample)
        
            function playSample () {
                var sound:HTMLAudioElement = new Audio("G.mp3");
                sound.play();
            }})


    //lache

    window.addEventListener("load", function() {

        this.document.querySelector("#b8").addEventListener("mousedown", playSample)
    
        function playSample () {
            var sound:HTMLAudioElement = new Audio("laugh-1.mp3");
            sound.play();
        }})

    //lachee

    window.addEventListener("load", function() {

        this.document.querySelector("#b9").addEventListener("mousedown", playSample)
    
        function playSample () {
            var sound:HTMLAudioElement = new Audio("laugh-2.mp3");
            sound.play();
        }})


    //snare

    window.addEventListener("load", function() {

        this.document.querySelector("#b9").addEventListener("mousedown", playSample)
    
        function playSample () {
            var sound:HTMLAudioElement = new Audio("snare.mp3");
            sound.play();
        }})


    //spaghetti and meatballsssss

    window.addEventListener("load", function() {

        this.document.querySelector("#b10").addEventListener("mousedown", playSample)
    
        function playSample () {
            var sound:HTMLAudioElement = new Audio("spaghetti.mp3");
            sound.play();
        }})


//abfahrt

window.addEventListener("load", function(Beat) {

    document.querySelector("#play").addEventListener("click", StartBeat)






} )

function StartBeat() {
    var inter = setInterval(Beat,300)
    var myBeatyo= ["kick.mp3", "kick.mp3", "snare.mp3", "hihat.mp3", "kick.mp3", "kick.mp3", "snare.mp3","hihat.mp3", "kick.mp3", "kick.mp3", "snare.mp3", "hihat.mp3", "kick.mp3"]
    var index = 0;
function Beat () {
    var MyMelody:HTMLAudioElement = new Audio (myBeatyo [index]);
    MyMelody.play();
    index+=1;
    if (index>11) index=0;
    console.log(myBeatyo [index]);

}

}

//kleiner Gag

window.addEventListener("load", function() {

    this.document.querySelector("#play2").addEventListener("mousedown", playSample)

    function playSample () {
        var sound:HTMLAudioElement = new Audio("FFM2.mp3");
        sound.play();
    }})



