class MovableObject {
    x = 0;
    y = 260;
    img;
    height = 100;
    width = 100;
    imageChache = {};

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

    moveRight() {
        console.log("move")
        
    }
}