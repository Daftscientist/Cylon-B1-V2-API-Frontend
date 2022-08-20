import { Formik, Field, Form } from 'formik';
import Router from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import makeRequest from '../../helpers/requests';
import SucessToast from '../successToast';
import ErrorToast from '../errorToast';
import { HandleAxiosError } from '../../helpers/errors';


export default function SignupForm() {
    const [error, setError] = useState(null);

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                agreed: '',
                threads: '',
            }}

            onSubmit={async (values, actions) => {
                let formData = new FormData();
                formData.append('email', values.email);
                formData.append('password', values.password);
                formData.append('agreed', values.agreed);
                formData.append('threads', values.threads);
                try {
                    await makeRequest.post('/user/signup', formData);
                    const result = await makeRequest.get('/user/')
                    const data = result.data
                    localStorage.setItem('sessionUser', JSON.stringify(data));
                    Router.push('/dashboard');
                    SucessToast("Welcome to cylon " + data.name + "!")
                } catch (err) {
                    ErrorToast(HandleAxiosError(err))
                }
            }}
        >
            <Form className="space-y-4 md:space-y-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email Address</label>
                <Field id="email" required className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" name="email" placeholder="email" />

                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Password</label>
                <Field type="password" required className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 " id="password" name="password" placeholder="Password" />

                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <Field type="checkbox" name="agreed" id="agreed" required className="w-4 h-4 border rounded  focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 dark:focus:ring-primary-600 ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                    <label
                        htmlFor="terms"
                        className="font-light text-gray-300"
                    >
                        I accept the{' '}
                        <a
                        className="font-medium text-blue-500 hover:text-blue-600"
                        href="#"
                        >
                        Terms and Conditions {' '}
                        </a>
                        and{' '}
                        <a
                        className="font-medium text-blue-500 hover:text-blue-600"
                        href="#"
                        >
                        Privacy Policy
                        </a>
                    </label>
                    </div>
                </div>

                <div className="flex items-start">
                <div className="flex items-center h-5">
                        <Field type="checkbox" name="threads" id="threads" required className="w-4 h-4 border rounded  focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 dark:focus:ring-primary-600 ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                    <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                    >
                        I agree to receive marketing emails from Cylon
                    </label>
                    </div>
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link href="/login">
                    <a className="font-medium text-blue-500 hover:text-blue-600">
                        Log in
                    </a>
                    </Link>
                </p>
            </Form>
        </Formik>

    )
}