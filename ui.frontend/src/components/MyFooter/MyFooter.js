import { MapTo } from '@adobe/aem-react-editable-components';
import React from 'react';
import MyText from '../Micro/MyText/MyText';
import { FooterDiv } from './MyFooter.styled';

export const MyFooter = (props) => {
    
  return (
    <FooterDiv>
        <MyText container="footer" text={props.text}/>
    </FooterDiv>
  )
}

export default MapTo("reactapp/components/my-footer")(MyFooter);