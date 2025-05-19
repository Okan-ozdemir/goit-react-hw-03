import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css"; // 🔹 Modül olarak içe aktarıldı!

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
    <form onSubmit={formik.handleSubmit} className={styles.contactForm}>
      <h2 className={styles.formTitle}>Add New Contact</h2>

      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.formLabel}>
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className={`${styles.formInput} ${
            formik.touched.name && formik.errors.name ? styles.error : ""
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={styles.errorMessage}>{formik.errors.name}</div>
        ) : null}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="number" className={styles.formLabel}>
          Number
        </label>
        <input
          id="number"
          type="tel"
          name="number"
          className={`${styles.formInput} ${
            formik.touched.number && formik.errors.number ? styles.error : ""
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
        />
        {formik.touched.number && formik.errors.number ? (
          <div className={styles.errorMessage}>{formik.errors.number}</div>
        ) : null}
      </div>

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={!formik.isValid}
      >
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
