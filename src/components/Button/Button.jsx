import React from "react";
import { StyledBtn } from "./Button.styled";

const Button = ({type, onClick}) =>  ( <StyledBtn onClick={onClick}>{type}</StyledBtn> );

 
export default Button;