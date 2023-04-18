
let divContainer = document.querySelector('.div-container');
let divInput = document.querySelector('.div-input');
let resultSection = document.querySelector('.append-section');
let funFacts = document.querySelector('.fun-facts');
let base_url = 'http://numbersapi.com/';


let multipleNumbers = "22,37,42,13";

function appendNumbers(key, value){
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `<p><strong>${key}</strong>: ${value}</p>
                               `;
    resultSection.append(newDiv);
};

axios.get(base_url+multipleNumbers,
            {headers:{'Content-Type':'application/json'}})
    .then(res => {
        for (let[key, value] of Object.entries(res.data)){
            appendNumbers(key, value);          
            }
        });



let funNumber = 13;

let fourPromises = [];

for (let i = 1; i < 5; i++){
    fourPromises.push(
        axios.get(base_url+funNumber, 
            {headers:{'Content-Type':'application/json'}} 
        )
    );
}

Promise.all(fourPromises)
    .then(responseArr => {
        responseArr.forEach( p => { 
            let newP = document.createElement('p');
            newP.innerHTML = `<p> · ${p.data}</p>`
            funFacts.append(newP)
        })
    });



function getNumber(){
    return new Promise((resolve, reject) =>{

        
    })
};