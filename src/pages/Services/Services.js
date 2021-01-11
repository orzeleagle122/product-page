import React from 'react';
import{homeObjFour} from './Data';
import {InfoSection,Princing} from '../../components';

const HomePage = () => {
    return ( 
        <>
            <Princing />
            <InfoSection {...homeObjFour}/>
        </>
     );
}
 
export default HomePage;