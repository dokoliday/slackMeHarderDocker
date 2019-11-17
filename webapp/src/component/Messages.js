import React, { useEffect, useState } from 'react';
import useGetMessages from '../customHooks/useGetMessages'
import GetMessage from '../component/GetMessage'
import MessageCreationForm from './MessageCreationForm';


const Messages = () => {
   const { data, error, loading, refetch } = useGetMessages();
   if (loading || data === undefined) {
      return "loading"
   }
   if (error) {
      console.log(error)
   }
   console.log(data)
   return (
      <div>
         <GetMessage messages={data.messages} />
         <MessageCreationForm />
      </div>
   )
}
export default Messages;