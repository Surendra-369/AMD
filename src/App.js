import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MqttClient from "./components/Mqtt/MqttClient";
import { VisibilityProvider } from "./components/VisibilityProvider";
import { MqttProvider } from "./MqttContext";

function App() {
  return (
    <>
    {/* <MqttClient/> */}
    <MqttProvider>
      
   
    <VisibilityProvider>
      <Header />
      <Home />
      <MqttClient/>
      <Footer />
      </VisibilityProvider>
      </MqttProvider>
    </>
  );
}

export default App;
