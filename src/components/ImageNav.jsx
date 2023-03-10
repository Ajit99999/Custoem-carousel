

const ImageNav = ({ totalImages, currentPage, setCurrentImageHandler }) => {
  const renderedImageNav = new Array(totalImages).fill(" ").map((_, index) => {
    return (
      <div key={index}>
        <button
          className={`border-black border w-4 h-4  rounded-full m-1 cursor-pointer  ${
            currentPage === index && "bg-gray-500"
          }`}
          onClick={() => {
            setCurrentImageHandler(index);
          }}
        ></button>
      </div>
    );
  });
  
  return <div className="flex flex-row m-4">
    

    {renderedImageNav}
  

  </div>;
};

export default ImageNav;
