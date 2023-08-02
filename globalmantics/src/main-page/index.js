import Header from "./Header/Header";
import {BrowserRouter as Router, Route, Navigation} from 'react-router-dom'
import './main-page.css'

function App() {
  return (
    <div className='container'>
     <Header subtitle="Providing houses all over the world"/>
    </div>
  );
}

export default App;
