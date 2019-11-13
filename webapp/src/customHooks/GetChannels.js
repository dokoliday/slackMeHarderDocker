import React from 'react';
import styled from 'styled-components';

const CustomLi = styled.li`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.div`
  display :flex
  background: papayawhip;
  width: 20vw;
`;
const GetChannels = (props) => {
   return (
      <Wrapper>      
               <ol>
                  {props.channels.map((channel, index) =>
                     <CustomLi key={index}># {channel.name}</CustomLi>)}
               </ol>     
      </Wrapper>
   )
};

export default GetChannels;