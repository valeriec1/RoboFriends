import React from 'react';
import Card from './Card.js';


const Cardlist = ({robots}) =>{
    //The way to test the error boundry
    // if(true){
    //    throw new Error("nooooooooooooooooooooooo");
    // }
    return(
        robots.map((user, i)=>{
            return(
                <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
            );
        })
    );
}

export default Cardlist;