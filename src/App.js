import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MqttClient from "./components/Mqtt/MqttClient";
import { MqttProvider } from "./components/Mqtt/MqttContext";
import { VisibilityProvider } from "./components/VisibilityProvider";

function App() {
  
  return (
    <>
    {/* <MqttClient/> */}
    <MqttProvider>
      
  
    <VisibilityProvider>
      <Header />
      <Home />
      <Footer />
      <MqttClient/>
      </VisibilityProvider>
      </MqttProvider>
    </>
  );
}

export default App;
