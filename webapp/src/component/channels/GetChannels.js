import React from 'react';
import styled from 'styled-components';
import ChannelUpdatedForm from './ChannelUpdatedForm';
import ChannelDeletedButton from './ChannelDeleteButton';

const CustomLi = styled.li`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;


const Wrapper = styled.div`
  display :flex
  background: #23294C;
  width: 20vw;

`;
const GetChannels = (props) => {
  return (
    
      <Wrapper>
        <ol>
          {props.channels.map((channel, index) =>
            <div key={index}>
              <button onClick={() => props.getChannelSelected(channel.id)} >
                <CustomLi key={index}># {channel.name}</CustomLi>
              </button>
              <ChannelUpdatedForm id={channel.id} />
              <ChannelDeletedButton id={channel.id} />
            </div>
          )}
        </ol>
      </Wrapper>
   
  )
};

export default GetChannels;