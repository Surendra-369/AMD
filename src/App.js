import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { VisibilityProvider } from "./components/VisibilityProvider";

function App() {
  return (
    <>
    <VisibilityProvider>
      <Header />
      <Home />
      <Footer />
      </VisibilityProvider>
    </>
  );
}

export default App;
