import React, { useEffect, useState } from 'react';
import GetChannel from "./GetChannels"
import ChannelCreationForm from './ChannelCreationForm';
import useGetChannels from '../customHooks/useGetChannel'


const Channels = () => {
   const { data, error, loading, refetch } = useGetChannels();
   if (loading || data === undefined) {
      return <ChannelCreationForm onSubmit={refetch} />
   }
   if (error) {
      console.log(error)
   }
   return (
      <div>
         <GetChannel channels={data.channels} />
         <ChannelCreationForm onSubmit={refetch} />
      </div>)
}
export default Channels;