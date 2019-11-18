import React, { useEffect, useState } from 'react';
import GetChannels from "./channels/GetChannels"
import ChannelCreationForm from './channels/ChannelCreationForm';
import useGetChannels from '../customHooks/useGetChannel'
import Messages from './messages/Messages';
import styled from 'styled-components';

const WrapperContainer = styled.div`
  display :flex
  flex-direction:row;
  height: 100vh;
`;
const WrapperChannel = styled.div`
flex:1
 background: papayawhip;;
`
const WrapperMessages = styled.div`
flex:4
background-color:palevioletred;
`

const ChatBlock = () => {
   const [channelIdSelected, setChannelIdSelected] = useState(null);

   const { data, error, loading } = useGetChannels();
   const getChannelSelected = (id) => setChannelIdSelected(id);

   if (loading || data === undefined) {
      return "Loading"
   }
   if (error) {
      console.log(error)
   }
   return (
      <WrapperContainer>
         <WrapperChannel>
            <GetChannels
               channels={data.channels}
               getChannelSelected={getChannelSelected}
            />
            <ChannelCreationForm />
         </WrapperChannel>
         <WrapperMessages>
            <Messages channelId={channelIdSelected} />
         </WrapperMessages>
      </WrapperContainer>
   )
}
export default ChatBlock;