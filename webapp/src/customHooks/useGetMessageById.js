import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const useGetMessageById = (id) => useQuery(gql`
  query Messages($id:Int){
   messagesBychannel(id:$id)
   {
    id
     content
     created_at,
     channel_id
   }}
`, { variables: { id } })

export default useGetMessageById;
