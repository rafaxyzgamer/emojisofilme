emoji="";

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qHJ7HGKbu/model.json',modelLoaded);

Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() 
{ 
Webcam.snap(function(data_uri) {
 document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
});
}

console.log('ml5 version:', ml5.version);

function modelLoaded() {
console.log('model Loaded!');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "Esse é meu emoji";
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        emoji = results[0].label;

        speak();
        if(results[0].label == "O")
        {
            document.getElementById("update_emoji").innerHTML = "⚐︎";
        }
        if(results[0].label == "L")
        {
            document.getElementById("update_emoji").innerHTML = "☹︎";
        }
        if(results[0].label == "A")
        {
            document.getElementById("update_emoji").innerHTML = "✌︎";
        }
        if(results[0].label == "R")
        {
            document.getElementById("update_emoji").innerHTML = "☼︎";
        }
            
    }
}