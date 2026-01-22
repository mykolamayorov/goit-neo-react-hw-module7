import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <p className={styles.name}>👤 {name}</p>
        <p className={styles.number}>📞 {number}</p>
      </div>
      <button
        className={styles.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
