const possibleChoices = document.querySelectorAll('button')
const userChoiceDisplay = document.getElementById('current-card')
const currentCardBeats = document.getElementById('current-card-beats')
const currentCardBeatenBy = document.getElementById('current-card-beaten-by')
let currentFigure 
let beatsArray =[]
let beatenByArray

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    let userChoice = e.target.id
    cardList.filter((element) => {
        if (element.btnName == userChoice) {
            currentFigure = element.name
            beatsArray = element.beats
            beatenByArray = element.beatenBy
        }
    })
    userChoiceDisplay.innerHTML = currentFigure
    currentCardBeats.innerHTML = beatsArray
    currentCardBeatenBy.innerHTML = beatenByArray
    
}))

beatsArray.forEach(elementOfArr => {
    const newElement = document.createElement('li')
    let newContent = document.createTextNode(elementOfArr)
    newElement.appendChild(newContent)
    currentCardBeats.appendChild(newElement)
})

    
    let testArray = ['1', '2', '3']
    testArray.forEach(element => {
        const newElement = document.createElement('li')
        let newContent = document.createTextNode(element)
        newElement.appendChild(newContent)
        currentCardBeats.appendChild(newElement)
    })
    
    



const cardList = [
    {
        name: 'Gun',
        btnName: 'gun-btn',
        beats: ['Rock', 'Fire', 'Scissors', 'Snake', 'Human', 'Tree', 'Wolf'],
        beatenBy: ['Sponge', 'Paper', 'Air', 'Water', 'Dragon', 'Devil', 'Lightning']
    },
    {
        name:'Lightning',
        btnName: 'lightning-btn',
        beats: ['Gun', 'Rock', 'Fire', 'Scissors', 'Snake', 'Human', 'Tree'],
        beatenBy: ['Wolf', 'Sponge', 'Paper', 'Air', 'Water', 'Dragon', 'Devil']
    },
    {
        name:'Devil',
        btnName: 'devil-btn',
        beats: ['Lightning', 'Gun', 'Rock', 'Fire', 'Scissors', 'Snake', 'Human'],
        beatenBy: ['Tree', 'Wolf', 'Sponge', 'Paper', 'Air', 'Water', 'Dragon']
    },
    {
        name:'Dragon',
        btnName: 'dragon-btn',
        beats: ['Devil', 'Lightning', 'Gun', 'Rock', 'Fire', 'Scissors', 'Snake'],
        beatenBy: ['Human', 'Tree', 'Wolf', 'Sponge', 'Paper', 'Air', 'Water']
    },
    {
        name:'Water',
        btnName: 'water-btn',
        beats: ['Dragon', 'Devil', 'Lightning', 'Gun', 'Rock', 'Fire', 'Scissors'],
        beatenBy: ['Snake', 'Human', 'Tree', 'Wolf', 'Sponge', 'Paper', 'Air']
    },
    {
        name:'Air',
        btnName: 'air-btn',
        beats: ['Water', 'Dragon', 'Devil', 'Lightning', 'Gun', 'Rock', 'Fire'],
        beatenBy: ['Scissors', 'Snake', 'Human', 'Tree', 'Wolf', 'Sponge', 'Paper']
    },
    {
        name:'Paper',
        btnName: 'paper-btn',
        beats: ['Air', 'Water', 'Dragon', 'Devil', 'Lightning', 'Gun', 'Rock'],
        beatenBy: ['Fire', 'Scissors', 'Snake', 'Human', 'Tree', 'Wolf', 'Sponge']
    },
    {
        name:'Sponge',
        btnName: 'sponge-btn',
        beats: ['Paper', 'Air', 'Water', 'Dragon', 'Devil', 'Lightning', 'Gun'],
        beatenBy: ['Rock', 'Fire', 'Scissors', 'Snake', 'Human', 'Tree', 'Wolf']
    },
    {
        name:'Wolf',
        btnName: 'wolf-btn',
        beats: ['Sponge', 'Paper', 'Air', 'Water', 'Dragon', 'Devil', 'Lightning'],
        beatenBy: ['Gun', 'Rock', 'Fire', 'Scissors', 'Snake', 'Human', 'Tree']
    },
    {
        name:'Tree',
        btnName: 'tree-btn',
        beats: ['Wolf', 'Sponge', 'Paper', 'Air', 'Water', 'Dragon', 'Devil'],
        beatenBy: ['Lightning', 'Gun', 'Rock', 'Fire', 'Scissors', 'Snake', 'Human']
    },
    {
        name:'Human',
        btnName: 'human-btn',
        beats: ['Tree', 'Wolf', 'Sponge', 'Paper', 'Air', 'Water', 'Dragon'],
        beatenBy: ['Devil', 'Lightning', 'Gun', 'Rock', 'Fire', 'Scissors', 'Snake']
    },
    {
        name:'Snake',
        btnName: 'snake-btn',
        beats: ['Human', 'Tree', 'Wolf', 'Sponge', 'Paper', 'Air', 'Water'],
        beatenBy: ['Dragon', 'Devil', 'Lightning', 'Gun', 'Rock', 'Fire', 'Scissors']
    },
    {
        name:'Scissors',
        btnName: 'scissors-btn',
        beats: ['Snake', 'Human', 'Tree', 'Wolf', 'Sponge', 'Paper', 'Air'],
        beatenBy: ['Water', 'Dragon', 'Devil', 'Lightning', 'Gun', 'Rock', 'Fire']
    },
    {
        name:'Fire',
        btnName: 'fire-btn',
        beats: ['Scissors', 'Snake', 'Human', 'Tree', 'Wolf', 'Sponge', 'Paper'],
        beatenBy: ['Air', 'Water', 'Dragon', 'Devil', 'Lightning', 'Gun', 'Rock']
    },
    {
        name:'Rock',
        btnName: 'rock-btn',
        beats: ['Fire', 'Scissors', 'Snake', 'Human', 'Tree', 'Wolf', 'Sponge'],
        beatenBy: ['Paper', 'Air', 'Water', 'Dragon', 'Devil', 'Lightning', 'Gun']
    }

]
/*
    let testArr = []

        for (let i=0; i< cardList.length; i++) {
        testArr.push(cardList[i].name)
    }
    console.log(testArr)
 */
/*TO DO 
1) Wymyśleć, co zrobić, by podświetlała się ikona, na którą najeżdżam myszką
3) W idealnym przypadku, wszystko powinno się odwoływać do jedego tylko objectu 'cardList'
4) Pokombinować z CSS, żeby elementy umieścić centralnie w kółku, i w zależności od rozdzielczości ekranu,
 przybliżały się do centrum, lub oddalały
5) Dodać wtedy nazwy kart
6) Robimy zmienną która zbiera wartości wszystkich kart, z którymi wygrywamy.
7) Zmienną powyżej ustawiamy jako argument funkcji, która podświetla nam na zielono karty
*/


/* Zrobione :D 
2) Sprawić, by prawidłowo wyświetlała się lista kart, które bijemy, oraz te które biją nas


/*Maybe stupid, maybe not

    Wpadłem na pomysł, by do gry w wersji 1.0 dodać opcję kart-pułapek
    Polegały by one na tym, że blokujemy np. Elementy (tj. Water, Air, Fire, Rock)
    Gdy komputer zagra i wypadnie na to, automatycznie przegrywa.
    My natomiast możemy swobodnie wybrać, którą figurę wybierzemys
    Rodzaje kart:
    1) Block Elements (Water, Air, Fire, Rock)
    2) Block Creature (Devil, Dragon, Snake, Wolf)
    3) Block Object (Gun, Scissors, Sponge, Paper)

    Na każdą rozgrywkę losujemy 3 karty (mogą się powtórzyć)
    Każda rozgrywka to 10 potyczek
    

*/