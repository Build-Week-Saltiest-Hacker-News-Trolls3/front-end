import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios';


export const AppContext = createContext()

export const AppContextProvider = props => {

    const [comments, setComments] = useState([]);
    
    // const addItem = item => {
    //     setCart([...cart, item])
    // }
    useEffect(() => {
  
        axios
            .get("https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty")
            .then(response => { 
                console.log(response)
                setComments(response.data)
                })
            .catch(error => console.error('Server Error', error));
      }, [setComments]);
    
    return (
        <AppContext.Provider value={[comments, setComments]} >
            {props.children}
        </AppContext.Provider>
    )
}