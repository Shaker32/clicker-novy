const draven = document.getElementById("bans");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("upgrade");

let numberOfDravens = 0;
let costOfClickUpgrade = 150;
let clickUpgradeIncrease = 1;



//.onclick - na kliknuti
// () => arrow funkce
// {} - scope
draven.onclick = () => {
    //zvednout cislo o 1
numberOfDravens += clickUpgradeIncrease;

    //zobrazit v odstavci
    counter.innerText = "bans:" + numberOfDravens;
};


const clickUpgradeFunction = () => {
    if(numberOfDravens >= costOfClickUpgrade ){
        numberOfDravens -= costOfClickUpgrade;
        costOfClickUpgrade += 50;
        clickUpgradeIncrease ++;
        counter.innerHTML = "Bans:" + numberOfDravens;
        upgrade.innerHTML = "upgrade: " + costOfClickUpgrade;
   
        
        
    }
}

 upgrade.onclick = clickUpgradeFunction;
const autoClicker = document.getElementById("autoClicker");

let autoCLickerCost = 400;
let autoClickerIncrease = 1;
let autoClickInterval;

autoClicker.onclick = () =>  {
    if (numberOfDravens >= autoCLickerCost){
        numberOfDravens -= autoCLickerCost;
        autoCLickerCost += 500;
        autoClicker.innerHTML = "Upgrade auto clicker:" + autoCLickerCost;
        counter.innerHTML = "Bans:" + numberOfDravens;
        autoClickerIncrease ++;

         clearInterval(autoClickInterval);
         autoClickInterval = setInterval(() =>{
            numberOfDravens += autoClickerIncrease;
            counter.innerHTML = "Bans:" + numberOfDravens;

         }, 1000);
    }
}













function cheats() {
    console.log("cheats on");
    numberOfDravens += 1000000;
    counter.innerText = "dravens:" + numberOfDravens;

}