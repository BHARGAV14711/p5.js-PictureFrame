function preload(){

}

function setup(){
    canvas = createCanvas(1000,550);
    canvas.position(0,100);
    video = createCapture(VIDEO);
 video.hide();
    tint_color = "";
}

function draw(){
    image(video,180,20,700,500);

    let c = color(255, 204, 0);
fill(c);
noStroke();

    rect(180, 20, 700, 20);
    rect(180, 500, 700, 20);

    rect(180, 20, 20, 500);
    rect(880, 20, 20, 500);

    let d = color(20, 250, 250);
    fill(d);
    noStroke();

    circle(185,25,50);
    circle(880+15,28,50);

    circle(185,20+500,50);
    circle(880+15,20+500,50);
}