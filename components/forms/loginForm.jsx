import { Formik, Field, Form } from 'formik';
import Router from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import makeRequest from '../../helpers/requests';
import errorToast from '../errorToast';
import SucessToast from '../successToast';
import HandleAxiosError from '../../helpers/errors';
import ErrorToast from '../errorToast';



export default function SignupForm(props) {

    const [error, setError] = useState(null);
    const [emailError, setEmailError] = useState(false);

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}

            onSubmit={async (values, actions) => {
                const responseData = {'email': values.email, 'password': values.password};
                try {
                    await makeRequest.post('/user/login', responseData);
                    const result = await makeRequest.get('/user/')
                    const data = result.data
                    localStorage.setItem('sessionUser', JSON.stringify(data));
                    Router.push('/dashboard');
                    SucessToast("Welcome back " + data.name)
                } catch (err) {
                    HandleAxiosError(err)
                }
            }}
        >
            <Form className="space-y-4 md:space-y-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email Address</label>
                <Field id="email" required className={`sm:text-sm rounded-lg border-2 border-gray-700 focus:border-primary-600 block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white  focus:border-blue-500`} name="email" placeholder="email" />
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Password</label>
                <Field type="password" required className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 " id="password" name="password" placeholder="Password" />
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don't have an account?{" "}
                    <Link href="/register">
                    <a className="font-medium text-blue-500 hover:text-blue-600">
                        Register
                    </a>
                    </Link>
                </p>
            </Form>
        </Formik>

    )
}