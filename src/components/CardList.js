import React from 'react';
import Card from "./Card";

function CardList(props) {
    const cardsArray = props.robots.map(
        (uesr, i) => {
            return <Card
                key={i}
                name={props.robots[i]}
                handleDel={()=>{props.handleDelete(i)}}
            />
        })
    return (
        <div>
            {cardsArray}
        </div>
    )
}

export default CardList;