// function PortFolio(props) {
//     // const title = props.title
//     // const handle =props.handle

function PortFolio({ title, handle, content, imgsrc }) {
  return (
 <>
 <div className="card">
    <div className="card-image">
        <figure className="image is-1by1">
            <img className="" src={imgsrc} alt="" />
        </figure>
    </div>
    <div className="card-content">
        <div className="media-content">
            <div className="title is-4">Title is {title}</div>
            <div className="subtitle is-4">Handle is {handle}</div>
        </div>
        <section className="content">
            {content}
        </section>
    </div>
 </div>
 </>
  );
}
export default PortFolio;
