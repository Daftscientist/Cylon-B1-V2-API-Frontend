import { Formik, Field, Form } from 'formik';

export default function ToggleKey(props) {
    return (
        <>
            <Formik initialValues={{ ToggleKey: ''}}
                onSubmit={(values, actions) => {
                    const submittedContent = JSON.stringify(values, null, 2);
                    alert(submittedContent);
                }}
            >
                <Form>
                    <div className="mt-2 mb-2">
                        <label className="inline-flex relative items-center cursor-pointer">
                            <Field type="checkbox" value="" id="ToggleKey" className="sr-only peer"/>
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </Form>
            </Formik>
        </>
)};