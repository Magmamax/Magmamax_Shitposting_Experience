let clickCount = 0;
const clickCountDisplay = document.getElementById('click-count');
const clicker = document.getElementById('clicker');
const upgradeList = document.getElementById('upgrade-list');
const objectList = document.getElementById('object-list');

const upgrades = [
    { name: 'Upgrade 1', cost: 10, effect: 'Doubles clicks' },
    { name: 'Upgrade 2', cost: 20, effect: 'Triples clicks' },
    // Add more upgrades here
];

const objects = [
    { name: 'Object 1', cost: 5, effect: 'Gives 5 clicks per second' },
    { name: 'Object 2', cost: 15, effect: 'Gives 10 clicks per second' },
    // Add more objects here
];

let clickMultiplier = 1;
let clickPerSecond = 0;

clicker.addEventListener('click', () => {
    clickCount += 1 * clickMultiplier;
    clickCountDisplay.textContent = clickCount;
    checkUpgrades();
    checkObjects();
});

function checkUpgrades() {
    upgrades.forEach((upgrade, index) => {
        if (clickCount >= upgrade.cost && !document.getElementById(`upgrade-${index}`)) {
            const li = document.createElement('li');
            li.id = `upgrade-${index}`;
            li.textContent = `${upgrade.name} - ${upgrade.effect} (Cost: ${upgrade.cost} clicks)`;
            li.addEventListener('click', () => purchaseUpgrade(index));
            upgradeList.appendChild(li);
        }
    });
}

function checkObjects() {
    objects.forEach((object, index) => {
        if (clickCount >= object.cost && !document.getElementById(`object-${index}`)) {
            const li = document.createElement('li');
            li.id = `object-${index}`;
            li.textContent = `${object.name} - ${object.effect} (Cost: ${object.cost} clicks)`;
            li.addEventListener('click', () => purchaseObject(index));
            objectList.appendChild(li);
        }
    });
}

function purchaseUpgrade(index) {
    if (clickCount >= upgrades[index].cost) {
        clickCount -= upgrades[index].cost;
        if (upgrades[index].effect.includes('Doubles')) clickMultiplier *= 2;
        if (upgrades[index].effect.includes('Triples')) clickMultiplier *= 3;
        // Add more upgrade effects here
        clickCountDisplay.textContent = clickCount;
        document.getElementById(`upgrade-${index}`).remove();
    }
}

function purchaseObject(index) {
    if (clickCount >= objects[index].cost) {
        clickCount -= objects[index].cost;
        if (objects[index].effect.includes('Gives 5 clicks per second')) clickPerSecond += 5;
        if (objects[index].effect.includes('Gives 10 clicks per second')) clickPerSecond += 10;
        // Add more object effects here
        clickCountDisplay.textContent = clickCount;
        document.getElementById(`object-${index}`).remove();
    }
}

setInterval(() => {
    clickCount += clickPerSecond;
    clickCountDisplay.textContent = clickCount;
}, 1000);
