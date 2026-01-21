class CollectableItem extends MovableObject {
       hitboxOffsetX = 8;
        hitboxOffsetY = 8;
        hitboxWidth = 15;
        hitboxHeight = 15;

    IMAGE_COIN = [
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
        this.loadImages(this.IMAGE_COIN);
        this.height = 32
        this.width = 32
        this.y = this.y = Math.random() * (280 - 160) + 160;
        this.x = 600 + Math.random() * 3000;
        this.animateCollectable();
    }
/**
 * play coin animet loop
 */
    animateCollectable() {
        setInterval(() => {
            this.playAnimationLoop(this.IMAGE_COIN)
        }, 1000 / 10);
    }
}

