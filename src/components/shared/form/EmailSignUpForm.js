import Input from "./Input"
import TextArea from "./TextArea"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "yup-phone";

const EmailSignUpForm = () => {
    
    const [form, setForm] = React.useState({
        email: ''
    })  
    
    const [loading, setLoading] = React.useState(false)
    const [response, setResponse] = React.useState(null)
    const [error, setError] = React.useState(null)
    
    const EmailSignUpSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required')
    });
      
    const handleSubmit = async (values, {setSubmitting}) => {
        const url = "http://localhost:3001/mailing-list"
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
            .then(response => setResponse("You are now subscribed"))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }
    
    return (
        <div className="mailing-list">
            {response && <div className="message">{response}</div>}
            {error && <div className="errors">{error}</div>}
        <Formik
        initialValues={form}
        validationSchema={EmailSignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
              <Field type="email" name="email" placeholder="Your email address" component={Input} />
              <ErrorMessage className="error"e name="email" component="div" />
              <button type="submit" disabled={isSubmitting}>{loading ? "Loading..." : "Subscribe"}</button>
          </Form>
        )}
      </Formik>
    </div>
    )
}

export default EmailSignUpForm