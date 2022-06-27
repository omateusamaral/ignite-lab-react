import { gql, useQuery } from "@apollo/client";

interface IGetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
    teacher: {
      avatarURL: string;
      name: string;
      bio: string;
    };
  }[];
}
function useGetLessons(): IGetLessonsQueryResponse {
  const GET_LESSONS_QUERY = gql`
    query {
      lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
        id
        slug
        title
        teacher {
          avatarURL
          name
          bio
        }
        lessonType
        availableAt
      }
    }
  `;
  const { data } = useQuery(GET_LESSONS_QUERY);
  return data;
}

export default useGetLessons;
