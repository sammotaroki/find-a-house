'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Logo1 from '../../../assets/Logo.svg'

import React from 'react'

const Logo = () => {
    const router = useRouter()
    return (
        <div onClick={() => router.push('/')} className='w-10 h-10'>
            <Image alt="Logo" className='hidden md:block cursor-pointer' height="100" width="100" src={Logo1} priority={true} />
        </div>
    )
}

export default Logo