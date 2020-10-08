import React, { Component } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'



const loginUser = userData => {
  axios.post('http://localhost:53979/token', userData)
  .then(res => {
      localStorage.setItem('tokens', JSON.stringify(res.data.access_token))

      const payload = jwt_decode(res.data.access)
      // dispatch({
      //     type: ACTION_TYPES.LOGIN,
      //     payload: payload.username
      // })
      console.log(payload)
      console.log("test")
  })
  .catch(err=>{
      console.log(err)
  })
}

function MyTextInput(props){
    function handleChange(event){
         if (props.onChange) props.onChange(event)  
    }
    return (
         <p>
             <input value={props.value} name={props.name} ref={props.inputRef} onChange={handleChange} />
         </p>
     )
}

class MyInputBlock extends Component {
    constructor(props){
        super(props)
        this.textInput = null
        this.setTextInputRef = element => {
            this.textInput = element
        }
        this.focusTextInput = () => {
            if (this.textInput) this.textInput.focus()
        }

    }

    handleChange = (event) =>{
         if (this.props.onChange) this.props.onChange(event)  
    }
    componentDidMount(){
        this.focusTextInput()
    }

    render() {
        return (
            <div>
          <p><input ref={this.setTextInputRef} type='text' placeholder='Your Name'  name={this.props.inputFullName} onChange={this.handleChange}/></p>
          <p><textarea placeholder='Your message' name={this.props.inputContentName}  onChange={this.handleChange}></textarea></p>
          </div>
      )
    }
}

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.inputFullNameRef = React.createRef()
        this.inputusernameRef = React.createRef()
        this.inputPasswordRef = React.createRef()
    }


    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        // console.log(this.inputFullNameRef.current.value)
        console.log("Final data is", data)
        loginUser(data)
    }

    handleInputChange = (event) => {
        event.preventDefault()
       // console.log(event)
       // console.log(event.target.name)
       // console.log(event.target.value)
       this.setState({
           [event.target.name]: event.target.value
       })
    }

    handleFocusClick = (event) => {
        event.preventDefault()
            this.inputusernameRef.current.focus()
    }
    handleClearClick = (event) => {
        event.preventDefault()
            this.inputFullNameRef.current.value = ''
            this.setState({
                myFullName: ''
            })
    }
    // componentDidMount(){
    //     this.inputFullNameRef.current.focus()
    // }
  render () {
      const {myFullName} = this.state
      const {username} = this.state
      const {password} = this.state
    return (
      <div>
        <h1>Forms and Inputs</h1>
        <p>Full name is: {myFullName}</p>
        <form onSubmit={this.handleSubmit}>
        <MyTextInput inputRef={this.inputusernameRef} value={username} name='username'  onChange={this.handleInputChange}/>
        <MyTextInput inputRef={this.inputPasswordRef} value={password} name='password'  onChange={this.handleInputChange}/>
          <p><button>Send Message</button></p>
          <p><button onClick={this.handleFocusClick}>Focus</button></p>
          <p><button onClick={this.handleClearClick}>Clear</button></p>
        </form>
      </div>
    )
  }
}

export default SignIn