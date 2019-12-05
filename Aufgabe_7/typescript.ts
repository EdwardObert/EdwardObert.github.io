 //Kick

    window.addEventListener("load", function() {

        document.querySelector("#b1").addEventListener("mousedown", function() {playSample("kick.mp3");



    });

    //Snare

    

        document.querySelector("#b2").addEventListener("mousedown", function() { playSample("snare.mp3");

    });

        //haft

    

        document.querySelector("#play2").addEventListener("mousedown", function() { playSample("FFM2.mp3");

    });


    //High-Hat

   

        document.querySelector("#b3").addEventListener("mousedown", function() {playSample("hihat.mp3");



   });

     //Tone F



        document.querySelector("#b4").addEventListener("mousedown", function() {playSample("F.mp3");






   });


 //Tone G


    document.querySelector("#b5").addEventListener("mousedown", function() {playSample("G.mp3");

});

 //Tone A



    document.querySelector("#b6").addEventListener("mousedown", function() {playSample("A.mp3");


});

//Tone C



    document.querySelector("#b7").addEventListener("mousedown", function() {playSample("C.mp3");



});

//Lache



    document.querySelector("#b8").addEventListener("mousedown", function() {playSample("laugh-1.mp3");



});

//Lachee


    document.querySelector("#b9").addEventListener("mousedown", function() { playSample("laugh-2.mp3");





});

//special


document.querySelector("#b10").addEventListener("mousedown", function() { playSample("spaghetti.mp3");





});


//abfahrt



    document.querySelector("#play").addEventListener("click", StartBeat)

} );

function playSample (PlayBeat: string){

    var sound:HTMLAudioElement = new Audio("assets/" + PlayBeat);
    sound.play();};


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

};


    }
//kleiner Gag

window.addEventListener("load", function() {

    this.document.querySelector("#play2").addEventListener("mousedown", playHaft)

    function playHaft () {
        var sound:HTMLAudioElement = new Audio("FFM2.mp3");
        sound.play();
    }})
