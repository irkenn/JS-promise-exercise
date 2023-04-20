
let divContainer = document.querySelector('.div-container');
let divInput = document.querySelector('.div-input');
let resultSection = document.querySelector('.append-section');
let funFacts = document.querySelector('.fun-facts');
let base_url = 'http://numbersapi.com/';

//This function helps in appending the results in the HTML page

function appendNumbers(key, value){
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `<p><strong>${key}</strong>: ${value}</p>
                               `;
    resultSection.append(newDiv);
};


// Get a single number from the API

async function getSingleNumber(number){
    let response = await axios.get(base_url+number,
                    {headers:{'Content-Type':'application/json'}})

    appendNumbers(number, response.data)
};

getSingleNumber(58);

// Get multiple numbers from the API

let multipleNumbers = "22,37,42,13";

async function getMultiplenumbers(){
    let response = await axios.get(base_url+multipleNumbers,
                {headers:{'Content-Type':'application/json'}})
    
    for (const key in response.data){
        appendNumbers(key, response.data[key]);          
        }
};

getMultiplenumbers();

// Get 4 facts about your favorite number

async function fourNumberFacts(number){
    let list = [];
    for (let i = 0; i < 4; i++){
        let numberResponse = await axios.get(base_url+number, 
                            {headers:{'Content-Type':'application/json'}})
        list.push(numberResponse); 
    }
    console.log('list', list)
    for (const value of list){
        let newP = document.createElement('p');
        newP.innerHTML = `<p> · ${value.data}</p>`
        funFacts.append(newP)
    }
}

let fourNumbersList = 13;

fourNumberFacts(fourNumbersList);
