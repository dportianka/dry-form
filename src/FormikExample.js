import { Formik, Form, Field, ErrorMessage } from "formik";

/*
 * */

const FormikExample = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        agree: false,
      }}
      onSubmit={(values, { isSubmitting }) => {
        console.log("form value: ", values);
        isSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="name">Enter your name: </label>
            <Field name="name" id="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="email">Enter your email: </label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="agree">Agree</label>
            <Field type="checkbox" name="agree" id="agree" />
            <ErrorMessage name="agree" component="div" />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormikExample;
