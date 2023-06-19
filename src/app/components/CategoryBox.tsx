'use client'
import React, { useCallback } from 'react'
import { IconType } from 'react-icons/lib'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ icon: Icon, label, selected }) => {
    const router = useRouter();
    const params = useSearchParams();
    const handleClick = useCallback(() => {
        let currentQuery = {}
        if (params) {
            currentQuery = qs.parse(params.toString())
        }
        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }

        if (params?.get('category') === label) {
            delete updatedQuery.category
        }

        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true })

        router.push(url)
    }, [label, router, params])
    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-1 p-2 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected ? 'border-[#41644A]' : 'border-transparent'} ${selected ? 'text-[#41644A]' : 'text-neutral-500'}`}>
            <Icon size={20} />
            <div className='font-medium text-xs'>{label}</div>
        </div>
    )
}

export default CategoryBox