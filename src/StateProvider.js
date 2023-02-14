import React, { createContext, useContext, useReducer } from "react";

// Prepare the datalayer
export const StateContext = createContext();

// Wrap our app and provide datalayer 
export const StateProvider = ({ reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);

// we have to link this file to app.js  
// and index.js 