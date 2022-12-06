import React from 'react';
import KAROK from '../../img/KAROK.png';
import {UilSearch} from '@iconscout/react-unicons'; // icon library
import './LogoSearch.css'


const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img className='logoPic' src={KAROK} alt="" />
        <div className="Search">
           <input type="text" placeholder='Search' />
           <div className="s-icon">
               <UilSearch/>
           </div>
       </div>
    
    </div>
  )
}

export default LogoSearch;