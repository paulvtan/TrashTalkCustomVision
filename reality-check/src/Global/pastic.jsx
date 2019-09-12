import React, { createContext, useState } from 'react'

export const PlasticData = createContext([])

const PlasticDataContext = ({children}) => {
    const [plasticData, setPlasticData] = useState([])

    // Api calls use setCanData(new data)

    return <PlasticData.Provider value={plasticData}>
        {children}
    </PlasticData.Provider>
    
}

export default PlasticDataContext