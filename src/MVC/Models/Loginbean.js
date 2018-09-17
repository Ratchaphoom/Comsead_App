const Login = (dispath) => {
    return {
      setUsername: (username) => {
        dispath({
          type: "SET_USERNAME",
          payload: username
        })
      }, setPassword: (password) => {
        dispath({
          type: "SET_PASSWORD",
          payload: password
        })
      },setLoginStatus: (loginstatus) => {
        dispath({
          type: "LOGIN_STATUS",
          payload: loginstatus
        })
      }
    }
  }
  export default Login