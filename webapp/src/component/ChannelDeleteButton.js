import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import useGetChannels from '../customHooks/useGetChannel'

const DELETE_CHANNEL = gql`
  mutation DeleteChannel($id:ID!) {
    deleteChannel(id: $id) {
    status
    message
  }}
`;

const ChannelDeletedButton = (props) => {
   const [deleteChannel, { data }] = useMutation(DELETE_CHANNEL);
   const { refetch } = useGetChannels();
   const id = parseInt(props.id);

   return (
      <div key={props.id}>
         <button onClick={async () => {
            await deleteChannel({ variables: { id } });
            refetch();
         }
         }>delete</button>
      </div>
   );
}
export default ChannelDeletedButton