import Buttons from "../Components/Buttons";
import { GoBell, GoDatabase, GoCloudDownload } from "react-icons/go";

const handle = () => {
  console.log("hi ");
};
const ButtonPage = () => {
  return (
    <>
      <div>
        <div>
          <Buttons className="mb-5" rounded onClick={handle}>
            <GoBell />
            Click me!!
          </Buttons>
        </div>
        <div>
          <Buttons danger rounded>
            <GoCloudDownload />
            Buy Now!
          </Buttons>
        </div>
        <div>
          <Buttons warning rounded>
            <GoDatabase />
            See Deal!
          </Buttons>
        </div>
        <div>
          <Buttons secondary rounded>
            Hide Ads!
          </Buttons>
        </div>
        <div>
          <Buttons primary rounded>
            Something!
          </Buttons>
        </div>
      </div>
    </>
  );
};

export default ButtonPage;
