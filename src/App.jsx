import { Routes, Route, BrowserRouter } from "react-router-dom";
import Attendance from "./pages/attendance/Attendance";
import "./App.css";
import Home from "./pages/Home";

const auth = {
  isAuthenticated: () => true,
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/user_dashboard/attendance"
            exact
            Component={() =>
              auth.isAuthenticated() ? (
                <Home ContentComponent={Attendance} />
              ) : (
                /* return <Redirect to={{ pathname: "/sign-in" }} />; */ <></>
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
