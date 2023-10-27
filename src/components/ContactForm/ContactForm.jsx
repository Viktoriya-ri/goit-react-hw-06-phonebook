// import { Formik, Field } from 'formik';
// import toast, { Toaster } from 'react-hot-toast';
// import * as Yup from 'yup';
// import 'yup-phone-lite';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import {
  Form,
  FormField,
  Wrapper,
  Input,
  FormLabel,
  ErrorMessage,
  FormButton,
} from './ContactForm.styled';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiSmartphone } from 'react-icons/gi';
import { getContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
// import { useState } from 'react';


// const ContactSchema = Yup.object({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Name is required!'),
//   number: Yup.string().phone('UA').required('Phone number is required!'),
// });
export const ContactForm = () => {
  const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);
//  const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

  // const onChange = e => {
  //   if (e.target.name === 'name') {
  //     setName(e.target.value);
  //   }
  //   if (e.target.name === 'number') {
  //     setNumber(e.target.value);
  //   }
  // };
  const handleSubmit = evt => {
    evt.preventDefault();

    const newObj = {
      id: nanoid(),
      name: evt.target.elements.name.value,
      number: evt.target.elements.number.value,
    };
    dispatch(
      addContact(newObj)
      // addContact({ name: name, number: number, id: nanoid() })
    );
    evt.target.reset();
  };
  return (
    <>
      {/* {/* <Toaster />

      {/* <Formik */}
        {/* initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          console.log(values) */}
          {/* // const existingContact = contacts.find(
          //   contact => contact.name.toLowerCase() === values.name.toLowerCase()
          // );
          // if (existingContact) {
          //   toast.error(
          //     `You already have a ${existingContact.name} in your contacts!`
          //   );
          //   actions.resetForm();
          // } else {
            dispatch(addContact({name: values.name, number: values.number, id: nanoid()}));
          //   actions.resetForm(); */}
      //

        <Form>
          <FormField>
            <FormLabel>Name</FormLabel>
            <Wrapper>
              {/* <Field name="name">
                {({ field }) => { */}
                  {/* return <Input {...field} placeholder="your name" />; */}
              //
              {/* // </Field> */}
            <Input
              type="text"
              name="name"
              placeholder='Your name'
              required
            />
              <BsFillPersonFill
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '10px',
                  transform: 'translateY(-50%)',
                }}
              />
            </Wrapper>
            <ErrorMessage name="name" component="div" />
          </FormField>
          <FormField>
            <FormLabel>Number</FormLabel>
            <Wrapper>
              {/* <Field name="number">
                {({ field }) => {
                  return <Input {...field} placeholder="+38-0XX-XXX-XX-XX" />;
                }}
              </Field> */}
            <Input
              type='tel'
              name='number'
              placeholder='Phone number'
              required
            />
              <GiSmartphone
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '10px',
                  transform: 'translateY(-50%)',
                }}
              />
            </Wrapper>
            <ErrorMessage name="number" component="div" />
          </FormField>

          <FormButton type="submit">Add contact</FormButton>
        </Form>
      {/* </Formik> */} */
    </>
  );
};

export default ContactForm;
