import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: UserType['name']) => void // need to fix any
}

export const pureAddUser = (
    name: UserType['name'],
    setError: ( e: string) => void,
    setName: (e:UserType['name']) => void,
    addUserCallback: GreetingContainerPropsType['addUserCallback'] ) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (!!name) {
        addUserCallback(name);
        setName('');
    } else {
        setError('если имя пустое - показать ошибку');
    }
}

export const pureOnBlur = (name: UserType['name'], setError: (e: string) => void) => { // если имя пустое - показать ошибку
   if(!name) setError('onBlur ошибка')
}

export const pureOnEnter = (e: any, addUser: any) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<UserType['name']>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = 0 // need to fix
    const lastUserName = 'some name' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
