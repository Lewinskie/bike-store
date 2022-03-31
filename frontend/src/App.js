import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/mainpage/MainPage";

function App() {
  return (
    // <DataProvider>
    <Router>
      <div className="App">
        <MainPage />
      </div>
    </Router>
    // </DataProvider>
  );
}

export default App;
