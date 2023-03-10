import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import ImageNav from "./ImageNav";

const ImageList = ({ imageLists }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (imageLists?.length > 0) {
      setTotalImages(imageLists?.length);
      setCurrentImage(imageLists?.[0]);
    }
  }, [imageLists]);

  const setCurrentImageHandler = (data) => {
    setCurrentImage(imageLists[data]);
    setCurrentPage(data);
  };

  if (imageLists?.length === 0) {
    return (
      <div className="flex flex-col  items-center">
        <p> No Images Found. Please try it again </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col  items-center">
      {currentImage && (
        <ImageCard
          {...currentImage}
          setCurrentImageHandler={setCurrentImageHandler}
          totalImages={totalImages}
          currentPage={currentPage}
        />
      )}
      <ImageNav
        totalImages={totalImages}
        currentPage={currentPage}
        setCurrentImageHandler={setCurrentImageHandler}
      />
    </div>
  );
};

export default ImageList;
