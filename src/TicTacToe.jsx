import React, { useState } from "react";
import Square from "./Square";
import { Box, Button, Modal, TypographyStylesProvider } from "@mantine/core";

const INITIAL = "";
const RAMBO = "X";
const AZA = "O";
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function TicTacToe(id) {
  const [grid, setGrid] = useState(Array(9).fill(INITIAL));
  const [hodRambo, setHodRambo] = useState(true);
  const [gameFinished, setGameFinished] = useState(false);
  const [draw, setDraw] = useState(false);
  const [winner, setWinner] = useState("");
  const [winCount, setwinCount] = useState({ Rambo: 0, Aza: 0 });
  function isGameOver() {
    if (!gameFinished) {
      for (let i = 0; i < 8; i++) {
        if (
          (grid[winCombination[i][0]] === "X" ||
            grid[winCombination[i][0]] === "O") &&
          grid[winCombination[i][0]] === grid[winCombination[i][1]] &&
          grid[winCombination[i][1]] === grid[winCombination[i][2]]
        ) {
          setGameFinished(true);
          setWinner(grid[winCombination[i][1]]);

          if (grid[winCombination[i][1]] === "X")
            setwinCount({ ...winCount, Rambo: winCount.Rambo + 1 });
          else setwinCount({ ...winCount, Aza: winCount.Aza + 1 });
          return;
        }
      }

      //* Draw game check
      if (!grid.includes(INITIAL)) {
        setDraw(true);
        setGameFinished(true);
        console.log("DRAW");
      }
    }
  }
  function restartGame() {
    setGrid(Array(9).fill(INITIAL));
    setGameFinished(false);
    setDraw(false);
    setHodRambo(true);
    setWinner("");
  }
  isGameOver();
  const handleClick = (id) => {
    setGrid(
      grid.map((item, index) => {
        if (index === id) {
          if (hodRambo) {
            return RAMBO;
          } else {
            return AZA;
          }
        } else {
          return item;
        }
      })
    );
    setHodRambo(!hodRambo);
  };
  return (
    <div>
      {gameFinished && (
        <>
          <Modal
            withCloseButton={true}
            opened={gameFinished}
            onClose={() => setGameFinished(!gameFinished)}
          >
            {winner === "X" ? (
              <Box
                sx={{
                  color: "#00ECE5",
                  fontSize: 18,
                  lineHeight: 1.4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <TypographyStylesProvider>
                  Rambo: {winCount.Rambo}
                </TypographyStylesProvider>
                <TypographyStylesProvider>
                  Aza: {winCount.Aza}
                </TypographyStylesProvider>
                <TypographyStylesProvider>Аза гей!</TypographyStylesProvider>

                <Button onClick={restartGame}>Continue?</Button>
              </Box>
            ) : (
              <Box
                sx={{
                  color: "#00ECE5",
                  fontSize: 18,
                  lineHeight: 1.4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <TypographyStylesProvider>
                  Rambo: {winCount.Rambo}
                </TypographyStylesProvider>
                <TypographyStylesProvider>
                  Aza: {winCount.Aza}
                </TypographyStylesProvider>
                <TypographyStylesProvider>
                  Аза полюбому гей!
                </TypographyStylesProvider>

                <Button onClick={restartGame}>Continue?</Button>
              </Box>
            )}
          </Modal>
        </>
      )}
      <Square clickedArray={grid} handleClick={handleClick} />
    </div>
  );
}

export default TicTacToe;
