import './App.css';
import TourCard from './Components/TourCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AppBar from './Components/AppBar';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Container sx={{marginY: 5}}>
        <Grid container spacing={5}>
          <TourCard/>
          <TourCard/>
          <TourCard/>
          <TourCard/>
        </Grid>
       
      </Container>
      
    </div>
  );
}

export default App;
