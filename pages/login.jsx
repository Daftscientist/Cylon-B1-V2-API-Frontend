import Link from 'next/link'
import Image from 'next/image'
import LoginForm from '../components/forms/loginForm'
import CylonLogo from '../public/cylon-logo-icon.png'



export default function Login() {
  return (
    <section className="bg-gray-900">
        <div className="text-white flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-gray-800">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                <Image className="inline" src={CylonLogo} width={"30px"} height={"30px"} alt="Cylon Logo" /><div className="pl-2 inline">Welcome Back!</div>
              </h1>
              <LoginForm/>
            </div>
          </div>
        </div>
    </section>
  )
}
