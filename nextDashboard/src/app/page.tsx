import React from 'react';
import Image from 'next/image';
import '../main.css'


export default function Page() {
    return (
      <div>
        <h1 className='text-[#AACCDD] font-semibold'>Next.js</h1>
        <p>
          <a href="/about">About</a>
        </p>
      </div>
    )
  }