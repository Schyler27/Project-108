function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/IGb3iscvh/model.json' , modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function gotResults(error , results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("detected_animal").innerHTML = 'Detected Dog - ' + dog + "Detected Cat - " + cat + "Detected Lion - " + lion + "Detected Cow - " + cow ;
        document.getElementById("animal_voices").innerHTML = 'Detected Voice Is Of ' + results[0].label;
        document.getElementById("detected_animal").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("animal_voices").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img = document.getElementById('animal_images');

        if(results[0].label == "Bark"){
            img.src = 'corgi-excited.gif';
            dog = dog + 1;
        } else if(results[0].label == "Meow"){
            img.src = 'NeglectedWideBuckeyebutterfly-max-1mb.gif';
            cat = cat + 1;
        }  else if(results[0].label == "Roar"){
            img.src = '754ce202ab77d2db2f8c898826bfd41e.gif';
            lion = lion + 1;
        } else if(results[0].label == "Moo"){
            img.src = '1932837_7022c';
            cow = cow + 1;
    }
}

}