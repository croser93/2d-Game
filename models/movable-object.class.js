class MovableObject {
    x = 0;
    y = 260;
    img;
    height = 100;
    width = 100;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log("move")
        
    }
}