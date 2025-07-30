import './App.css'
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
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
// {Array.from(Array(2).keys()).map((el) => (
//     <ActDocCard key={el} title={'Document  name'} />
// ))}
//                          {bestRestaurants.slice(0, 2).map((data, index) => (
//     <Card key={index} restaurant={data} />
// ))}

export default App
