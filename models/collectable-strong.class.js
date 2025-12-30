class CollectableStrong extends CollectableItem {

        IMAGE_STRONG = [
        "gameassets/Collectable Object/collectable/1.png",
        "gameassets/Collectable Object/collectable/1.png",
        "gameassets/Collectable Object/collectable/2.png",
        "gameassets/Collectable Object/collectable/2.png",
        "gameassets/Collectable Object/collectable/3.png",
        "gameassets/Collectable Object/collectable/3.png",
        "gameassets/Collectable Object/collectable/4.png",
        "gameassets/Collectable Object/collectable/4.png",
        "gameassets/Collectable Object/collectable/5.png",
        "gameassets/Collectable Object/collectable/5.png",
        "gameassets/Collectable Object/collectable/4.png",
        "gameassets/Collectable Object/collectable/3.png",
        "gameassets/Collectable Object/collectable/2.png",  
        
    ];

    currentImage = 0;
    hitboxOffsetX = 10;
    hitboxOffsetY = 10;
    hitboxWidth = 65;
    hitboxHeight = 60;

    constructor(){
        super().loadImage('gameassets/Collectable Object/collectable/1.png')
        this.loadImages(this.IMAGE_STRONG);
        this.height = 90
        this.width = 90
        this.y = 280
        this.x = 80 + Math.random()* 3
        this.animateCollectable();
    }

        animateCollectable() {
            setInterval(() => {
                this.playAnimationLoop(this.IMAGE_STRONG)
            },1000 / 10);
        }

}