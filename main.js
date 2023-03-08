status = ""
objects = []


function preload(){

}

function setup(){
    
}

function draw(){
    
    if(status != ""){
        for(var i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "status: objeto detectado"   
            fill("#000000")
            percente = floor(objects[i].confidence*100)
            text(objects[i].label + " " + percente + "%", objects[i].x, objects[i].y)
            noFill()
            stroke("#FF0000")
            rect(objects[i].x ,objects[i].y ,objects[i].width ,objects[i].height)
        }
    }
}

