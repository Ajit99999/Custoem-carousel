import { useEffect , useState } from "react";
import "./App.css";
import ImageList from "./components/ImageList";

function App() {

  const [ imageLists , setImageLists  ] = useState([]);
  useEffect(() => {
    async function getPhotos() {
      const res = await fetch(
        `https://api.unsplash.com/photos/random?client_id=YSjOuRtoPY2FOELOJeYQOafXAE90f9Tgm2nwggOjECI&count=5`
      );
      const data = await res.json();
      setImageLists(data)
    }
    getPhotos()
  }, []);
 
  return (
    <div className="App font-bold">
      <ImageList  imageLists={imageLists} />
    </div>
  );
}

export default App;
