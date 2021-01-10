import React from 'react';
import{homeObjOne} from './Data';
import {InfoSection} from '../../components';

const HomePage = () => {
    return ( 
        <>
            <InfoSection {...homeObjOne}/>
        </>
     );
}
 
export default HomePage;