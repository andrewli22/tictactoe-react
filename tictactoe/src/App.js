import './App.css';
import { useState } from 'react';

function App() {

  const startBoard = [
    ['','',''],
    ['','',''],
    ['','','']
  ];

  const [board, setBoardState] = useState(startBoard);
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(false);
  const updateBoard = (row, col) => {
    if (board[row][col] === '') {
      let newBoard = board;
      newBoard[row][col] = turn;
      setTurn(turn === 'X' ? 'O' : 'X');
      setBoardState(newBoard);
    }
    checkWin();
  };

  const checkWin = () => {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        setWinner(true);
      }
    }
    for (let i = 0; i < 3; i++) {
      if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        setWinner(true);
      }
    }
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      setWinner(true);
    }
    if (board[2][0] !== '' && board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
      setWinner(true);
    }
  }

  const reset = () => {
    setWinner(false);
    setBoardState(startBoard);
  }

  return (
    <div className="App">
      <div>
        <div>
          {board.map((row, x) => (
            <div style={{display: 'flex'}}>
              {row.map((col, y) => (
                <button
                  className='cells'
                  onClick={() => updateBoard(x, y)}
                  disabled={winner}
                >
                  {col}
                </button>
              ))}
            </div>
          ))}
        </div>
        {winner && 
          <div>
            <p>Winner is {turn === 'X' ? 'O' : 'X'}!</p>
          </div>
        }
        <div>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
