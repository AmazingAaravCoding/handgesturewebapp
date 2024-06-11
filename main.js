function check() {
    speak()
}
function capture() {
    Webcam.snap(function (img) {
        document.getElementById("result").innerHTML = "<img id=pic src=" + img + ">"
    })
}
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
})
camera = document.getElementById("camera")
Webcam.attach("#camera")
console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/W7DNUsOaj/model.json", modelloaded)
function modelloaded() {
    console.log("modelloaded");
}
p1 = ""
p2 = ""
function speak() {
    synth = window.speechSynthesis
    speak1 = "the first prediction is " + p1
    speak2 = "and the second prediction is " + p2
    utter = new SpeechSynthesisUtterance(speak1 + speak2)
    synth.speak(utter)
}
