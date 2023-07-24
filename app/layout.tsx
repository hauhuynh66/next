"use client";

import { useState } from 'react';
import Drawer from './components/Drawer'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './styles/Globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next app',
  description: 'Next default layout',
}

export default function App({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <div className="app flex flex-row">
          <div className='main w-full'>
              <Navbar className="flex flex-row" onToggle={()=>setIsOpen(!isOpen)}/>
              <div className='content p-3'>
              {children}
              </div>
              <Footer/>
            </div>
          <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="left">
            <button type="button" onClick={() => setIsOpen(false)}>Close</button>
          </Drawer>
        </div>
      </body>
    </html>
  )
}
