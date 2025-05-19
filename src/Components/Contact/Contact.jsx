import { FaUser, FaPhone } from "react-icons/fa"; // 🔹 İkonlar içe aktarılıyor!
import styles from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <span className={styles.contactName}>
          <FaUser /> {contact.name}
        </span>
        <span className={styles.contactNumber}>
          <FaPhone /> {contact.number}
        </span>
      </div>
      <button className={styles.deleteBtn} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
