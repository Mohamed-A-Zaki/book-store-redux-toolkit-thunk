import "./App.css";
import Books from "./components/Books";
import Form from "./components/Form";
import Header from "./components/Header";
import Separator from "./components/Separator";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import { useSelector } from "react-redux";

function App() {
  const { error } = useSelector((state) => state.books);

  return (
    <div className="App">
      <Header></Header>
      <Form></Form>
      <Separator></Separator>

      <div className="container">
        {error ? (
          <div className="alert alert-danger mb-0" role="alert">
            {error}
          </div>
        ) : null}
      </div>

      <Books>
        <BookList></BookList>
        <BookDetails></BookDetails>
      </Books>
    </div>
  );
}

export default App;


