import { routes } from "./routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/navbar";
import Scripts from "./scripts";
import Footer from "./components/common/footer";

function App() {
  return (
    <>
      <Scripts></Scripts>
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
      <Footer />
    </>
  );
}

export default App;
