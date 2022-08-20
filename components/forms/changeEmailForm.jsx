import { Formik, Field, Form } from 'formik';
import makeRequest from '../../helpers/requests';
import errorToast from '../errorToast';
import SucessToast from '../successToast';
import { useState } from 'react';
import { HandleAxiosError } from '../../helpers/errors';

export default function ChangeEmailForm(props) {
    const [emailPrefil, setEmailPrefil] = useState(props.userData['email']);
    return (
        <>
            <Formik initialValues={{ currentEmail: '', newEmail: '',}}
                onSubmit={async (values, {resetForm}) => {
                    const requestData = {'new_email': values.newEmail, 'previous_email': values.currentEmail}
                    try {
                        await makeRequest.patch('/user/', requestData);
                        const userInfo = JSON.parse(localStorage.getItem('sessionUser'))
                        userInfo['email'] = values.newEmail;
                        localStorage.setItem('sessionUser', JSON.stringify(userInfo));
                        SucessToast('Email changed successfully');
                        setEmailPrefil(values.newEmail);
                        resetForm();
                    } catch (err) {
                        HandleAxiosError(err);
                    }
                }}
            >
                <Form>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Current Email</label>
                        <Field type="email" id="currentEmail" name="currentEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={emailPrefil} required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New Email</label>
                        <Field type="email" id="newEmail" name="newEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </Form>
            </Formik>
        </>
)};