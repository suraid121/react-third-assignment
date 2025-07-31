import './App.css'
import "./Index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/HomePage/Home';
import SearchBar from './Components/Common/SearchBar';
function App() {

  return (
    <BrowserRouter>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
      </Routes>
    </BrowserRouter>
    
    // <div>
    //   <Filter restaurants={restaurantsCardData} />
    // </div>



  )
}

// 
//                          {bestRestaurants.slice(0, 2).map((data, index) => (
//     <Card key={index} restaurant={data} />
// ))}

export default App
