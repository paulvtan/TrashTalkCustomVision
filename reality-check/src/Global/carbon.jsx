import React, { createContext, useState } from 'react'

export const CarbonData = createContext([])

const CarbonDataContext = ({children}) => {
    const [carbonData, setCarbonData] = useState([])

    // Api calls use setCanData(new data)

    return <CarbonData.Provider value={carbonData}>
        {children}
    </CarbonData.Provider>
    
}

export default CarbonDataContext