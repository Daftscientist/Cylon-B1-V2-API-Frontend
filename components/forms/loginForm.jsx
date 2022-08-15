import { Formik, Field, Form } from 'formik';

export default function LoginForm() {
    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}

            onSubmit={async () => {
                const res = await fetch('https://raw.githubusercontent.com/Daftscientist/DisHook/main/test.json');
                const data = await res.json();
                alert(JSON.stringify(data));

            }}
        >
            <Form>
                <Field id="username" name="username" placeholder="Username" />
                <Field type="password" id="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </Form>
        </Formik>
    )
}