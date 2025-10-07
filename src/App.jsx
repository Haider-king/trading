import React,  { useState }  from "react";
import Nav from "./components/nav.jsx";
import Home from "./components/home.jsx"
import Login from "./user/login.jsx";
import Register from "./user/register.jsx";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <Nav
        onLogin={() => setShowLogin(true)}
        onRegister={() => setShowRegister(true)}
      />
          <Home />
      <Login show={showLogin} onClose={() => setShowLogin(false)} />
      <Register show={showRegister} onClose={() => setShowRegister(false)} />


    </div>
  );
};

export default App;
