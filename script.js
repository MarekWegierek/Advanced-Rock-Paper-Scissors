import cardList from './cards.js';
const possibleChoices = document.querySelectorAll('.card-button');
const userChoiceDisplay = document.getElementById('current-card');
const currentCardBeats = document.getElementById('current-card-beats');
const currentCardBeatenBy = document.getElementById('current-card-beaten-by');

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    const currTargetClassList = e.originalTarget.offsetParent.classList;
    let figure = '';
    let beatsArray = [];
    let beatenByArray = [];
    let beatsArrayBtnName = [];
    let beatenByArrayBtnName = [];

    /*Zerujemy zawartość list w html przy każdym clicku */
    currentCardBeats.replaceChildren();
    currentCardBeatenBy.replaceChildren();

    /* Przypisuje zawartość z cards do zmiennych powyżej */
    cardList.forEach((card) => {
      if (card.btnName == currTargetClassList[1]) {
        let { name, beats, beatenBy } = card;
        figure = name;
        beatsArray = beats;
        beatenByArray = beatenBy;
      }
    });

    /*Funkcja, która przerabia elementy z cards na li */

    function makeList(array, htmlElement) {
      array.forEach((element) => {
        const newElement = document.createElement('li');
        let newContent = document.createTextNode(element);
        newElement.appendChild(newContent);
        htmlElement.appendChild(newElement);
      });
    }

    /* Pakujemy zmienne do html */
    userChoiceDisplay.innerHTML = figure;
    makeList(beatsArray, currentCardBeats);
    makeList(beatenByArray, currentCardBeatenBy);

    /*Tworzymy listę zawierającą wszystkie nazwy btn dla beatsArray i beatenByArray */

    beatsArray.forEach((cardName) => {
      cardList.forEach((card) => {
        if (cardName == card.name) {
          beatsArrayBtnName.push(card.btnName);
        }
      });
    });

    beatenByArray.forEach((cardName) => {
      cardList.forEach((card) => {
        if (cardName == card.name) {
          beatenByArrayBtnName.push(card.btnName);
        }
      });
    });

    /* Zaznaczamy w html które karty biją (zielona obwódka)*/

    possibleChoices.forEach((icon) => {
      if (Array.from(icon.classList).includes('beats')) {
        icon.classList.remove('beats');
      }
    });
    possibleChoices.forEach((icon) => {
      if (beatsArrayBtnName.includes(icon.classList[1])) {
        icon.classList.add('beats');
      }
    });

    /* Zaznaczamy w html które karty są bite (czerwona obwódka) */

    possibleChoices.forEach((icon) => {
      if (Array.from(icon.classList).includes('beaten-by')) {
        icon.classList.remove('beaten-by');
      }
    });
    possibleChoices.forEach((icon) => {
      if (beatenByArrayBtnName.includes(icon.classList[1])) {
        icon.classList.add('beaten-by');
      }
    });
  })
);
