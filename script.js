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

function setup(){
    for (let i = 0; i < canvas.width/40; i++) {
        for (let z = 0; z < canvas.height/40; z++){
            dots.push(new dot(i*40, z*40, 2));
            test++;
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
}
update();