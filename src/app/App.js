import "./App.css";
import SearchBar from "../components/SearchBar/SearchBar";
import Subreddits from "../components/Subreddits/Subreddits";
import Posts from "../components/Posts/Posts";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <main>
        <Posts />
        <Subreddits />
      </main>
    </div>
  );
}

export default App;
