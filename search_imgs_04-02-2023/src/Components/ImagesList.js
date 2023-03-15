import ImageShowList from "./ImageShowList";
function ImageList({ images }) {
  const renderImages = images.map((image) => {
    return <ImageShowList key={image.id} image={image} />;
  });
  return (
    <>
      <div className="row">{renderImages}</div>
    </>
  );
}
export default ImageList;
