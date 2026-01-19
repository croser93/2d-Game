class ManaBar extends StatusBar {
    percentage = 0
    x = 20;
    y = 50;
    width = 200;
    height = 20;
    backgroundColor = 'rgba(0, 0, 0, 0.5)';
    borderColor = 'white';
    borderWidth = 2;
    gradientColorStart = '#4e84faff';
    gradientColorEnd = '#0f57f1ff';
    img ='gameassets/Collectable Object/mana.png'


    constructor() {
        super();
        this.loadImage('gameassets/Collectable Object/mana.png');
    }

    setPercentage(percentage) {
        this.percentage = Math.max(0, Math.min(100, percentage));
    }

}