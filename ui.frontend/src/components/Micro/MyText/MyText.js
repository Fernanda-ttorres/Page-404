import React from 'react';
import { MapTo } from "@adobe/aem-react-editable-components";
import { StyledText } from "./MyText.styled";

export const MyText = (props) => {
    const mytextdefalt = "Digite um texto aqui por favor.";
  return (
    <StyledText>{props.text ? props.text : mytextdefalt}</StyledText>
  )
};

export default MapTo("reactapp/components/my-text")(MyText);