class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;

    applyGravity() {
        setInterval(() => {
        if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
        if (this.x < -50 || this.x > 3600) {
            this.y += this.acceleration + 5;
        }
    }, 1000 / 25);
}

    isAboveGround(){    
        return this.y < 250
        
    }

    isColliding(item){
    return this.x + this.hitboxOffsetX + (this.hitboxWidth || this.width) > item.x + item.hitboxOffsetX &&
        this.y + this.hitboxOffsetY + (this.hitboxHeight || this.height) > item.y + item.hitboxOffsetY &&
        this.x + this.hitboxOffsetX < item.x + item.hitboxOffsetX + (item.hitboxWidth || item.width) &&
        this.y + this.hitboxOffsetY < item.y + item.hitboxOffsetY + (item.hitboxHeight || item.height)
    }


    moveRight() {     
        this.x += this.speed;
    }

    moveLeft(){
        this.x -= this.speed;
    }

    playAnimationLoop(images){
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;       
    }

   playAnimationOnce(images) {
    let index = Math.min(this.currentImage, images.length - 1);
    let path = images[index];
    this.img = this.imageCache[path];

        if (this.currentImage < images.length) {
            this.currentImage++;
        }
    }

    jump(){
        this.speedY = 15
    }

    
}