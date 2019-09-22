import React from "react";
import HouseList from "../HouseList/HouseList";
import HouseSingle from "../HouseSingle/HouseSingle";
import { HouseAppContainer } from "./HouseApp.styled";

const HouseApp = () => {
    return ( 
        <HouseAppContainer>
            <HouseList />
            {/* <HouseSingle /> */}
        </HouseAppContainer>
     );
}
 
export default HouseApp;