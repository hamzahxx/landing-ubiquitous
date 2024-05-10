// Used to import from source folder ('src/assets')
// import reactLogo from "./assets/react.svg";

// Used to import from public folder
// import viteLogo from "/vite.svg";

import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar name="hamzah.devs" />
      <Homepage />
    </>
  );
}

export default App;
