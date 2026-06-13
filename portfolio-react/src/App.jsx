import { useState ,useEffect } from 'react'
import Intro from './components/Intro'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [category, setCategory] = useState('All');

  useEffect(() => {
    // Every time the category changes and React finishes rendering,
    // jQuery template will "re-scan" the DOM.
    if (window.initTemplate) {
      window.initTemplate();
    }
  }, [category]);

    return (
      <>
      <div id="wrapper" className="fade-in">
        <Intro/>
        <Header/>
        <Nav activeCategory={category} setCategory={setCategory}/>
        <Main selectedCategory={category}/>
        <Footer></Footer>
      </div>
      </>
  );
}
export default App

