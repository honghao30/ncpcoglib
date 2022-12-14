import Header from './compornents/head'
import Search from './compornents/search'
import ListType from './compornents/listType'
import BookList from './compornents/booklist'
import BookView from './compornents/bookView'
import BootomUtil from './compornents/underbar'

function App() {
  return (
    <div className="App">
        <Header />
        <Search />
        <ListType />
        <BookList />
        <BookView />
        <BootomUtil />
    </div>
  );
}

export default App;
