import { GrNext, GrPrevious } from "react-icons/gr";

const ImageCard = ({
  urls,
  setCurrentImageHandler,
  totalImages,
  currentPage,
}) => {
  const previousHandler = () => {
    if (currentPage == 0) {
      setCurrentImageHandler(totalImages - 1);
      return;
    }
    setCurrentImageHandler(currentPage - 1);
  };
  const nextHandler = () => {
    if (currentPage == totalImages - 1) {
      setCurrentImageHandler(0);
      return;
    }
    setCurrentImageHandler(currentPage + 1);
  };
  return (
    <div className="flex flex-row items-center gap-4">
      <button onClick={previousHandler}>
        <GrPrevious />
      </button>

      <img
        loading="lazy"
        src={urls?.regular}
        alt="not found"
        className="w-96 h-56  object-cover border rounded-md"
      ></img>

      <button onClick={nextHandler}>
        <GrNext />
      </button>
    </div>
  );
};

export default ImageCard;
