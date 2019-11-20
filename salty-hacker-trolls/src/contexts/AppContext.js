import React, { useState, createContext, useEffect } from 'react'
import axiosWithAuth from '../utils/AxiosWithAuth';


export const AppContext = createContext()

export const AppContextProvider = props => {
    
//set user

// const [user, setUser] = useState()

// useEffect(() => {
  
//     axiosWithAuth()
//         .get("/api/trolls/comments")
//         .then(response => { 
//             console.log(response)
//             setComments(response.data)
//             })
//         .catch(error => console.error('Server Error', error));
//   }, [setComments]);



    //Set user feed with comments list

const [comments, setComments] = useState([]);

    useEffect(() => {
  
        axiosWithAuth()
            .get("/api/trolls/comments")
            .then(response => { 
                console.log(response)
                setComments(response.data)
                })
            .catch(error => console.error('Server Error', error));
      }, [setComments]);


//Set favorites page with favorites list

const [favorites, setFavorites] = useState([])

    // useEffect(() => {
  
    //     axiosWithAuth()
    //         .get("endpoint")
    //         .then(response => { 
    //             console.log(response)
    //             setComments(response.data)
    //             })
    //         .catch(error => console.error('Server Error', error));
    //   }, [setComments]);


    const addFavorite = favorite => {
        
        axiosWithAuth()
        .post('/api/users/:id/favorites/:comment_id', favorite)
        .then( res => {
            console.log(res);
            //redirect to favorites page?
            // history.push("/favorites")
        })
        .catch( err => console.log(err));
    }

    console.log("AppContext: favorites", favorites)

    return (
        <AppContext.Provider value={[comments, addFavorite, favorites]} >
            {props.children}
        </AppContext.Provider>
    )
}

