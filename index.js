// document.getElementById("countEl").innerText = 5

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch*secondBatch
// console.log(count)

// let myAge = 20
// let humanDogRatio = 7
// let myDogAge = myAge*humanDogRatio
// console.log(myDogAge)

// let count = 5
// count = 7
// count = count+1
// count *= 4
// console.log(++count)

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints += 50
// console.log(bonusPoints)
// bonusPoints -= 75
// console.log(bonusPoints)
// bonusPoints += 45
// console.log(bonusPoints)

// let cEl = document.getElementById("countEl")

// document.getElementById("countEl").innerText = cEl

// Some problem with console.log() for an element in the document

// console.log(cEl)

// let count = 0
// let countElem = document.getElementById("countEl")
// console.log(count)
// console.log(countElem)

// function increment()
// {
//     count++;
//     countElem.innerText = count
// }

// function reset()
// {
//     count = 0;
//     countElem.innerText = count
// }

// function save()
// {
//     console.log(count)
// }

// let name = 'Raj'
// let greeting = 'Good Morning'

// let msg = name+'! '+greeting
// console.log(msg)

// let points = '10'
// let bonusPoints = 4
// // In any operation between a string and a number, the number is always converted into a string.

// let totalPoints = points+bonusPoints

// console.log(totalPoints)

// let welcomeEl = document.getElementById('welcome-el')
// let myName = "Raj"
// let greet = "How are You?"

// welcomeEl.innerText = welcomeEl.innerText+'! '+greet+' '+myName

// welcomeEl.innerText +='👋'

// console.log(welcomeEl.innerText)

let count = 0
let countElem = document.getElementById("countEl")
// console.log(count)
// console.log(countElem)
let prev = document.getElementById('entries')
let temp = 'Previous entries: '
let textCount = 0

function increment()
{
    count++;
    countElem.textContent = count
}

function reset()
{
    count = 0;
    textCount = 0
    countElem.textContent = count
    prev.textContent = temp
}

function save()
{
    if(textCount == 0)
    {
        prev.textContent += +count
    }
    else
    {
        prev.textContent += ' - '+count
    }
    textCount++;
    console.log(count)
}

//innerText cannot read spaces very well, so we use textContent instead of it.
 