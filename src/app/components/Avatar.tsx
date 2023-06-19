'use client'

import React from 'react'
import Image from 'next/image'
import UserAvatar from '../../assets/Avatar.svg'

interface AvatarProps {
    src: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
    return (
        <Image className='rounded-full' height="25" width="25" alt="Avatar" src={src || UserAvatar} />
    )
}

export default Avatar