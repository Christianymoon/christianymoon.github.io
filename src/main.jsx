import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import avatar from './assets/avatar.png'


import { Navbar } from './components/Navbar/Navbar.jsx'
import { Hero } from './pages/Hero/Hero.jsx'
import { Projects } from './pages/Projects/Projects.jsx'
import { Blog } from './pages/Blog/Blog.jsx'
import { Contact } from './pages/Contact/Contact.jsx'
import { Shop } from './pages/Shop/Shop.jsx'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const links = [
  {name: "Home", href: "/"},
  {name: "Shop", href: "/shop"},
  {name: "Blog", href: "/blog"},
  {name: "Proyectos", href: "/projects"},
  {name: "Contacto", href: "/contact"},
  
]

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={'/'}>
  <Navbar links={links}/>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />}/> 
      <Route path="/contact" element={<Contact />}/> 
      <Route path="/shop" element={<Shop />}/>
    </Routes>
  <FloatingWhatsApp 
    phoneNumber='+524772294425' 
    accountName='Christian Vergara' 
    notification={true}
    chatMessage='Hola! con gusto te atendere, como puedo ayudarte? ☺️'
    placeholder='Mensaje'
    darkMode={true}
    statusMessage='En Línea'
    avatar={avatar}

    />
  </BrowserRouter>
)
