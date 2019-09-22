import React, { useContext, useEffect, useState } from "react";
import Image from "../../components/Image/Image";
import Title from "../../components/Title/Title";
import Counter from "../../components/Counter/Counter";
import Button from "../../components/Button/Button";
import AppContext from "../../store/AppContext";
import {Single} from "./HouseSingle.styled";
import { getSingleHouse } from "../../services/api";
import { getHouses } from "../../services/api";

const HouseSingle = (props) => {
    
   
     const [singleHouse, setSingleHouse] = useState({});

     const { image, title, id } = props;
     const { image: singleImg, name, id: singleHouseId } = singleHouse;
     useEffect(() => {
          const fetchSingleHouse = async () => {
              try{
               const { data } = await getHouses();
               setSingleHouse(data[0]);
              }catch(error){
                   console.log("ERROR: ", error)
              }
                           
          };

          fetchSingleHouse();
     }, [])

    

     const { handleIncrement, handleDecrement } = useContext(AppContext);
   
     if(id){
    return ( 
         
        <Single>
        <div className="house">
         <Image src={image} />

         
          <Title title={title} />
         
          <Counter />
    
          <Button type="Increment" onClick={handleIncrement}/>
          <Button type="Decrement" onClick={handleDecrement} />
         
        </div>
        </Single>
     );
    }else{
         return(
          <Single>
          <div className="house">
               
           <Image src={singleImg} />
  
           
            <Title title={name} />
           
            <Counter />
      
            <Button type="Increment" onClick={handleIncrement}/>
            <Button type="Decrement" onClick={handleDecrement} />
           
          </div>
          </Single>
         )
    }
}
 
export default HouseSingle;