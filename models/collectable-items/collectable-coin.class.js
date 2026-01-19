class CollectableItem extends MovableObject {

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
        this.y = 310
        this.x = 600 + Math.random() * 3000; // hinteren wert verstellen, für verschiedene anordnung der x achse
        this.animateCollectable();
    }

        animateCollectable() {
            setInterval(() => {
                this.playAnimationLoop(this.IMAGE_COIN)
            }, 1000 / 10);
        }
}

