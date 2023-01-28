
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import GoodsList from "./containers/goodsList/GoodsList"
import GoodCard from "./containers/goodCard/GoodCard"



function App() {



  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/*' element={<GoodsList />} />
          <Route path='goods-card/:name' element={<GoodCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
