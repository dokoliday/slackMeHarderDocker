import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import useGetMessages from '../customHooks/useGetMessages'

const DELETE_MESSAGE = gql`
  mutation DeleteMessage($id:ID!) {
    deleteMessage(id: $id) {
    status
    message
  }}
`;

const MessageDeletedButton = (props) => {
   const [deleteMessage, { data }] = useMutation(DELETE_MESSAGE);
   const { refetch } = useGetMessages();
   const id = parseInt(props.id);

   return (
      <div key={props.id}>
         <button onClick={async () => {
            await deleteMessage({ variables: { id } });
            refetch();
         }
         }>delete</button>
      </div>
   );
}
export default MessageDeletedButton