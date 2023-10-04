import Input from "./Input"
import TextArea from "./TextArea"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "yup-phone";

const ContactForm = () => {
    
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        number: null,
        message: ''
    })  
    const [loading, setLoading] = React.useState(false)
    const [response, setResponse] = React.useState(null)
    const [error, setError] = React.useState(null)
    
    const ContactSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        number: Yup.string().required('Number is required'),
        message: Yup.string().required('Message is required')
      });
    const handleSubmit = async (values, {setSubmitting}) => {
        const url = "http://localhost:3001/send-email"
        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        }
        setSubmitting(true)
        setResponse(null)
        setLoading(true)
        fetch(url, options)
            .then(data => data.text())
            .then(response => setResponse("Messae sent sucessfully"))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }
    
    return (
        <div>
            {response && <div className="message">{response}</div>}
            {error && <div className="errors">{error}</div>}
        <Formik
        initialValues={form}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
              <Field type="text" name="name" placeholder="Your full name" label="Your Name" component={Input} />
              <ErrorMessage className="error" name="name" component="div" />
              <Field type="email" name="email" placeholder="Your Email" component={Input} label="Email" />
              <ErrorMessage className="error"e name="email" component="div" />
              <Field type="text" name="number" placeholder="What number should we call you on" label="Contact Number" component={Input} />
              <ErrorMessage className="error" name="number" component="div" />
              <Field type="textarea" name="message" placeholder="Tell us more about your project" label="Message" component={TextArea} />
              <ErrorMessage className="error" name="message" component="div" />
              <button type="submit" disabled={isSubmitting}>{loading ? "Loading..." : "Start your journey"}</button>
          </Form>
        )}
      </Formik>
    </div>
    )
}

export default ContactForm