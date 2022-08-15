import { Formik, Field, Form } from 'formik';

export default function ChangeApiKeyReqLimit(props) {
    return (
        <>
            <Formik initialValues={{ reqLimit: ''}}
                onSubmit={(values, actions) => {
                    const submittedContent = JSON.stringify(values, null, 2);
                    alert(submittedContent);
                }}
            >
                <Form>
                    <div className="mb-6">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Request Limit (per day)</label>
                        <Field id="reqLimit" name="reqLimit" type="range" min="0" max="10" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </Form>
            </Formik>
        </>
)};