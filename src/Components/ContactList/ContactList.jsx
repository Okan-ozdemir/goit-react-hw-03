import Contact from "../Contact/Contact";
import "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="contact-list-container">
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ContactList;
