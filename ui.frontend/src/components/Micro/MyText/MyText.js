import React from 'react';
import { MapTo } from "@adobe/aem-react-editable-components";

export const MyText = (props) => {
    const mytextdefalt = "Digite um texto aqui por favor.";
  return (
    <p>{props.text ? props.text : mytextdefalt}</p>
  )
};

export default MapTo("reactapp/components/my-text")(MyText);