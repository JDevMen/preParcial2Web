import logo from "./assets/video-camera.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import Table from "./components/table";

function App() {
  return (
    <div className="App">
      <Navbar bg="info" variant="light">
        <Navbar.Brand>
          <img src={logo} alt="movie camera icon" />
          Movies
        </Navbar.Brand>
      </Navbar>
      <Table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </Table>
    </div>
  );
}

export default App;
