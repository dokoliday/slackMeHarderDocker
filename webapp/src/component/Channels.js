import React, { useEffect, useState } from 'react';
import GetChannel from "../customHooks/GetChannels"
import CreateChannel from '../customHooks/useCreateChannel';
import useGetChannels from '../customHooks/useGetChannel'


const Channels = () => {
   const { data, error, loading, refetch } = useGetChannels();
   if (loading || data === undefined) {
      return <CreateChannel function={refetch} />
   }
   if (error) {
      console.log(error)
   }
   return (
      <div>
         <GetChannel channels={data.channels} />
         <CreateChannel function={refetch} />
      </div>)
}
export default Channels;