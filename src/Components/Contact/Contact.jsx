import styles from "./Contact.module.css"; // 🔹 Modül olarak içe aktarıldı!

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <span className={styles.contactName}>{contact.name}</span>
        <span className={styles.contactNumber}>{contact.number}</span>
      </div>
      <button className={styles.deleteBtn} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
