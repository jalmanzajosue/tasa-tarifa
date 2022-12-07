import React from 'react'
import { useSelector } from 'react-redux';

export const RegisterPage = () => {
  const {counter} = useSelector((state: any) => state.counter)

  return (
    <div>RegisterPage{counter}</div>
  )
}
