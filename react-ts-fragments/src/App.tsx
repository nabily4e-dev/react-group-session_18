import "./App.css";
import Bookshelf from "./components/bookshelf";
import ParentComponent from "./components/parent-component";
import './styles.css'

interface Book {
  id: number;
  title: string;
  author: string;
}

const books: Book[] = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  // Add more books here
];

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className='app'>
        <h1>React Fragments Example</h1>
        <ParentComponent />
        <Bookshelf books={books} />
      </div>
    </>
  );
}

export default App;
