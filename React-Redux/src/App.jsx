import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Control from "./components/Control";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const  privacy  = useSelector((state) => state.privacy);

  return (
    <Container>
      <div className="px-4 py-5 my-5 text-center">
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy == false ? <DisplayCounter /> : <PrivacyMessage />}
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Control />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
