import { useState } from 'react'
import './App.css'
import { Input } from './components/Input'
import { INPUT_TYPE, LABEL_CHILDREN } from './constants.tsx'



function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('0')
  const [email, setEmail] = useState('')
  
  console.log('hello')
  
  const validateName = () => {
    console.log(`${LABEL_CHILDREN.NAME} is running`)
  }

  const validateAge = () => {
    console.log(`${LABEL_CHILDREN.AGE} is running`)
  }

  const validateEmail = () =>{
    console.log(`${LABEL_CHILDREN.EMAIL} is running`)
  }



  return (
    <>
      <h1>CRUD-Example: Front</h1>

      <form action="" method="post"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <fieldset
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          New User

          <Input labelChildren={LABEL_CHILDREN.NAME} type={INPUT_TYPE.TEXT} value={name} onChange={validateName}/>
          <Input labelChildren={LABEL_CHILDREN.AGE} type={INPUT_TYPE.NUMBER} value={age} onChange={validateAge}/>
          <Input labelChildren={LABEL_CHILDREN.EMAIL} type={INPUT_TYPE.EMAIL} value={email} onChange={validateEmail}/>

        </fieldset>
        <Input type={INPUT_TYPE.SUBMIT} value={INPUT_TYPE.SUBMIT}/>
      </form>
    </>
  )
}

export default App

