'use client'

import React, { useCallback, useState } from 'react'
import { signIn } from 'next-auth/react'
import axios from 'axios'
import { SiGithub } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import UseRegisterModal from '@/app/hooks/UseRegisterModal'
import UseLoginModal from '@/app/hooks/UseLoginModal'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../inputs/Input'
import { toast } from 'react-hot-toast'
import Button from '../Button'
import { useRouter } from 'next/navigation'

const LoginModal = () => {
    const registerModal = UseRegisterModal()
    const loginModal = UseLoginModal()
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const { register, handleSubmit, formState: { errors, } } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        signIn('credentials', {
            ...data,
            redirect: false
        })
            .then((callback) => {
                setIsLoading(false)

                if (callback?.ok) {
                    toast.success('Login success')
                    router.refresh();
                    loginModal.onClose()
                }

                if (callback?.error) {
                    toast.error(callback.error)
                }
            })
    }
    const toggle = useCallback(() => {
        loginModal.onClose()
        registerModal.onOpen()
    }, [loginModal, registerModal])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading title='Welcome back' subTitle='Login to your account' />
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />

            <Input id="password" type="password" label="Password" disabled={isLoading} register={register} errors={errors} required />
        </div>
    )
    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <Button outline label="Continue with Google" icon={FcGoogle} onClick={() => signIn('google')} />
            <Button outline label="Continue with Github" icon={SiGithub} onClick={() => signIn('github')} />
            <div className='text-neutral-500 text-center mt-4 font-light'>
                <div className='justify-center flex flex-row text-center items-center gap-2'>
                    <div>Don't have an account?</div>
                    <div onClick={toggle}
                        className='text-neutral-800 cursor-pointer hover:underline'>
                        Sign Up
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <Modal disabled={isLoading} isOpen={loginModal.isOpen} title='Login' actionLabel='Continue' onClose={loginModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent}
        />
    )
}

export default LoginModal