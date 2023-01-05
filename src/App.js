import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div
        style={{
          background: '#f7f7f7',
          width: '500px',
          height: '500px',
          borderRadius: '1rem',
          margin: '20rem',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Button variant='contained' disableRipple={false} fullWidth color='secondary'>Hello</Button>

        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
      </div>
    </div>
  );
}

export default App;
