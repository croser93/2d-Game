class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;

/**
 * Applies gravity to the object, making it fall when above ground.
 */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
            if (this.x < -50 || this.x > 4600) {
                this.y += this.acceleration + 5;
            }    if (this.y > 261 && this instanceof Character) {
                this.y = 260;
        }
        }, 1000 / 30);
    }

/**
 * Checks if the object is above the ground level.
 * @returns {boolean} True if the object is above ground, false otherwise.
 */
    isAboveGround(){    
        return this.y <= 259  
    }

/**
 * Checks if this object is colliding with another item.
 * @param {Object} item - The item to check collision with.
 * @returns {boolean} True if colliding, false otherwise.
 */
    isColliding(item){
    return this.x + this.hitboxOffsetX + (this.hitboxWidth || this.width) > item.x + item.hitboxOffsetX &&
        this.y + this.hitboxOffsetY + (this.hitboxHeight || this.height) > item.y + item.hitboxOffsetY &&
        this.x + this.hitboxOffsetX < item.x + item.hitboxOffsetX + (item.hitboxWidth || item.width) &&
        this.y + this.hitboxOffsetY < item.y + item.hitboxOffsetY + (item.hitboxHeight || item.height)
    }

/**
 * Moves the object to the right.
 */
    moveRight() {     
        this.x += this.speed;
    }

/**
 * Moves the object to the left.
 */
    moveLeft(){
        this.x -= this.speed;
    }

/**
 * Plays an animation in a loop from the provided image array.
 * @param {Array<string>} images - Array of image paths for the animation.
 */
    playAnimationLoop(images){
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;       
    }

/**
 * Plays an animation once from the provided image array.
 * @param {Array<string>} images - Array of image paths for the animation.
 */
  playAnimationOnce(images, reset = false) {
    if (reset) this.currentImage = 0;

    let index = Math.min(this.currentImage, images.length - 1);
    let path = images[index];
    this.img = this.imageCache[path];

    if (this.currentImage < images.length)
        this.currentImage++;
}

/**
 * Sets the vertical speed of the object.
 * @param {number} speed - The vertical speed value to set.
 */
    setSpeedY(speed){
        this.speedY = speed;
    }

    
}