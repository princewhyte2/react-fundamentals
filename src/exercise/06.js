// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).

  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   var userName = event.target.elements[0].value
  //   onSubmitUsername(userName);
  // }
  const [error, setError] = React.useState(null);
  const [username, setUsername] = React.useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    // var userName = event.target.elements[0].value
    onSubmitUsername(username);
  }

  const handleChange = (event) => {
    var value = event.target.value
    setUsername(value.toLowerCase())
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : "Username must be lower case")
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">Username:</label>
        <input id="text" type="text" onChange={handleChange} value={username} />
      </div>
      <div role="alert" style={{ color: "red" }}>
        {error}
      </div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
