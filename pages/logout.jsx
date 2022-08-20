import Router from 'next/router'
import { useEffect } from 'react'


export default function Logout() {
  useEffect(function run(){
    window.localStorage.clear()
    Router.replace('/')
  }, [])
}
