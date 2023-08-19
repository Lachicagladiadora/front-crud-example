import './App.css'

function App() {
  
  console.log('hello')

const userNameElement = document.getElementById("userName")
const userAgeElement = document.getElementById("userAge")
const userEmailElement = document.getElementById("userEmail")

if (!userNameElement) console.warn('the id of "userName", was not found')
if (!userAgeElement) console.warn('the id of "userAge", was not found')
if (!userEmailElement) console.warn('the id of "userEmail", was not found')

console.log(userNameElement, userAgeElement, userEmailElement)

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

  return (
    <>
      <h1>CRUD-Example: Front</h1>

      <form action="" method="post">
        <fieldset
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
        >
          New User
          <label htmlFor="userName">
            Name
            <input type="text" name="userName" id="userName"/>
          </label>
          <label htmlFor="userAge">
            Age
            <input type="number" name="userAge" id="userAge"/>
          </label>
          <label htmlFor="userEmail">
            Email
            <input type="email" name="userEmail" id="userEmail" required/>
          </label>
        </fieldset>
        <input type="submit" value="save"/>
      </form>
    </>
  )
}

export default App
