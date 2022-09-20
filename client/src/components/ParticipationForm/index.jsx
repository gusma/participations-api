import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import {
  FieldContainer,
  FormContainer,
  SubmitButton,
} from './ParticipationForm.styled';

const ParticipationForm = (props) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name Required'),
    lastName: Yup.string().required('Last Name Required'),
    participationPercentage: Yup.number()
      .positive('Positive number required')
      .required('Number required'),
  });
  return (
    <div>
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormContainer>
            <FieldContainer>
              <Field
                name="firstName"
                type="text"
                placeholder="First Name"
                className="shadow appearance-none border rounded w-full py-2 mb-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />

              <ErrorMessage
                name="firstName"
                className="bold"
                component="span"
              />
            </FieldContainer>
            <FieldContainer>
              <Field
                name="lastName"
                placeholder="Last Name"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 mb-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage name="lastName" className="" component="span" />
            </FieldContainer>
            <FieldContainer>
              <Field
                placeholder="% number (e.g. 55 instead of 55%)"
                name="participationPercentage"
                type="number"
                className="shadow appearance-none border rounded w-full py-2 mb-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="participationPercentage"
                className=""
                component="span"
              />
            </FieldContainer>
            <FieldContainer>
              <SubmitButton type="submit">{props.children}</SubmitButton>
            </FieldContainer>
          </FormContainer>
        </Form>
      </Formik>
    </div>
  );
};

export default ParticipationForm;
