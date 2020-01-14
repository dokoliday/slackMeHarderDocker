import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import useGetMessageById from '../../customHooks/useGetMessageById'

import styled, { __esModule } from 'styled-components';

const Input = styled.input`
  padding: 1em;
  margin: 2em;
  background: white;
  border: 0.1em solid;
  border-radius: 14px ;
  width:70vw;
  outline:none;
`;
const SentenceBlock = styled.div`
background: white;
padding:5vh
`

const ADD_MESSAGE = gql`
  mutation AddMessage($content: String, $channel_id:Int) {
   sendMessage(content: $content, channel_id: $channel_id) {
      status
      message
    }
  }
`;

const MessageCreationForm = (props) => {
  const { refetch } = useGetMessageById(parseInt(props.channelId));

  let input;
  const [AddMessage, { data }] = useMutation(ADD_MESSAGE);

  return (
    <div>
      <form
        onSubmit={async e => {
          e.preventDefault();
          const channel_id = parseInt(props.channelId)
          const newValue = input.value
          input.value = "";
          try {
            await AddMessage({ variables: { content: newValue, channel_id } })
            refetch()
          } catch (error) {
            return error
          }
        }}
      >
        <Input
          ref={name => { input = name }}
        />
      </form>
    </div>
  );
}
export default MessageCreationForm