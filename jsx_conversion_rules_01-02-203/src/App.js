function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="container">
              {/* // rule no 1 we have to use camel case when attribute creation  */}
              <input
                className="form-control my-2"
                type="text"
                autoFocus={true}
                placeholder="CamelCase"
              />
              {/* // we have to write the numbmer attributes in curley braces  */}
              <input
                className="form-control my-2"
                type="text"
                maxLength={5}
                placeholder="number"
              />
              {/* when the attribute has to give the boolean value then the true value means attribute it self and false value we have to give it statically */}
              <input className="form-control my-2" type="text" spellCheck />
              <input className="form-control my-2" type="text" spellCheck={false} />
              {/* we have to write a inline css in the object format in the  tag  */}
              <button className="btn  btn-success btn-sm mx-3"
                style={{ borderTop: "1px solid red" }}
              >
                Login
              </button>
              {/* insted of class we have to use className when using the class attribute in element */}
              <button className="btn  btn-sm btn-danger"> close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
