let containerButton = document.querySelector('.container-button');
let containerCards = document.querySelector('.container-cards')
let baseUrl = 'https://deckofcardsapi.com/api/deck/'

let zIndexCount = 0
// first create the new deck
function randomDegrees(){
    let positiveNegative = Math.random() 
    if (positiveNegative > 0.5){
        positiveNegative = +1
        }
    else if (positiveNegative < 0.5){
        positiveNegative = -1
        }
    let otuput = Math.floor(Math.random()*(1-25)+1) * positiveNegative;
    return otuput
};


function appendCard(resObj){
    let newDiv = document.createElement('div');
    zIndexCount++;
    
    newDiv.style.zIndex = zIndexCount;
    newDiv.style.transform = `rotate(${randomDegrees()}deg)`
    newDiv.innerHTML = `<div class="card-image">
                            <img src=${resObj.cards[0].image} alt= "${resObj.cards[0].value} of ${resObj.cards[0].suit}" >
                        </div>`;
    containerCards.append(newDiv)
};


containerButton.addEventListener('click', function(e){

    // console.log(e.target);
    if (e.target.id == 'new-deck'){
        axios.get(baseUrl+'new/shuffle/')
        .then(res => {
            let deckId = res.data.deck_id;
            e.target.parentElement.innerHTML = `<button id='card-button' class="btn btn-dark btn-md btn-block my-4 card-button" deck_id="${deckId}">Give me a new card</button>`;
        })
    }

    else if (e.target.id == 'card-button'){
        let deckID = e.target.getAttribute('deck_id');
        axios.get(baseUrl+deckID+'/draw')
        .then(res => {
            appendCard(res.data)
        })
    }
});

// Using Async and await

