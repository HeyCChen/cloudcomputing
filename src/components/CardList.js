import React from 'react';
import Card from "./Card";

function CardList({ robots }) {
    const cardsArray = robots.map(
        (uesr, i) => {
            return <Card key={i} id={robots[i].id} name={robots[i].name} />
        })
    return (
        <div>
            {cardsArray}
        </div>
    )
}

export default CardList;