import './App.css';
function App() {
  return (
    <div className="App">
      <h1 className="title">Your name here</h1>
      <br />
      <img src="paysagepublic.jpg" alt="paysagePublic"/>
      <br />
      <img src={"./src/paysageSource.jpg"} alt ='paysageSource'/>
      <br />
      <video width="320" height="240" controls>

      <source src="nature-short-video.mp4" type="video/mp4"></source></video>

    </div>
  );
}

export default App;
