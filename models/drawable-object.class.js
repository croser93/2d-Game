class DrawableObject {

    x = 0;
    y = 180;
    imageCache = {};
    img;
    height = 100;
    width = 100;
    hitboxOffsetX = 0;
    hitboxOffsetY = 0;
    hitboxWidth = 0;
    hitboxHeight = 0;

/**
 * Loads multiple images into the image cache.
 * @param {Array<string>} arr - Array of image paths to load.
 */
    loadImages(arr){
        arr.forEach((path) => {   
            if (IMAGE_CACHE[path]) {
                this.imageCache[path] = IMAGE_CACHE[path];
            } else {
                let img = new Image();
                img.src = path;
                this.imageCache[path] = img;
            }
        });
    }

/**
 * Loads a single image from the cache or creates a new image.
 * @param {string} path - The path to the image file.
 */
    loadImage(path){
        if (IMAGE_CACHE[path]) {
            this.img = IMAGE_CACHE[path];
        } else {
            this.img = new Image();
            this.img.src = path;
        }
    }

/**
 * Draws a debug frame around the object's hitbox.
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 */
    drawFrame(ctx){
    if (this instanceof Character || this instanceof Archer || this instanceof Endboss || this instanceof CollectableItem || this instanceof Attack) {
        ctx.beginPath();
        ctx.lineWidth = ('2');
        ctx.strokeStyle = ('red');
        let hitboxX = this.x + this.hitboxOffsetX;
        if (this.otherDirection) 
            hitboxX = this.x + this.width - this.hitboxOffsetX - (this.hitboxWidth || this.width);
        
        ctx.rect(
            hitboxX, 
            this.y + this.hitboxOffsetY, 
            this.hitboxWidth || this.width, 
            this.hitboxHeight || this.height
        );
        ctx.stroke();
        }
    }

/**
 * Draws the object's image on the canvas.
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 */
    drawItem(ctx){
        try{
            ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
        } catch(e){
            console.warn('Error loading image', e);
            console.log('Error', this.img.src)
        }
    }

    
}