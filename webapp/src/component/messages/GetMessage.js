import React from 'react';
import MessageUpdateForm from './MessageUpdateForm';
import MessageDeletedButton from './MessageDeleteButton';
import styled from 'styled-components';


const WrapperMessages = styled.div`
flex:4
background-color:#8E99E6;
`;
const GetMessages = (props) => {
   if(props.messagesBychannel===0){
      return "no messages"
   }return (
      <WrapperMessages>
         {props.data.messagesBychannel.map((message, index) =>
            <div key={index}>
               <p>{message.content}</p>
               <MessageUpdateForm id={message.id} />
               <MessageDeletedButton id={message.id} channelId={props.channelId}/>
            </div>
         )}
      </WrapperMessages>
   )
};

export default GetMessages;