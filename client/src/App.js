

function App() {

  fetch('http://localhost:5555/api/saved-weather-data')
  .then(r => r.json())
  .then(data => console.log(data))

  return (
    <div className="App">
      Weather Grabber
    </div>
  );
}

export default App;
