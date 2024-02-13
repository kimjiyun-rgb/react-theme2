import React, { useContext } from "react";
import DarkOrLight from "./DarkOrLight";
const ThemeContext = React.createContext();
const UserContext = React.createContext();


function App() {
  return <DarkOrLight />
}

function A() { return <B />; }
function B() { return <C />; }
function C()
{
  const color = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div>
      <h3>{user.name}</h3>
      <h1 style={{ backgroundColor: color }}>C 내용</h1>
    </div>
  );
}
export default App;
