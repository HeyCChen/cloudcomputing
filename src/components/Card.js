import React from 'react';
import 'tachyons';

function Card(props) {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img width='130' height='130' src={`https://robohash.org/${props.name}?100x100`} alt="robots" />
            <div>
                <p>{props.name}</p>
            </div>
        </div>
    );
}

export default Card;