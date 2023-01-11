import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
import Links from "./Links";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home color="firebrick" name="Liza" city="New York" user={user}/>
      <About bio="I made this!" github={user.links.github} linkedin={user.links.linkedin}/>
      <Links/>

    </div>
  );
}

export default App;
