import './App.css';
import WindowGenerator from './components/WindowGenerator'

export default function App() {
  const styles = {
    mainWindow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'

    }
  }

  return (
    <div className = "App" style = {styles.mainWindow}>
      <WindowGenerator />
    </div>
  )
}