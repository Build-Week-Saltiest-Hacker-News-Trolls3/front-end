import React, { useState, createContext } from 'react'


export const AppContext = createContext()

export const AppContextProvider = props => {

    const [comments, setComments] = useState([]);
    
    // const addItem = item => {
    //     setCart([...cart, item])
    // }
    useEffect(() => {
  
        axiosWithAuth()
            .get("/api/unknown")
            .then(response => { 
                console.log(response)
                // setComments(response.data)
                })
            .catch(error => console.error('Server Error', error));
      }, [setComments]);

    console.log("CartContext: cart", cart)
    
    return (
        <AppContext.Provider value={[comments, setComments]} >
            {props.children}
        </AppContext.Provider>
    )
}