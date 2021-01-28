import Timer from './components/Timer/Timer';
import './App.css';

function App() {
  const firstTimer = {
    startTime: 10,
    step: 1,
    autoplay: true,
  };
  const secondTimer = {
    startTime: 30,
    step: 2,
  };

  return (
    <div className='timer-wrapper'>
      <Timer {...firstTimer} />
      <Timer {...secondTimer} />
    </div>
  );
}

export default App;
