import { React, useState } from "react";
import '../css/FlippedCard.css'

const FlippedCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handlerClick = () => {
        setIsFlipped(isFlipped ? false : true)
    }
    return (
        <div className={isFlipped ? 'card-flipped' : 'card-not-flipped'} onClick={handlerClick}>flipped</div>
    );
}

export default FlippedCard;