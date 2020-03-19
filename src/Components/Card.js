import React from 'react';


const Card = ({id, email, name}) => {
    return(
         <div className="tc ma2" >
            <div className="mw5 center bg-white br3 mv3 ba b--black-10 grow shadow-5">
            <div>
                <img alt='robot' src ={`https://robohash.org/https://robohash.org/${id}?200x200`} className="" />
            </div>
            <div>
                <h2 className="f3 mb2">{ name }</h2>
                <p className="f5 fw4 gray mto">{ email }</p>
            </div>
            </div>
        </div>
    );
}


export default Card;