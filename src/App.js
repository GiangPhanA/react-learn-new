import './App.css';
import AlbumFeature from './features/Album/components';
import TodoFeature from './features/Todo/pages';

function App() {
  return (
    <div className="App">
      <h1>Giang Phan</h1>
      <TodoFeature />
      <AlbumFeature />

    </div>
  );
}

export default App;
