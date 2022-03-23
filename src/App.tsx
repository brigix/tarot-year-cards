import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import './App.css';
import LifetimeTarotCalulator from './components/LifetimeTarotCalulator';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">
      <header className="App-header">
      <LifetimeTarotCalulator />
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
