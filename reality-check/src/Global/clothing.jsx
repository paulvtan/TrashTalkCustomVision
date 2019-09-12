import React, { createContext, useState } from 'react'

export const ClothingData = createContext([])

const ClothingDataContext = ({children}) => {
    const [clothingData, setClothingData] = useState([])

    // Api calls use setCanData(new data)

    return <ClothingData.Provider value={clothingData}>
        {children}
    </ClothingData.Provider>
    
}

export default ClothingDataContext