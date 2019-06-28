var photo;
var size=2;
var rows;
var cols;
function preload(){
    photo=loadImage("./photo1.jpg");
}
function setup(){
    createCanvas(500,600);
    rows=height/size;
    cols=width/size;
    photo.resize(cols,rows);
}
function draw(){
    pixelDensity(5)
    background(255);
    photo.loadPixels();
    for(var i=0;i<rows;i++){
        for(var j=0;j<cols;j++){
            var index=(j+i*cols)*4;
            if(brightness(color(photo.pixels[index],photo.pixels[index+1],photo.pixels[index+2]))>60){
                textSize(3);
                text("1",j*size,i*size+size)
            }
            else{
                textSize(3);
                text("0",j*size,i*size+size);
            }
            // rect(j*size,i*size,size,size);
        }
    }
    noLoop();
}
