import React,{Component} from "react";

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email:'',
            password:''
        }
    }

    onEmailChange = (event) =>{
        this.setState({email:event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password:event.target.value})
    }

    onNameChange = (event) => {
        this.setState({name:event.target.value})
    }

    onButtonSubmit = () => {
        fetch('http://localhost:3000/register', {
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                email:this.state.email,
                password:this.state.password,
                name:this.state.name
            })
        })
        .then(res=> res.json())
        .then(data => {
            if(typeof data === 'object'){
                this.props.routeChange('home')
                this.props.loadUser(data.name)
                fetch('http://localhost:3000/numberOflogins',{
                    method:'put',
                    headers:{'Content-Type':'application/json'},
                    body: JSON.stringify({
                       email:data.email
                    })
                })
                .then(res => res.json())
                .then(console.log)
            }
        })
    }

    render(){ 
        return(
            <article className="br3 ba b--black-10 mv4 w-80 w-40-m w-20-l mw6  shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure ">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" >Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" onChange={this.onNameChange}/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" >Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" >Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
                        </div>
                        </fieldset>
                        <div className="">
                        <input   className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib " type="submit" value="Submit" onClick={()=>this.onButtonSubmit()}/>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default Register;