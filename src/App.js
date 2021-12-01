import { routes } from "./routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/navbar";

function App() {
  return (
    <Router>
      <NavBar
        children={
          <Routes>
            {routes.map((route) => (
              <Route
                exact
                path={route.path}
                key={route.id}
                element={route.component}
              />
            ))}
          </Routes>
        }
      />
    </Router>
  );
}

export default App;
