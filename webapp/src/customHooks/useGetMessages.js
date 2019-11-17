import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const useGetMessages = () => useQuery(gql`
  query Messages{
    messages{
      content
      id
    }
   }
`)

export default useGetMessages;
