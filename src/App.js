import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MqttClient from "./components/Mqtt/MqttClient";
import { VisibilityProvider } from "./components/VisibilityProvider";

function App() {
  return (
    <>
    {/* <MqttClient/> */}
    <VisibilityProvider>
      <Header />
      <Home />
      <MqttClient/>
      <Footer />
      </VisibilityProvider>
    </>
  );
}

export default App;
