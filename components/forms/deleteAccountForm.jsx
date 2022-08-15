import { Formik, Field, Form } from 'formik';

export default function DeleteAccountForm() {
    return (
        <>
            <Formik initialValues={{}}
                onSubmit={(values, actions) => {
                    alert("hi");
                }}
            >
                <Form>
                    <div className="mt-2 mb-2">
                        <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete Account</button>
                    </div>
                </Form>
            </Formik>
        </>
)};