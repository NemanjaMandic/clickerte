import React, {Component} from "react";
import AppContext from "./AppContext";
import { sendHouseClicked } from "../services/api";

export default class AppStore extends Component {
    state = {
        data: {
            id: 2,
            count: 5,
            name: 'fsdfsdfdsdf',
            image: 'ddadadadaa.jpg'
        }
    }

    handleIncrement = (id) => {
        console.log("ID", id)
       this.setState(prevState => ({
           data: {
               ...prevState.data,
             count: prevState.data.count + 1  
           }
       }))
        sendHouseClicked(this.state.data);
    }

    handleDecrement = () => {
        if(this.state.data.count > 0){
            this.setState(prevState => ({
                data: {
                    ...prevState.data,
                    count: prevState.data.count - 1
                }
            }));
        }
       
    }

    render(){
        const storeValue = {
            ...this.state,
            handleIncrement: this.handleIncrement,
            handleDecrement: this.handleDecrement
        };

        return <AppContext.Provider value={storeValue}>{this.props.children}</AppContext.Provider>
    }
}