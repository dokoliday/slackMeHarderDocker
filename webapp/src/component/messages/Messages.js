import React, { useEffect, useState } from 'react';
import GetMessage from './GetMessage'
import MessageCreationForm from './MessageCreationForm';
import useGetMessageById from '../../customHooks/useGetMessageById'
import styled from 'styled-components';

const WrapperMessage = styled.div`
  display :flex
  flex-direction:column;
  height: 90vh;
`;
const WrapperGetMessage= styled.div`
flex:4
 overflow-y: scroll;
`;
const WrapperWrightMessage = styled.div`
flex:1
`;
const CenteredParagraph = styled.p`
margin-top: 50vh;
text-align:center;
`
const Messages = (props) => {
   const { data, error, loading, refetch } = useGetMessageById(parseInt(props.channelId));

   if (loading || data === undefined) {
      return <div>
         <CenteredParagraph>Select your Channel</CenteredParagraph>
      </div>
   }
   if (error) {
      console.log(error)
   }
   return (
      <WrapperMessage>
         <WrapperGetMessage>
            <GetMessage data={data} channelId={props.channelId} />
         </WrapperGetMessage>
         <WrapperWrightMessage>
            <MessageCreationForm channelId={props.channelId} />
         </WrapperWrightMessage>
      </WrapperMessage>
   )
}
export default Messages;