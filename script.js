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

let dots = []
let lines = []

class dot {
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    draw(){
        c.fillStyle = 'blue';
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
        c.strokeStyle = 'red';
        c.beginPath();
        c.lineWidth = 1;
        c.moveTo(this.x, this.y);
        c.lineTo(this.xLineTo, this.yLineTo);
        c.stroke();

    }
}

function setup(){
    for (let i = 0; i < canvas.width/40; i++) {
        for (let z = 0; z < canvas.height/40; z++){
            dots.push(new dot(i*40, z*40, 2));
            console.log('first position:' + i*40 + 'other position' + (i+1)*40);
            //x:
            lines.push(new line(i*40, z*40, (i+1)*40, z*40));
            //y:
            lines.push(new line(i*40, z*40, i*40, (z+1)*40));
        }
    }
}
setup();

function update(){
    draw();
    requestAnimationFrame(update);
}

function draw(){
    for(i = 0; i < dots.length; i++){
        dots[i].draw();
        
    }
    for(z = 0; z < lines.length; z++){
        lines[z].draw();
    }
}
update();