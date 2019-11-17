import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import useGetMessages from '../customHooks/useGetMessages'

const ADD_MESSAGE = gql`
  mutation AddMessage($type: String!) {
   sendMessage(content: $type) {
      status
      message
    }
  }
`;

const MessageCreationForm = () => {
   const { refetch } = useGetMessages();

   let input;
   const [AddMessage, { data }] = useMutation(ADD_MESSAGE);

   return (
      <div>
         <form
            onSubmit={async e => {
               e.preventDefault();
               const newValue = input.value
               input.value = "";
               try {
                  await AddMessage({ variables: { type: newValue } })
                  refetch()
               } catch (error) {
                  return error
               }
            }}
         >
            <input
               ref={name => { input = name }}
            />
            <button type="submit">Add Message</button>
         </form>
      </div>
   );
}
export default MessageCreationForm