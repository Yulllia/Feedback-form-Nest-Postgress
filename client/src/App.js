import "./App.css";
import FeedbackForm from "./components/FeedbackForm.js";
import styled from "styled-components";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Image from "./components/Image";

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow:hidden;
`;
const AppPosition = styled.div`
  display: flex;
  justify-content: space-between;
  position:relative;
  height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
      <AppPosition>
        <FeedbackForm />
        <Map />
        <Image/>
      </AppPosition>
      <Footer />
    </AppWrapper>
  );
}

export default App;
