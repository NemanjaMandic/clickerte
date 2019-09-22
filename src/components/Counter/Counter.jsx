import React, {useContext} from "react";
import AppContext from "../../store/AppContext";
import { ClickCounter } from "./Counter.styled";

const Counter = () => {
    const { data: {count} } = useContext(AppContext);
    return ( 
        <ClickCounter>
            Clicks: <span>{count}</span>
        </ClickCounter>
     );
}
 
export default Counter;
