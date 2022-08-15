import Link from 'next/link'
import Image from 'next/image'
import LoginForm from '../components/forms/loginForm'


export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen testy text-white">
      <LoginForm />
    </div>

  )
}
