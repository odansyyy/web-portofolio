import About from "./component/About";
import Banner from "./component/Banner";
import Nav from "./component/Nav";

function App () {
  return (
    <div className="bg-slate-900">  
    <Nav />
    <Banner />
    <About />
    </div>
  )
}

export default App;