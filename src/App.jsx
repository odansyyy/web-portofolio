import About from "./component/About";
import Banner from "./component/Banner";
import Nav from "./component/Nav";
import Project from "./component/Project";
import Contact from "./component/Contact";
import TodoList from "./component/TodoList";
import ImmutableArray from "./component/ImmutableArray";
import ImmutableState from "./component/ImmutableState";
import Create from "./component/Create";
import Login from "./component/Login" 
import Formulir from "./component/Formulir" 
import Formulir2 from "./component/Formulir2" 

function App () {
  return (
    <div className="bg-slate-900">  
    <Nav />
    <Banner />
    <About />
    <Project />
    <Contact />
    {/* <TodoList />
    <ImmutableArray />
    <ImmutableState /> */}
    {/* <Create /> */}
    {/* <Login /> */}
    {/* <Formulir />
    <Formulir2 /> */}
    </div>
  );
}

export default App;