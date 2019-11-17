import React from 'react';
import Channels from './Channels';
import styled from 'styled-components';
import Messages from './Messages'
const WrapperContainer = styled.div`
  display :flex
  flex-direction:row;
  height: 100vh;
`;
const WrapperChannels=styled.div`
flex:1
 background: papayawhip;;
`
const WrapperMessages=styled.div`
flex:4
background-color:palevioletred;
`
const Home = () => (
  <div> 
    <WrapperContainer>
      <WrapperChannels> 
        <Channels />
        </WrapperChannels>
     <WrapperMessages>
      <Messages />
      </WrapperMessages>
    </WrapperContainer>
  </div>
);

export default Home;