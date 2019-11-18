import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import useGetChannels from '../../customHooks/useGetChannel'

const UPDATED_CHANNEL = gql`
  mutation UpdatedChannel($id:Int,$name: String!) {
   updateChannel(id: $id, name: $name) {
      status
      message
    }
  }
`;

const ChannelUpdatedForm = (props) => {
   let input;
   const [UpdatedChannel, { data }] = useMutation(UPDATED_CHANNEL);
   const { refetch } = useGetChannels();

   return (
      <div key={props.id}>
         <form
            onSubmit={async e => {
               e.preventDefault();
               const id = parseInt(props.id)
               const newValue = input.value
               try {
                  await UpdatedChannel({ variables: { id: id, name: newValue } });
               } catch (error) {
                  return error
               }
               refetch();
            }}
         >
            <input
               ref={name => {
                  input = name;
               }}
            />
            <button type="submit">Update Channel</button>
         </form>
      </div>
   );
}
export default ChannelUpdatedForm