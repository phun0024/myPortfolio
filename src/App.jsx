import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Experience from './components/Experience/Experience'


export default function App() {

  return (
    <>
      <div className='container'>
          <Header></Header>
          <Nav></Nav>
          <About></About>
          <Experience></Experience>
          <Portfolio></Portfolio>
          <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  )
}
