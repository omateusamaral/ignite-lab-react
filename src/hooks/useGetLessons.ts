import { gql, useQuery } from "@apollo/client";

function useGetLessons() {
  const GET_LESSONS_QUERY = gql`
    query {
      lessons {
        id
        title
        teacher {
          name
        }
      }
    }
  `;
  const { data } = useQuery(GET_LESSONS_QUERY);
  return data;
}

export default useGetLessons;
