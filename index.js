// constents
const ITEM_IN_BOX = ["handcuffs", "cutter", "magnifying lens", "drink", "cigarette"];


// Stats
let YourHealth = 3;
let EnemyHealth = 3;
let damageOutput = 1;
let turn = 1;
let numberOfItemsNeeded
let YourInventory
let EnemyInventory
let BulletAvailable = Array.from({ length: amount }, () => Math.round(Math.random()));

// -------------------------- functions 

// One time functions 


const Shoot = function (User) {
    if (damageOutput === 2) {
        User -= 2;
        damageOutput = 1
    }
    else User--;
    if (turn === 2) {

    }
}


const ChangeTurns = function (User) {

}
if (BulletAvailable.length === 0) {
    openbox(numberOfItemsNeeded, User)
}



const openbox = function (numberOfItemsNeeded, User) {
    // open box image
    // document.getElementById(User).innerHTML(<img src="openbox.jpg"/>)


    // generate random indexes
    let randomItemIndex = [];
    for (let i = 1; i < numberOfItemsNeeded; i++) {
        let randomIndex = Math.floor(Math.random() * ITEM_IN_BOX.length);
        document.getElementById(User).innerHTML(`<img src="${ITEM_IN_BOX[randomIndex]}.jpg"/>`)
        setTimeout(function () { }, 2000)
        addInStore()
    }
    // close box
    // document.getElementById(User).innerHTML(<img src="close.jpg"/>)
}





//  USE FUCNTIONS 
{
    const useHandcuffs = function (User) {
        if (turn===2) {
            document.getElementById(`${User}subtitle`).innerHTML()
        }
        turn = 2
    }
    const useCutter = function (User) {
        if (damageOutput === 2) { document.getElementById(`${User}subtitle`).innerHTML=<h1>you can't you use the cutter the gun already have double damage</h1>}
        damageOutput = 2
    }
    const useMagnifyingLens = (User) => BulletInGun[0] === 0 ? document.getElementById(`${User}bullet`).innerHTML=<img src="blue.jpg" /> : document.getElementById(`${User}buttle`).innerHTML=<img src="red.jpg" />;
    const useDrink = (User) => { document.getElementById(`${User}subtitle`).innerHTML=`<h1>The bullet was a ${BulletAvailable.shift() === 1 ? "Working " : "Empty "}one</h1>` }
    const useCigarette = (User) => User++;
}
