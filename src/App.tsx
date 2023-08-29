import './App.css'
import { Input } from './components/Input'
import { INPUT_TYPE, LABEL_CHILDREN } from './constants.tsx'



function App() {
  
  console.log('hello')
  
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

          <Input labelChildren={LABEL_CHILDREN.NAME} type={INPUT_TYPE.TEXT} onChange={()=>console.log(`${LABEL_CHILDREN.NAME} is running`)}/>
          <Input labelChildren={LABEL_CHILDREN.AGE} type={INPUT_TYPE.NUMBER} onChange={()=>console.log(`${LABEL_CHILDREN.AGE} is running`)}/>
          <Input labelChildren={LABEL_CHILDREN.EMAIL} type={INPUT_TYPE.EMAIL} onChange={()=>console.log(`${LABEL_CHILDREN.EMAIL} is running`)}/>

        </fieldset>
        <Input type={INPUT_TYPE.SUBMIT} value={INPUT_TYPE.SUBMIT}/>
      </form>
    </>
  )
}

export default App

    
    // const userNameElement = document.getElementById("userName")
    // const userAgeElement = document.getElementById("userAge")
    // const userEmailElement = document.getElementById("userEmail")
    
    // if (!userNameElement) console.warn('the id of "userName", was not found')
    // if (!userAgeElement) console.warn('the id of "userAge", was not found')
    // if (!userEmailElement) console.warn('the id of "userEmail", was not found')
    
    // console.log(userNameElement, userAgeElement, userEmailElement)
    
    // const showError = ({isError = true, message, field}) => {
    //   if(isError){
    //     // console.log(error)
    //     field.classList.add('invalid')
    //     field.nextElementSibling.classList.add('invalid')
    //     field.nextElementSibling.innerText = message
    //   } else {
    //     field.classList.remove('invalid')
    //     field.nextElementSibling.classList.remove('error')
    //     field.nextElementSibling.innerText = ''
    //   }
    // }
    
    
    
              // <label htmlFor="userName">
              //   Name
              //   <input type="text" name="userName" id="userName"/>
              // </label>
              // <label htmlFor="userAge">
              //   Age
              //   <input type="number" name="userAge" id="userAge"/>
              // </label>
              // <label htmlFor="userEmail">
              //   Email
              //   <input type="email" name="userEmail" id="userEmail" required/>
              // </label>