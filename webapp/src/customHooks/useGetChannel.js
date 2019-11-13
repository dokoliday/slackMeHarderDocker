import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const useGetChannels = () => {
   const GET_CHANNEL = gql`
   query Channels{
     channels{
       name
       id
     }
   }
 `;

   const { data, error, loading, refetch } = useQuery(GET_CHANNEL);
   return { data, error, loading, refetch }
};
export default useGetChannels;
