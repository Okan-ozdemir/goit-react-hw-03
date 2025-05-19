import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "En az 3 karakter olmalıdır")
        .max(50, "En fazla 50 karakter olabilir")
        .required("Bu alan zorunludur"),
      number: Yup.string()
        .min(3, "En az 3 karakter olmalıdır")
        .max(50, "En fazla 50 karakter olabilir")
        .required("Bu alan zorunludur"),
    }),
    onSubmit: (values, { resetForm }) => {
      onSubmit({
        id: nanoid(),
        ...values,
      });
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="contact-form">
      <h2 className="form-title">Add New Contact</h2>

      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className={`form-input ${
            formik.touched.name && formik.errors.name ? "error" : ""
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error-message">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="number" className="form-label">
          Number
        </label>
        <input
          id="number"
          type="tel"
          name="number"
          className={`form-input ${
            formik.touched.number && formik.errors.number ? "error" : ""
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
        />
        {formik.touched.number && formik.errors.number ? (
          <div className="error-message">{formik.errors.number}</div>
        ) : null}
      </div>

      <button type="submit" className="submit-btn" disabled={!formik.isValid}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
