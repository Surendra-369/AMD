import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import { VisibilityProvider } from "./components/VisibilityProvider";
// import { MqttProvider } from "./MqttContext";
import { MqttProvider } from "./components/Mqtt/MqttContext";

import {  SubtabsProvider } from "./components/SubtabsContext";
function App() {

  
  return (
    <>
    
    <MqttProvider>
    <SubtabsProvider>
    <VisibilityProvider>
      <Header />
      <Home />
      <Footer />
    
      </VisibilityProvider>
      </SubtabsProvider>
      </MqttProvider>
    </>
  );
}

export default App;
