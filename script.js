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

    /* Clean html list on every click */
    currentCardBeats.replaceChildren();
    currentCardBeatenBy.replaceChildren();

    /* Assign values to varaibles above  */
    cardList.forEach((card) => {
      if (card.btnName == currTargetClassList[1]) {
        let { name, beats, beatenBy } = card;
        figure = name;
        beatsArray = beats;
        beatenByArray = beatenBy;
      }
    });

    /*Turning variables into html elements */

    function makeList(array, htmlElement) {
      array.forEach((element) => {
        const newElement = document.createElement('li');
        let newContent = document.createTextNode(element);
        newElement.appendChild(newContent);
        htmlElement.appendChild(newElement);
      });
    }

    /* Pushing made above elements into html */
    userChoiceDisplay.innerHTML = figure;
    makeList(beatsArray, currentCardBeats);
    makeList(beatenByArray, currentCardBeatenBy);

    /*Create array for all names of the buttons from beatsArray i beatenByArray*/
    /* SHOULD BE SHORTEN UP */
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
    /* SHOULD BE SHORTEN UP */
    /* Check all cards that beats (green rim) */

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
    /* Check all cards that are beaten up (red rim) */

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
