import './App.css'
import ThemeProvider from './components/ThemeProvider'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'


function App() {
  return (
    
    <ThemeProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
