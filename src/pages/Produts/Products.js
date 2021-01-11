import React from 'react';
import{homeObjTwo,homeObjThree,homeObjFour} from './Data';
import {InfoSection,Princing} from '../../components';

const HomePage = () => {
    return ( 
        <>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Princing />
            <InfoSection {...homeObjFour}/>
        </>
     );
}
 
export default HomePage;