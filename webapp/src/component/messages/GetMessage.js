import React, { useEffect, useRef } from 'react'
import MessageUpdateForm from './MessageUpdateForm';
import MessageDeletedButton from './MessageDeleteButton';
import styled from 'styled-components';


const WrapperMessages = styled.div`
flex:4
background-color:#8E99E6;
`;
const CenteredParagraph = styled.p`
margin-top: 50vh;
text-align:center;
`


const GetMessages = (props) => {

   const messagesEndRef = useRef(null)

   const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
   }

   // useEffect(scrollToBottom, [props.data.messagesBychannel]);

   if (props.data.messagesBychannel.length === 0) {
      return <CenteredParagraph>This is your first message</CenteredParagraph>

   }
   return (
      <WrapperMessages>
         {props.data.messagesBychannel.map((message, index) =>
            <div key={index} ref={messagesEndRef} >
               <p>{message.content}</p>
               <MessageUpdateForm id={message.id} />
               <MessageDeletedButton id={message.id} channelId={props.channelId} />
               <div ref={messagesEndRef} />
            </div>
         )}
      </WrapperMessages>
   )
};

export default GetMessages;