import React from 'react'
import Home from './pages/Home'
import Page1 from './pages/Counter'
import Page2 from './pages/Promise/Page2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChildComponent from './pages/ChildComponent'
import Parent from './pages/ParentComponent'
import Reconciliation from './pages/Reconciliation'
import ControlledLoginForm from './pages/ControlledLoginForm'
import UnControlledLoginForm from './pages/UnControlledLoginForm'
import AccordianPage from './pages/Accordion'
import RandomColorGeneratorPage from './pages/RandomColorGenerator'
import StarRatingPage from './pages/StarRating'
import ImageSliderPage from './pages/ImageSlider'
import LoadMoreProductPage from './pages/LoadMoreProduct'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page1' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/child' element={<ChildComponent onClick={() => { }} />} />
        <Route path='/parent' element={<Parent />} />
        <Route path='/reconciliation' element={<Reconciliation />} />
        <Route path='/controlled-login' element={<ControlledLoginForm />} />
        <Route path='/un-controlled-login' element={<UnControlledLoginForm />} />
        <Route path='/accordian' element={<AccordianPage />} />
        <Route path='/random-color-generator' element={<RandomColorGeneratorPage />} />
        <Route path='/star-rating' element={<StarRatingPage />} />
        <Route path='/image-slider' element={<ImageSliderPage />} />
        <Route path='/load-more-product' element={<LoadMoreProductPage />} />
      </Routes>
    </Router>
  )
}

export default App
