'use client'

import React from 'react'
import Container from '../Container'
import { HiOutlineSun } from 'react-icons/hi'
import { TbTrain } from 'react-icons/tb'
import { MdPark } from 'react-icons/md'
import { CgGym } from 'react-icons/cg'
import { GiMountainRoad, GiCommercialAirplane, GiTreehouse, GiPowerGenerator, GiBoatFishing, GiCampingTent, GiSittingDog, GiHotDog, GiCactus, GiCutDiamond } from 'react-icons/gi'
import { FaSwimmingPool, FaTaxi } from 'react-icons/fa'
import CategoryBox from '../CategoryBox'
import { usePathname, useSearchParams } from 'next/navigation'

export const categories = [
    {
        label: "Sunny",
        icon: HiOutlineSun,
        description: "These properties have tons of natural lighting "
    },
    {
        label: "Arid",
        icon: GiCactus,
        description: "These properties are in a dry region "
    },
    {
        label: "Lake",
        icon: GiBoatFishing,
        description: "These properties have access to a lake"
    },
    {
        label: "Scenic",
        icon: GiTreehouse,
        description: "These properties have access to beautiful views"
    },
    {
        label: "Park",
        icon: MdPark,
        description: "These properties are in close proximity to a park"
    },
    {
        label: "Countryside",
        icon: GiMountainRoad,
        description: "These properties are located in the city outskirts"
    },
    {
        label: "Luxury",
        icon: GiCutDiamond,
        description: "These properties are postopulent and luxurious"
    },
    {
        label: "Camping",
        icon: GiCampingTent,
        description: "These properties are on a camp site"
    },
    {
        label: "Airport",
        icon: GiCommercialAirplane,
        description: "These properties are close to an airstrip/airport "
    },
    {
        label: "Railway",
        icon: TbTrain,
        description: "These properties are in close proximity to a railway line"
    },
    {
        label: "Cabs",
        icon: FaTaxi,
        description: "These properties have dedicated cab services"
    },
    {
        label: "Restaurants",
        icon: GiHotDog,
        description: "These properties are in close proximity to a restaurant"
    },
    {
        label: "Gym",
        icon: CgGym,
        description: "These properties have a gym"
    },
    {
        label: "Pools",
        icon: FaSwimmingPool,
        description: "These properties have a swimmingpool "
    },
    {
        label: "Pets",
        icon: GiSittingDog,
        description: "These properties allow pets"
    },
    {
        label: "Generator",
        icon: GiPowerGenerator,
        description: "These properties have an auxiliary power back-up"
    },
]

const Categories = () => {
    const params = useSearchParams()
    const category = params?.get('category')
    const pathname = usePathname()

    const isMainPage = pathname === '/'
    if (!isMainPage) {
        return null;
    }
    return (
        <Container>
            <div className='flex flex-row items-center justify-between overflow-x-auto'>
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    )
}

export default Categories