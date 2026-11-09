import './App.css'
import SearchPage from './pages/SearchPage'

function App() {

  return (
    <>
      <header className="app-header">
        <span className="app-header-ball" aria-hidden="true" />
        <h1 className="app-title">
          Pokemon Viewer
        </h1>
        <p className="app-subtitle">Search any Pokemon by name or Pokedex number</p>
      </header>
      <main>
        <SearchPage/>
      </main>
    </>
  )
}

export default App
