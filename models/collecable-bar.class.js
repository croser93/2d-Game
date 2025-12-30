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


    constructor() {
        super();
        this.percentage = 0;
    }

    setPercentage(percentage) {
        this.percentage = Math.max(0, Math.min(100, percentage));
    }

}