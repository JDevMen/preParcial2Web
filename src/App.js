import logo from "./assets/video-camera.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import TableComponent from "./components/table";

function App() {
  return (
    <div className="App">
      <Navbar bg="info" variant="light">
        <Navbar.Brand>
          <img src={logo} alt="movie camera icon" />
          Movies
        </Navbar.Brand>
      </Navbar>
      <TableComponent />
    </div>
  );
}

export default App;
