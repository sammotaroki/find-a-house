'use client'
import React from 'react'
import { IconType } from 'react-icons/lib'

interface CategoryInputProps {
    icon: IconType;
    label: string;
    selected?: boolean;
    onClick: (value: string) => void
}

const CategoryInput: React.FC<CategoryInputProps> = ({ icon: Icon, label, selected, onClick }) => {
    return (
        <div onClick={() => onClick(label)} className={`rounded-xl border-2 p-4 flex flex-row gap-3 hover:border-[#41644A] transition cursor-pointer ${selected ? 'border-[#41644A]' : 'border-neutral-200'}`}>
            <Icon size={20} />
            <div className='font-semibold text-neutral-500'>
                {label}
            </div>
        </div>
    )
}

export default CategoryInput
