import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GitExpertApp = props => {

  
    const [categories, setcategories] = useState(['Hunter × Hunter']);
    

    
    return (
        <>
          <h2> GitExpertApp</h2>  
          <AddCategory setcategory={setcategories}/>
          <hr/>
          
          <ol>
              {
                categories.map(category  =>(
                    <GifGrid 
                       key={category}
                       category={category}
                       
                    />
               
               ))
              }
              
          </ol>
         
        </>
    )
}



export default GitExpertApp
