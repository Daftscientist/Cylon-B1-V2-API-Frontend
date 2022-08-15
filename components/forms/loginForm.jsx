import { Formik, Field, Form } from 'formik';
import Router from 'next/router';
import { useState } from 'react';

export default function LoginForm() {
    const [error, setError] = useState(null);

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}

            onSubmit={async (values, actions) => {
                let formData = new FormData();
                formData.append('email', values.email);
                formData.append('password', values.password);
                const res = await fetch(`${process.env.BASE_API_ROUTE}user/login`, { body: formData, method: "post", credentials: "include", });
                if(res.ok){
                    Router.push('/dashboard');
                } else {
                    // handle error
                    setError("Your username or password was incorrect.");
                }
            }}
        >
            <Form>
            {error}
                <Field id="email" className="text-black " name="email" placeholder="email" />
                <Field type="password" className="text-black " id="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </Form>
        </Formik>
    )
}