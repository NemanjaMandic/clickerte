import React from "react";
import { ListItem, ItemTitle } from "./HouseListItem.styled";

const HouseListItem = ({title, onClick}) => {
    return ( 
        <ListItem onClick={onClick}>
            <ItemTitle>{title}</ItemTitle>
        </ListItem>
     );
}
 
export default HouseListItem;