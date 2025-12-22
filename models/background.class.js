class Background extends MovableObject{

    constructor(imagePath, x, y = 0){
        super().loadImage(imagePath)
        this.x = x
        this.y = y
        this.height = 720
        this.width = 480
    }

}

