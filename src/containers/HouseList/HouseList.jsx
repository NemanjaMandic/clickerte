import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import HouseListItem from "../../components/HouseListItem/HouseListItem";
import HouseSingle from "../HouseSingle/HouseSingle";
import { List } from './HouseList.styled';
import { getHouses } from '../../state/house/actions';
// import { getHouses, getSingleHouse } from "../../services/api";

const HouseList = (props) => {
    
    const { getHouses } = props;
    console.log("PROPS", props)
    const [data, setData] = useState([]);
    const [singleHouse, setSingleHouse] = useState({});
    useEffect(() => {
        // const fetchData = async () => {
        //     const { data } = await getHouses();
        //     setData(data);
            
        // };

        // fetchData();
        getHouses();
    }, [])
   
    const handleItemClick = async (id) => {
        // const { data } = await getSingleHouse(id);
        // setSingleHouse(data);
    }
   
    return ( 
        <>
     <List>
      { 
      data.length === 0 ? <h3>Loading ...</h3> : 
      data.map(house => {
          return <HouseListItem 
                    key={house.id} 
                    title={house.name}
                    onClick={() => handleItemClick(house.id)} 
                    />
      })}
    </List>
    <HouseSingle id={singleHouse.id} title={singleHouse.name} image={singleHouse.image} />
   
    </>
     );
}
 
const mapStateToProps = state => {
    return {
      state
    };
  };

export default connect(
    mapStateToProps,
    {getHouses}
)(HouseList);