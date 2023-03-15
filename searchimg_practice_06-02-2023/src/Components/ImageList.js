import ImageShow  from "./ImageShow";
function ImageList({ ImageGroup }){
    const  renderImages = ImageGroup.map((image)=>{
        return <>
           <ImageShow key={image.id} image={image}/>

        </>
        
    })
    return <>
    <div>
<div className="row">
    {renderImages}
</div>
    </div>
    </>
}
export default ImageList;