import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <div className="form-container">
        <ContactForm />
      </div>
      <div className="search-container">
        <SearchBox />
      </div>
      <div className="contact-list-container">
        <ContactList />
      </div>
    </div>
  );
};

export default App;
