import React from 'react';
import MessageUpdateForm from './MessageUpdateForm';
import MessageDeletedButton from './MessageDeleteButton';

const GetMessages = (props) => {
   if(props.messagesBychannel===0){
      return "no messages"
   }return (
      <div>
         {props.data.messagesBychannel.map((message, index) =>
            <div key={index}>
               <p>{message.content}</p>
               <MessageUpdateForm id={message.id} />
               <MessageDeletedButton id={message.id} channelId={props.channelId}/>
            </div>
         )}
      </div>
   )
};

export default GetMessages;