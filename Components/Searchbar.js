import React from 'react';

const Searchbar = ({searchfield, searchChange}) =>{
    return(
        <div className="pa2">
            <input 
                type="search" 
                placeholder='Search Robots' 
                className='bg-lightest-blue pa3 b--green ba' onChange={ searchChange }/>
    
        </div>
        
    );
}

export default Searchbar;
