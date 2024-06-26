import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      {/* App body */}
      <div className="app__body">
        <Sidebar />
        {/* <Feed /> */}
        {/* <Widget /> */}
      </div>
    </div>
  );
}

export default App;
