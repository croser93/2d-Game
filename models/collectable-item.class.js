class CollectableItem extends MovableObject {

    IMAGE_SPIN = [
        "gameassets/Collectable Object/Coin_01.png",
        "gameassets/Collectable Object/Coin_02.png",
        "gameassets/Collectable Object/Coin_03.png",
        "gameassets/Collectable Object/Coin_04.png",
        "gameassets/Collectable Object/Coin_05.png",
        "gameassets/Collectable Object/Coin_06.png",
    ];

    currentImage = 0;

    constructor(){
        super().loadImage('gameassets/Collectable Object/Coin_01.png')
        this.loadImages(this.IMAGE_SPIN);
        this.height = 32
        this.width = 32
        this.y = 310
        this.x = 150 + Math.random()* 3
        this.animateCollectable();
    }

        animateCollectable() {
            setInterval(() => {
                this.playAnimationLoop(this.IMAGE_SPIN)
            }, 1000 / 10);
        }
}

