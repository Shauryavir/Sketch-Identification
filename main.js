function   setup() {
canvas = createCanvas(400,400)
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas)
}

function preload()
{
    classifier =ml5.imageClassifier('DoodleNet')
}

function draw(){
    strokeWeight(10);
    stroke(0)
    if(mouseIsPressed){
        line (pmouseX,pmouseY,mouseX,mouseY)
    }
}
 
function classifyCanvas(){
    classifier.classify(canvas,gotResults)
}

function gotResults(error,results){
    if(error){
        console.error(error)
    }
    else{
console.log(results);
document.getElementById("label").innerHTML="label :"+results[0].label;
document.getElementById("confidence").innerHTML="confidence :"+Math.round(results[0].confidence*100)+"%"
    }
}

function clearCanvas() {
    background("white")
}