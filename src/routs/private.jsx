import React from "react";

import { AuthProvider } from "../contents";
import { useContext } from "react";


import NavStack from "./stack";

import NavTab from "./tab";

export default function Priver(){
    const {signed} = useContext(AuthProvider)

    return(
        signed ? <NavTab/> : <NavStack/>
    )
}