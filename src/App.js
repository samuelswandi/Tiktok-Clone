import './App.css';
import Video from './Video'

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video url = "test.mp4"
        username = "orang random"
        description = "this is a description" 
        song = "hahay palpale nyaw"
        likes = {100}
        comments = {100}
        shares = {10}
        />
        <Video url = "test2.mp4"
        username = "sem"
        description = "love u <3" 
        song = "love gracieeeeeeeeee"
        likes = {1000}
        comments = {1000}
        shares = {1000}
        />
        <Video url = "test3.mp4"
        username = "azka"
        description = "aish nice gg" 
        song = ":V :V"
        likes = {100}
        comments = {100}
        shares = {100}
        />
        <Video url = "test4.mp4"
        username = "epi"
        description = "bekantan lari" 
        song = "ada hewan bekantan"
        likes = {100}
        comments = {10}
        shares = {100}
        />
      </div>
    </div>

  );
}

export default App;
