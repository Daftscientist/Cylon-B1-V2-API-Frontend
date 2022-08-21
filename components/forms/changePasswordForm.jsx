import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import ErrorToast from '../errorToast';
import SucessToast from '../successToast';
import { ButtonBlue } from '../elements/button';
import HandleAxiosError from '../../helpers/errors';
import LoadingInner from '../elements/LoadingInner';

export default function ChangePasswordForm() {
    const [buttonLoading, setButtonLoading] = useState(false);
    return (
        <>
            <Formik initialValues={{ currentPassword: '', newPassword: '',}}
                onSubmit={async (values, {resetForm}) => {
                    console.log("making the request")
                    const requestData = {'new_password': values.currentPassword, 'current_password': values.newPassword}
                    console.log("generated req data")
                    try {
                        setButtonLoading(true);
                        console.log("set loading to true")
                        await makeRequest.patch('/user/', requestData);
                        console.log("made the request")
                        SucessToast('Password changed successfully');
                        resetForm();
                        setButtonLoading(false);
                    } catch (err) {
                        HandleAxiosError(err);
                        setButtonLoading(false);
                    }
                    setButtonLoading(false);
                }}
            >
                <Form>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Current Password</label>
                        <Field type="password" id="currentPassword" name="currentPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New Password</label>
                        <Field type="password" id="newPassword" name="newPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>

                    <ButtonBlue type='submit'>
                        {buttonLoading ? <LoadingInner/> : 'Submit'}
                    </ButtonBlue>
                </Form>
            </Formik>
        </>
)};