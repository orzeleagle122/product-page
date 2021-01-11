import React from 'react';
import {homeObjThree} from './Data';
import {InfoSection} from '../../components';

const HomePage = () => {
    return ( 
        <>
            <InfoSection {...homeObjThree}/>
        </>
     );
}
 
export default HomePage;