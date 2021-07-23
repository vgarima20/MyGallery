import logo from './logo.svg';
import './App.css';
import Header from "./component/header";
import Gallery from './component/gallery';
import Footer from "./component/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <Header/>
    <Gallery/>
    <Footer/>
    </div>
  );
}

export default App;
