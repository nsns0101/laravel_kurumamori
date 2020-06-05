import React, { useEffect, useState, useContext, createContext } from "react";
import DriveView from "./DriveView";
import {AppContext} from "../../components/App";
import Axios from 'axios';

export const DriveContext = createContext();

export default () => {
    const { user } = useContext(AppContext);
    return (
        <DriveContext.Provider value={{

        }}>
            <DriveView/>
        </DriveContext.Provider>
    )
}