import React from 'react';
import { MapTo } from "@adobe/aem-react-editable-components";
import {StyledTitle, TitleDiv } from './MyTitle.styled';

export const MyTitle = (props) => {
    const mytextdefault = "Digite um título aqui por favor.";
    const myclassdefault = "description"
    
  return (
    <TitleDiv>
    <StyledTitle className={props.container ? props.container : myclassdefault }>{props.text ? props.text : mytextdefault}</StyledTitle>
    </TitleDiv>
  )
};

export default MapTo("reactapp/components/my-title")(MyTitle);