import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const ADD_CHANNEL = gql`
  mutation CreateChannel($type: String!) {
   createChannel(name: $type) {
      status
      message
    }
  }
`;

const ChannelCreationForm = (props) => {
  let input;
  const [addChannel, { data }] = useMutation(ADD_CHANNEL);

  return (
    <div>
      <form
        onSubmit={  async e => {
          e.preventDefault();
          const newValue=input.value
          input.value="";
          await addChannel({ variables: { type: newValue} })
          props.onSubmit()
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