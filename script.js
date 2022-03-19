const Game = (function () {
  //
  //   const playerOne = playerFactory("Slim", "O");
  //   const playerTwo = playerFactory("Shady", "X");
})();

const playerFactory = (name, choice) => {
  //players get created here.
};

const gameBoard = (function () {
  const unique = document.querySelector("#unique");

  const gameBoardObj = {
    gameBoard: ["X", "O", "X", "X", "O", "X", "X", "O", "X"],
  };

  const displayArray = function () {
    for (let i = 0; i < gameBoardObj.gameBoard.length; i++) {
      unique.textContent = gameBoardObj.gameBoard.join(", ");
    }
  };

  //   displayArray();

  return {};
})();

const displayController = (function () {
  //Responsible for the UI Change
  return {};
})();
