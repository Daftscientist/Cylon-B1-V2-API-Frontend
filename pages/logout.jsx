import Link from 'next/link'
import Image from 'next/image'
import LoginForm from '../components/forms/loginForm'
import CylonLogo from '../public/cylon-logo-icon.png'
import SignupForm from '../components/forms/signupForm'
import Router from 'next/router'


export default function Logout() {
  localStorage.removeItem('sessionUser')
  Router.replace('/')
}
