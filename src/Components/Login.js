// import { Button } from '@material-ui/core'
// import React from 'react'
// import './Login.css'
// import logo from '../assets/logo1.png';
// import name from '../assets/final-name.png';
// import { useStateValue } from '../StateProvider'
// import { actionTypes } from '../reducer'
// // import { auth, provider } from '../firebase'

// const Login = () => {
//     const [state, dispatch]  = useStateValue()

//     const signIn = (e) => {
//         e.preventDefault();
//         if(e.target[0].value == 'test@test.com' && e.target[1].value == '1234567890')
//         {
//             dispatch({
//                 type: actionTypes.SET_USER,
//                 user: 'Admin'
//             })
//         }
//     }
//     return (
//         <div className='login' >
//             <div className="login__logo">
//                 <img src={logo} alt="logo" />
//                 <img src={name} alt="SHAREFEST" />
//             </div>
//             {/* <Button type='submit' >Sign In</Button> */}
//             <div className="col-lg-6">
//                 <div className="p-5">
//                     {/* <div className="text-center">
//                         <h4 className="text-dark mb-4">Welcome Back!</h4>
//                     </div> */}
//                     <form className="user" onSubmit={signIn}>
//                         <div className="form-group"><input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" /></div>
//                         <div className="form-group"><input className="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password" /></div>
//                         <div className="form-group">
//                             <div className="custom-control custom-checkbox small">
//                                 <div className="form-check">
//                                     <input className="form-check-input custom-control-input" type="checkbox" id="formCheck-1" />
//                                     <label className="form-check-label custom-control-label" for="formCheck-1">Remember Me</label>
//                                 </div>
//                             </div>
//                         </div>
//                         <button className="btn btn-primary btn-block text-white btn-user" type="submit">Login</button>
//                         <hr />
//                         {/* <a className="btn btn-primary btn-block text-white btn-google btn-user" role="button"><i className="fab fa-google"></i>  Login with Google</a><a className="btn btn-primary btn-block text-white btn-facebook btn-user" role="button"><i className="fab fa-facebook-f"></i>  Login with Facebook</a> */}
//                         {/* <hr /> */}
//                     </form>
//                     {/* <div className="text-center">
//                         <a className="small" href="forgot-password.html">Forgot Password?</a>
//                     </div>
//                     <div className="text-center">
//                         <a className="small" href="register.html">Create an Account!</a>
//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login