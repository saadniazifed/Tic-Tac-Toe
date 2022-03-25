const playerFactory = (name, marker) => {
  const getName = name;
  const getMarker = marker;

  let _playerMove = 0;

  function _playerMoveCount() {
    return _playerMove++;
  }

  function playerMoveCount() {
    _playerMoveCount();
  }

  return { getName, getMarker, playerMoveCount };
};

const Game = (function () {
  //A module that plays out entire game of Tic Tac Toe.

  return {};
})();

//Module responsible for the Tic Tac Toe Gameboard.
const gameBoard = (function () {
  const gameboardArray = ["", "", "", "", "", "", "", "", ""];

  function setMark(index, playerMarker) {
    gameboardArray[index] = playerMarker;
  }

  return {
    setMark,
  };
})();

//Module Responsible for the UI Change in the game.
const displayController = (function () {
  //Selecting the DOM Elements
  const _squares = document.querySelectorAll(".square");

  const addMarkersOnScreen = function () {
    _squares.forEach((square) => {
      square.addEventListener("click", () => {
        square.textContent = gameController.returnMarker();
        square.classList.add("markerStyling");

        if (square.classList.contains("markerStyling")) {
          square.classList.add("avoid-clicks");
        }
      });
    });
  };
  return {
    addMarkersOnScreen,
  };
})();

//Module responsible for the flow of the game.
const gameController = (function () {
  //Selecting the DOM Elements
  const _squares = document.querySelectorAll(".square");

  //Creating Objects.
  const playerOne = playerFactory("Slim", "X");
  const playerTwo = playerFactory("Shady", "O");

  //Event Handler function that invokes getIndex and returnMarker function.
  function addEventHandler() {
    _squares.forEach((square) => {
      square.addEventListener("click", (e) => {
        getIndex(e);
        returnMarker(e);
      });
    });
  }

  const getIndex = (e) => {
    const dataIndex = e.target.dataset.index;
    gameBoard.setMark(dataIndex, returnMarker);
  };

  let totalMoves = 0;

  const returnMarker = () => {
    if (totalMoves % 2 != 0) {
      return getMarkX();
    } else if (totalMoves % 2 == 0) {
      return getMarkO();
    }
  };

  function getMarkO() {
    totalMoves++;
    playerTwo.playerMoveCount();
    return "O";
  }

  function getMarkX() {
    totalMoves++;
    playerOne.playerMoveCount();
    return "X";
  }

  return {
    addEventHandler,
    returnMarker,
  };
})();

displayController.addMarkersOnScreen();
