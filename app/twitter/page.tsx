import React from 'react'
import Header from './components/Header'
import Form from './components/Form'


const page = async() => {

  
  return (
    <>
      <Header label={'Home'} />
      <Form    placeholder="What's happening?" />
    </>
  )
}

export default page