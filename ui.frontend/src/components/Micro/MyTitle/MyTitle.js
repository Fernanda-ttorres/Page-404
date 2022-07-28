import React from 'react';
import { MapTo } from "@adobe/aem-react-editable-components";
import {StyledTitle, TitleDiv } from './MyTitle.styled';

export const MyTitle = (props) => {
    const mytextdefalt = "Digite um título aqui por favor.";
    const container = "description"
  return (
    <TitleDiv>
    <StyledTitle className={container}>{props.text ? props.text : mytextdefalt}</StyledTitle>
    </TitleDiv>
  )
};

export default MapTo("reactapp/components/my-title")(MyTitle);