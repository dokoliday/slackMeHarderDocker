import React from 'react';
import MessageUpdateForm from './MessageUpdateForm';
import MessageDeletedButton from './MessageDeleteButton';
// import styled from 'styled-components';
// import ChannelUpdatedForm from './ChannelUpdatedForm';
// import ChannelDeletedButton from './ChannelDeleteButton';

// const CustomLi = styled.li`
//   font-size: 1.5em;
//   text-align: center;
//   color: black;
// `;

// const Wrapper = styled.div`
//   display :flex
//   background: papayawhip;
//   width: 20vw;
// `;
const GetMessages = (props) => {
   console.log(props)

   return (
      <div>
         {props.messages.map((message, index) =>
            <div>
               <p>{message.content}</p>
               <MessageUpdateForm id={message.id} />
               <MessageDeletedButton id={message.id}/>
            </div>
         )}
      </div>
   )
};

export default GetMessages;