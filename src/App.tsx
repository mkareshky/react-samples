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
import TreeViewPage from './pages/TreeView'
import QRCodePage from './pages/QRCodePage'
import ThemeSwitchPage from './pages/ThemeSwitch'
import ScrollIndicatorPage from './pages/ScrollIndicator'
import TabsPage from './pages/Tabs'
import ModalPopupPage from './pages/ModalPopup'
import GitHubProfileFinderPage from './pages/GitHubProfileFinder'
import SearchAutocompletePage from './pages/SearchAutocomplete'
import TicTacToePage from './pages/TicTacToe'
import ShowSelectedPage from './pages/ShowSelected'
import ShowComponentsGlobalState from './contexts/ShowComponentContext'

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
        <Route path='/tree-view' element={<TreeViewPage />} />
        <Route path='/qr-code' element={<QRCodePage />} />
        <Route path='/theme-switch' element={<ThemeSwitchPage />} />
        <Route path='/scroll-indicator' element={<ScrollIndicatorPage />} />
        <Route path='/tabs' element={<TabsPage />} />
        <Route path='/modal-popup' element={<ModalPopupPage />} />
        <Route path='/gitHub-profile-finder' element={<GitHubProfileFinderPage />} />
        <Route path='/search-autocomplete' element={<SearchAutocompletePage />} />
        <Route path='/tic-tac-toe' element={<TicTacToePage />} />
        <Route
          path='/show-selected'
          element={<ShowComponentsGlobalState>
            <ShowSelectedPage />
          </ShowComponentsGlobalState>}
        />
      </Routes>
    </Router>
  )
}

export default App
