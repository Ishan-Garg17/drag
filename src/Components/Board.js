import React from 'react'

const Board = (props) => {

    const drop = (e)=>{
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card)

    }

    const dragOver = (e) =>{
        e.preventDefault();

    }

  return (
    <div 
    id={props.id}
    onDrop={drop}
    onDragOver={dragOver}
    className={props.className}
    >
        {props.children}  
                        {/* // <Board>children is anything that we write between the tags basically children elements of board component that wil be our cards </Board> */}
    </div>
  )
}

export default Board