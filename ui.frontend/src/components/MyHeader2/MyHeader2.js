import { MapTo } from '@adobe/aem-react-editable-components';
import React from 'react';
import MyTitle from '../Micro/MyTitle/MyTitle'
import { HeaderDiv } from './MyHeader2.styled';

export const MyHeader2= (props) => {
    
  return (
    <HeaderDiv>
        <MyTitle container="header" text={props.text}/>
    </HeaderDiv>
  )
}

export default MapTo("reactapp/components/my-header2")(MyHeader2);