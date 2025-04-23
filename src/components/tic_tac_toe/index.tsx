import { useState } from "react";
import './styles.css';

const TicTacToe = () => {

    const [xState, setXState] = useState(true);
    const [cellState, setCellState] = useState<string[]>(Array(9).fill(''));
    const onClickHandler = (cellNum: number) => {
        const copyCellState = [...cellState];
        if (copyCellState[cellNum] || findWinner()) return;
        copyCellState[cellNum] = xState ? 'X' : 'O';
        setCellState(copyCellState);
        setXState(!xState);
    }

    const findWinner = () => {
        const winners = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let index = 0; index < winners.length; index++) {
            const [x, y, z] = winners[index];
            if (cellState[x] && cellState[x] === cellState[y] && cellState[y] === cellState[z]) {
                return cellState[x];
            }

        }

    }




    return (
        <div className="tic-tac-toe-container">
            <div>
                <div className="row" onClick={() => onClickHandler(0)}>{cellState[0]}</div>
                <div className="row" onClick={() => onClickHandler(1)}>{cellState[1]}</div>
                <div className="row" onClick={() => onClickHandler(2)}>{cellState[2]}</div>
            </div>
            <div>
                <div className="row" onClick={() => onClickHandler(3)}>{cellState[3]}</div>
                <div className="row" onClick={() => onClickHandler(4)}>{cellState[4]}</div>
                <div className="row" onClick={() => onClickHandler(5)}>{cellState[5]}</div>
            </div>
            <div>
                <div className="row" onClick={() => onClickHandler(6)}>{cellState[6]}</div>
                <div className="row" onClick={() => onClickHandler(7)}>{cellState[7]}</div>
                <div className="row" onClick={() => onClickHandler(8)}>{cellState[8]}</div>
            </div>
            <div>{findWinner() ? `winner is ${findWinner()}` : ''}</div>
            <button disabled={!findWinner()} onClick={() => setCellState([])}> reset</button>
        </div>
    );
}

export default TicTacToe;