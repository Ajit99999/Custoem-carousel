import { useEffect, useState } from "react";
import "./App.css";
import ImageList from "./components/ImageList";

function App() {
  const [imageLists, setImageLists] = useState(null);
  useEffect(() => {
    async function getPhotos() {
      try {
        const res = await fetch(
          `https://api.unsplash.com/photos/random?client_id=YSjOuRtoPY2FOELOJeYQOafXAE90f9Tgm2nwggOjECI&count=7`
        );
        const data = await res.json();
        if (!res.ok) {
          setImageLists([]);
          return;
        }
        setImageLists(data);
      } catch (err) {
        setImageLists([]);
        console.log(err.message);
      }
    }
    getPhotos();
  }, []);

  return (
    <div className="App font-bold">
      <ImageList imageLists={imageLists} />
    </div>
  );
}

export default App;
