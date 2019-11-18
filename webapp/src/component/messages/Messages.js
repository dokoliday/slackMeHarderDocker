import React, { useEffect, useState } from 'react';
import GetMessage from './GetMessage'
import MessageCreationForm from './MessageCreationForm';
import useGetMessageById from '../../customHooks/useGetMessageById'
import styled from 'styled-components';

const WrigthMessageComponent = styled.div`
position:fixed;
bottom:0;
`

const Messages = (props) => {
   const { data, error, loading, refetch } = useGetMessageById(parseInt(props.channelId));

   if (loading || data === undefined) {
      return "select channel"
   }
   if (error) {
      console.log(error)
   }
   return (
      <div>
         <GetMessage data={data} channelId={props.channelId} />
         <WrigthMessageComponent>
            <MessageCreationForm channelId={props.channelId} />
         </WrigthMessageComponent>
      </div>
   )
}
export default Messages;