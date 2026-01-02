class CollectableLive extends CollectableItem {

        IMAGE_LIVE = [
        "gameassets/Collectable Object/Life.png"];



    constructor(){
        super().loadImage('gameassets/Collectable Object/Life.png')
        this.loadImages(this.IMAGE_LIVE);
        this.y = 310
        this.x = 100 + Math.random()* 1000 
        this.animateCollectable();
    }

        animateCollectable() {
            setInterval(() => {
                this.playAnimationLoop(this.IMAGE_LIVE)
            },1000 / 10);
        }


}