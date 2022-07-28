import React from 'react';
import { MapTo } from "@adobe/aem-react-editable-components";
import { StyledText,TextDiv } from "./MyText.styled";

export const MyText = (props) => {
    const mytextdefault = "Digite um texto aqui por favor.";
  return (
    <TextDiv>
    <StyledText>{props.text ? props.text : mytextdefault}</StyledText>
    </TextDiv>
  )
};

export default MapTo("reactapp/components/my-text")(MyText);