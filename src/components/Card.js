import React from 'react';
import 'tachyons';
import './Card.css'

function Card(props) {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img width='130' height='130' src={`http://121.37.143.35/robot?text=${props.name}`} alt="robots" />
            <div>
                <p>{props.name}</p>
            </div>
            <div className='card'>
                <button
                    className='button'
                    onClick={props.handleDel}
                >
                    删除
            </button>
            </div>
        </div>
    );
}

export default Card;