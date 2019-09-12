import React from 'react'
import PlasticDataContext from './pastic';
import CarbonDataContext from './carbon';
import CanDataContext from './cans';
import ClothingDataContext from './clothing';

const GlobalState = ({children}) => {
    // return _.flowRight(
    //     PlasticDataContext,
    //     CarbonDataContext,
    //     CanDataContext,
    //     ClothingDataContext don't know how to pass children here
    // )
    return <PlasticDataContext>
        <CarbonDataContext>
            <CanDataContext>
                <ClothingDataContext>
                    {children}
                </ClothingDataContext>
            </CanDataContext>
        </CarbonDataContext>
    </PlasticDataContext>
    
}

export default GlobalState