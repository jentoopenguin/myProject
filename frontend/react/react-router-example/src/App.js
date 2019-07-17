import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Login from "./pages/Login";

const activeStyle = {
  color: "green"
};

const isLogin = true;

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/profile" activeStyle={activeStyle}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/1" activeStyle={activeStyle}>
            Profile/1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeStyle={activeStyle}
            isActive={(match, location) => {
              if (location.pathname !== "/about") return false;
              const searchParams = new URLSearchParams(location.search);
              return !searchParams.has("name");
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about?name=mark"
            activeStyle={activeStyle}
            isActive={(match, location) => {
              if (location.pathname !== "/about") return false;
              const searchParams = new URLSearchParams(location.search);
              return searchParams.has("name");
            }}
          >
            About?name=mark
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeStyle={activeStyle}>
            Login
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route
          path="/login"
          render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
        />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
