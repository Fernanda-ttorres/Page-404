import React from 'react'
import { MapTo } from '@adobe/aem-spa-component-mapping';
import { StyledButton } from './MyButton2.styled'

export const MyButton2 = (props) => {
    const mytextdefault = "Digite o texto do button";
  return (
    <>
    <StyledButton>{props.text ? props.text : mytextdefault}</StyledButton>
    </>
  )
};

export default MapTo("reactapp/components/my-button2")(MyButton2);