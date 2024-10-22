import tw from "tailwind-styled-components"
import { Field } from "formik"

function Input(props, required) {
    return (
        <>
            <Field 
                type={props.type} id={props.id}
                name={props.id} 
                className="
                    bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                    rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
                    w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                    dark:focus:border-blue-500"
                placeholder={props.prefill} required={required}
            />
        </>
    )
}

export default Input