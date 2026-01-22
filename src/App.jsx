import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { fetchContacts } from "./redux/contactsOps";
import { selectLoading, selectError } from "./redux/contactsSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>

      <div className="form-container">
        <ContactForm />
      </div>

      <div className="search-container">
        <SearchBox />
      </div>

      {loading && <p className="loading">Loading contacts...</p>}
      {error && <p className="error">Error: {error}</p>}

      <div className="contact-list-container">
        <ContactList />
      </div>
    </div>
  );
};

export default App;
