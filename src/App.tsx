import useGetLessons from "./hooks/useGetLessons";

function App() {
  const response = useGetLessons();

  interface Lesson {
    id: string;
    title: string;
  }
  return (
    <ul>
      {response?.lessons.map((lesson: Lesson) => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  );
}

export default App;
