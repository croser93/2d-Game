class DrawableObject {

    x = 0;
    y = 180;
    imageCache = {};
    img;
    height = 100;
    width = 100;



    loadImages(arr){
        arr.forEach((path) => {   
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
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
    
    drawItem(ctx){
        try{
            ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
        } catch(e){
            console.warn('Error loading image', e);
            console.log('Error', this.img.src)
            
        }
    }

    
}