import "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className="contact-item">
      <div className="contact-info">
        <span className="contact-name">{contact.name}</span>
        <span className="contact-number">{contact.number}</span>
      </div>
      <button className="delete-btn" onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
