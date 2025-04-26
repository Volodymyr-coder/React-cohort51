import useWindowSize from '../1-check-screen-size/solutions';
import './App.css';

function App() {
  const { width, height } = useWindowSize();
  return (
    <>
      <h1>
        size: {width}px, {height}px
      </h1>
    </>
  );
}

export default App;
