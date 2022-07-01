import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { PlayerVideo } from "../components/PlayerVideo";
import { Sidebar } from "../components/SideBar";
interface Params {
  slug: string;
}
export function Event() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <PlayerVideo lessonSlug={slug} /> : <div className="flex-1" />}

        <Sidebar />
      </main>
    </div>
  );
}
