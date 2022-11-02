/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ let jonSnowHealth = 100
let jonSnowDefense = 0
let jamieLannisterAttack = 35
let jonSnowAttack = 25

//Jon snow gets attacked by Jamie
if(jonSnowHealth < jamieLannisterAttack){
    console.log('Jon Snow had been slain!!!');
} else {
    // jonSnowHealth = jonSnowHealth - jamieLannisterAttack;
    jonSnowHealth -= jamieLannisterAttack;
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)

}


let healthkit = 50

if((jonSnowHealth + healthkit) > 100){
    jonSnowHealth = 100;
} else {
    jonSnowHealth += healthkit;
}
console.log(jonSnowHealth)


let coinLandsHeads = false; 

if(coinLandsHeads === true){
    console.log('They continue to fight and Jamie takes Jons head');
} else {
    console.log('Jon is allowed to run away');
}

for(let i = 0; i < 5; i++)
{
    jonSnowHealth -= jamieLannisterAttack;
    if(jonSnowHealth <= 0)
    {
        console.log(`Jon Snow has died after Attack #${i + 1}`);
        break;
    }
    else
    {
        console.log(`Jon Snow's Health: ${jonSnowHealth}`);
    }
}
