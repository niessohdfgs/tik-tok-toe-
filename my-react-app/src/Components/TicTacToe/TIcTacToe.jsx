import React, { useRef, useState } from 'react';
import "./TicTacToe.css";
import imgx from '../images/x.png';
import imgo from '../images/o.png';

const TicTacToe = () => {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

    let titleRef = useRef(null);
    let boxRefs = Array.from({ length: 9 }, () => useRef(null)); // ایجاد یک آرایه از useRef ها

    const toggle = (e, num) => {
        if (lock || board[num] !== "") return; // جلوگیری از کلیک روی خانه‌های پر شده

        let newBoard = [...board];
        if (count % 2 === 0) {
            newBoard[num] = "x";
            e.target.innerHTML = `<img src='${imgx}' alt='X'>`;
        } else {
            newBoard[num] = "o";
            e.target.innerHTML = `<img src='${imgo}' alt='O'>`;
        }

        setBoard(newBoard);
        setCount(count + 1);
    };

    const reset = () => {
        setLock(false);
        setBoard(["", "", "", "", "", "", "", "", ""]);
        setCount(0);
        titleRef.current.innerHTML = "Tic Tac Toe game In <span>React</span>";

        boxRefs.forEach((box) => {
            if (box.current) {
                box.current.innerHTML = "";
            }
        });
    };

    return (
        <div className="container">
            <h1 className="title" ref={titleRef}>Tic Tac Toe game In <span>React</span></h1>
            <div className="board">
                <div className="row">
                    <div className="boxes" ref={boxRefs[0]} onClick={(e) => toggle(e, 0)}></div>
                    <div className="boxes" ref={boxRefs[1]} onClick={(e) => toggle(e, 1)}></div>
                    <div className="boxes" ref={boxRefs[2]} onClick={(e) => toggle(e, 2)}></div>
                </div>
                <div className="row">
                    <div className="boxes" ref={boxRefs[3]} onClick={(e) => toggle(e, 3)}></div>
                    <div className="boxes" ref={boxRefs[4]} onClick={(e) => toggle(e, 4)}></div>
                    <div className="boxes" ref={boxRefs[5]} onClick={(e) => toggle(e, 5)}></div>
                </div>
                <div className="row">
                    <div className="boxes" ref={boxRefs[6]} onClick={(e) => toggle(e, 6)}></div>
                    <div className="boxes" ref={boxRefs[7]} onClick={(e) => toggle(e, 7)}></div>
                    <div className="boxes" ref={boxRefs[8]} onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    );
};

export default TicTacToe;
