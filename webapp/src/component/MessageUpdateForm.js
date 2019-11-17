import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import useGetMessages from '../customHooks/useGetMessages'

const UPDATED_MESSAGE = gql`
  mutation UpdatedMessage($id:Int,$content: String!) {
   updateMessage(id: $id, content: $content) {
      status
      message
    }
  }
`;

const MessageUpdateForm = (props) => {
   let input;
   const [UpdatedMessage, { data }] = useMutation(UPDATED_MESSAGE);
   const { refetch } = useGetMessages();

   return (
      <div key={props.id}>
         <form
            onSubmit={async e => {
               e.preventDefault();
               const id = parseInt(props.id)
               const newValue = input.value
               try {
                  await UpdatedMessage({ variables: { id: id, content: newValue } });
               } catch (error) {
                  return error
               }
               refetch();
            }}
         >
            <input
               ref={content => {
                  input = content;
               }}
            />
            <button type="submit">Update message</button>
         </form>
      </div>
   );
}
export default MessageUpdateForm;