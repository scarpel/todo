import React, { useContext } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import TodoContext from '../../context/TodoContext';
import { useHistory } from 'react-router-dom';
import CustomButton from '../../components/commom/CustomButton';

export default function Login() {
  const { setIsAuth } = useContext(TodoContext);
  const history = useHistory();

  return (
    <div className="login h-100 d-flex justify-content-center align-items-center">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required(),
          password: Yup.string().required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setIsAuth(true);
          setSubmitting(false);
          history.push('/app');
        }}
      >
        {({ isSubmiting }) => (
          <Form className="login-form d-flex flex-column align-items-center justify-content-center bg-white p-5">
            <label className="input-line mb-4 w-100">
              <span className="one-text fw-semibold">E-mail</span>
              <br />
              <Field type="email" name="email" className="no-style w-100 mt-1" autoFocus={true} />
            </label>
            <label className="input-line w-100">
              <span className="one-text fw-semibold">Password</span>
              <br />
              <Field type="password" name="password" className="no-style w-100 mt-1" />
            </label>
            <div className="w-100 mt-2">
              <span className="small-text pointer">Forgot my password</span>
            </div>
            <CustomButton type="submit" disabled={isSubmiting} className="pointer px-5 py-3 mt-4">
              Login
            </CustomButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}
