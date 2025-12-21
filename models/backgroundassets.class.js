class Backgroundassets extends MovableObject{

    constructor(imagePath, x, y = 340){
        super().loadImage(imagePath)
        this.x = x
        this.y = y
        this.height = 80
        this.width = 80

    }

}

class Backgroundassetsunder extends Backgroundassets{

    constructor(imagePath, x, y = 420){
        super().loadImage(imagePath)
        this.x = x
        this.y = y
    }

}