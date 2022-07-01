import { gql, useQuery } from "@apollo/client";

interface IGetLessonQueryResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}
function useGetLesson(slug: string): IGetLessonQueryResponse {
  const GET_LESSON_QUERY = gql`
    query GetLessonBySlug($slug: String) {
      lesson(where: { slug: $slug }) {
        title
        videoId
        description
        teacher {
          bio
          avatarURL
          name
        }
      }
    }
  `;
  const { data } = useQuery(GET_LESSON_QUERY, {
    variables: {
      slug,
    },
  });
  return data;
}

export default useGetLesson;
