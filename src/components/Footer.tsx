import { Github, Instagram } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex justify-center gap-3'>
        <p className="">Copyright © 2025 Tobi.</p>
        <Github />
        <Instagram />
        <p>Built with React</p>
    </footer>
  )
}

export default Footer