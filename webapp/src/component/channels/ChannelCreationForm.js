import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import useGetChannels from '../../customHooks/useGetChannel'
import getMessageById from '../../customHooks/useGetMessageById'
const ADD_CHANNEL = gql`
  mutation CreateChannel($type: String!) {
   createChannel(name: $type) {
      status
      message
    }
  }
`;

const ChannelCreationForm = () => {
  const { refetch } = useGetChannels();

  let input;
  const [addChannel, { data }] = useMutation(ADD_CHANNEL);

  return (
    <div>
      <form
        onSubmit={  async e => {
          e.preventDefault();
          const newValue=input.value
          input.value="";
          try{
          await addChannel({ variables: { type: newValue} })
          refetch();
          getMessageById(newValue).refetch()
          }catch(error){
            return error
          }
        }}
      >
        <input
          ref={name => { input = name }}
        />
        <button type="submit">Add Channel</button>
      </form>
    </div>
  );
}
export default ChannelCreationForm