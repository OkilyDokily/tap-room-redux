import Controller from './components/Controller'

function App() {
  const appStyle = {
    width: "80%",
    margin:"auto"
  }

  const header ={
    textAlign: "center",
    textDecoration:"underline",
    fontFamily: "'Orelega One', cursive",
    fontWeight:"lighter",
    fontSize: "30px",
    marginBottom: "15px"
  }

  return (
    <div style={appStyle} className="App">
      <div style={header}>Tap Room</div>
      <Controller />
    </div>
  );
}

export default App;
