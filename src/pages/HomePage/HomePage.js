import React from 'react';
import{homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data';
import {InfoSection,Princing} from '../../components';

const HomePage = () => {
    return ( 
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Princing />
            <InfoSection {...homeObjFour}/>
        </>
     );
}
 
export default HomePage;