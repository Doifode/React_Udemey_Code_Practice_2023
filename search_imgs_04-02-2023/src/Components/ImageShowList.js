function ImageShowList({ image }) {
  return (
    <>
      <div className="col-md-3">
        <img  className="m-2" style={{height:'250px', width:'300px'}}  src={image.urls.small} alt={image.alt_description} />
      </div>
    </>
  );
}
export default ImageShowList;
