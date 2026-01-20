class CollectableBar extends StatusBar {
    percentage = 0;
    x = 20;
    y = 80;
    width = 200;
    height = 20;
    backgroundColor = 'rgba(0, 0, 0, 0.5)';
    borderColor = 'white';
    borderWidth = 2;
    gradientColorStart = '#f7cc6fff';
    gradientColorEnd = '#f8b600ff';
    img ='gameassets/Collectable Object/Coin_01.png'

    constructor() {
        super();
        this.loadImage('gameassets/Collectable Object/Coin_01.png');
    }

/**
 * Sets the percentage value for the status bar.
 * @param {number} percentage - The percentage value to set (clamped between 0 and 100).
 */
    setPercentage(percentage) {
        this.percentage = Math.max(0, Math.min(100, percentage));
    }

}