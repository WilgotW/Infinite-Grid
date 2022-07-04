const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    for(i = 0; i < dots.length; i++){
        dots.splice(i, 1);
    }
    setup();
});

let dots = [];
let lines = [];

const drawDots = false;

let xAndYspace = 50;

// var scale = 1;
// var originx = 0;
// var originy = 0;


class dot {
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius * xAndYspace/40;
    }
    draw(){
        c.fillStyle = 'black';
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fill();
    }
}
class line {
    constructor(x, y, xLine, yLine){
        this.x = x;
        this.y = y;
        this.xLineTo = xLine;
        this.yLineTo = yLine;
    }
    draw(){
        c.strokeStyle = 'black';
        c.beginPath();
        c.lineWidth = 1 * xAndYspace/40; 
        c.moveTo(this.x, this.y);
        c.lineTo(this.xLineTo, this.yLineTo);
        c.stroke();

    }
}

class square {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw(){
        c.fillStyle = 'red';

    }
}

function setup(){
    for (let i = 0; i < canvas.width/xAndYspace; i++) {
        for (let z = 0; z < canvas.height/xAndYspace; z++){
            dots.push(new dot(i*xAndYspace, z*xAndYspace, 2));
            //x line:
            lines.push(new line(i*xAndYspace, z*xAndYspace, (i+1)*xAndYspace, z*xAndYspace));
            //y line:
            lines.push(new line(i*xAndYspace, z*xAndYspace, i*xAndYspace, (z+1)*xAndYspace));
        }
    }
}
setup();

function update(){
    refrech();
    draw();
    requestAnimationFrame(update);
}
 
function draw(){
    // setup();
    if(drawDots){
        for(i = 0; i < dots.length; i++){
            dots[i].draw();
        }
    }
    for(z = 0; z < lines.length; z++){
        lines[z].draw();
    }
}
update();

function refrech(){
    // for(i = 0; i < lines.length; i++){
    //     lines.splice(i, 1);
    // }
    c.fillStyle = 'white';
    c.fillRect(0,0, canvas.width, canvas.height);
}
// let zoomScale = 0;
// canvas.onmousewheel = function (event){
//     zoomScale += event.wheelDelta/120;
//     xAndYspace += zoomScale;
//     console.log(xAndYspace);
//     refrech();
//     setup();
// }

window.addEventListener('keydown', function(event){
    console.log(event.keyCode);
   
});