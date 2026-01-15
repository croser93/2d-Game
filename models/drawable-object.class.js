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

    loadImage(path){
        if (IMAGE_CACHE[path]) {
            this.img = IMAGE_CACHE[path];
        } else {
            this.img = new Image();
            this.img.src = path;
        }
    }

    drawFrame(ctx){
    if (this instanceof Character || this instanceof Archer || this instanceof Endboss || this instanceof CollectableItem || this instanceof Attack) {
        ctx.beginPath();
        ctx.lineWidth = ('2');
        ctx.strokeStyle = ('red');
        
        let hitboxX = this.x + this.hitboxOffsetX;
        if (this.otherDirection) {
            hitboxX = this.x + this.width - this.hitboxOffsetX - (this.hitboxWidth || this.width);
        }
        
        ctx.rect(
            hitboxX, 
            this.y + this.hitboxOffsetY, 
            this.hitboxWidth || this.width, 
            this.hitboxHeight || this.height
        );
        ctx.stroke();
    }
}
    drawItem(ctx){
        try{
            ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
        } catch(e){
            console.warn('Error loading image', e);
            console.log('Error', this.img.src)
            
        }
    }

    
}