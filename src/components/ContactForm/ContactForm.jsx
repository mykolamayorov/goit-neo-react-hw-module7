import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string().min(3).max(50).required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values.name, values.number));
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <div>
          <label>Name:</label>
          <Field name="name" />
          <ErrorMessage name="name" component="p" className={styles.error} />
        </div>
        <div>
          <label>Number:</label>
          <Field name="number" />
          <ErrorMessage name="number" component="p" className={styles.error} />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
