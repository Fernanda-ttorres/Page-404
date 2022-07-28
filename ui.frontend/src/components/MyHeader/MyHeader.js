import { MapTo } from '@adobe/aem-react-editable-components';
import React from 'react';
import MyTitle from '../Micro/MyTitle/MyTitle';
import { HeaderDiv } from './MyHeadr.styled';

export const MyHeader = () => {
   
  return (
    <HeaderDiv>
        <MyTitle container="header" text="404 NOT FOUND" />
    </HeaderDiv>
  )
}

export default MapTo("reactapp/components/my-header")(MyHeader);