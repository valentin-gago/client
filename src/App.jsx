import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div>
      <NavbarComponent />
      <AppRoutes />
    </div>
  );
}

export default App;
