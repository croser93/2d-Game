class MovableObject {
    x = 0;
    y = 180;
    img;
    height = 100;
    width = 100;
    imageChache = {};
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;

    applyGravity(){
        setInterval(() =>{
            if(this.isAboveGround() || this.speedY > 0)
            this.y -= this.speedY;
            this.speedY -= this.acceleration
        },1000 / 25)

    }

    isAboveGround(){
        return this.y < 250
    }

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((path) => {   
            let img = new Image();
            img.src = path;
            this.imageChache[path] = img;
        });
    }

    drawItem(ctx){
    ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
    }

    drawFrame(ctx){
        if (this instanceof Character || this instanceof Archer || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = ('2');
            ctx.strokeStyle = ('red');
            ctx.rect(this.x, this.y, this.height , this.width);
            ctx.stroke();
            
        }
    }

    isColliding(item){
        return this.x + this.width > item.x &&
            this.y + this.height > item.y &&
            this.x < item.x &&
            this.y < item.y + item.height
    }

    flipImage(ctx){

    }

    moveRight() {     
        this.x += this.speed;
    }

    moveLeft(){
        this.x -= this.speed;
    }

    playAnimation(images){
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageChache[path];
        this.currentImage++;       
    }

    jump(){
        this.speedY = 15
    }
}