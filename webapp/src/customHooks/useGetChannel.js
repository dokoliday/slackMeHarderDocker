import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const useGetChannels = () => useQuery(gql`
  query Channels{
    channels{
      name
      id
    }
  }
`)

export default useGetChannels;
