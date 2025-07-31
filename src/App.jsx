import './App.css'
import "./Index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/HomePage/Home';
import SearchBar from './Components/Common/SearchBar';
import SearchResults from './Components/HomePage/SearchResult';
function App() {

  return (
    <BrowserRouter>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/search' element={<SearchResults />} ></Route>
      </Routes>
    </BrowserRouter>
    




  )
}

export default App
