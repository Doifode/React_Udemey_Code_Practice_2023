import PortFolio from "./PortFolio";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import "bulma/css/bulma.css";
function App() {
  return (
    <>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">
            <h1>Personal Detail Assistant ..</h1>
          </p>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <PortFolio
                imgsrc={AlexaImage}
                title="Alexa"
                handle="@alexa99"
                content="This  all assistent app aare very good to use."
              />
            </div>
            <div className="column is-4">
              <PortFolio
                imgsrc={CortanaImage}
                title="Cortane"
                handle="@cortana32"
                content="This  all assistent app aare very good to use."
              />
            </div>
            <div className="column is-4">
              <PortFolio
                imgsrc={SiriImage}
                title="Siri"
                handle="@siri01"
                content="This  all assistent app aare very good to use."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
