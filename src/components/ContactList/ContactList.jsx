import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.map((item) => (
        <li key={item.id}>
          <Contact name={item.name} number={item.number} id={item.id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
