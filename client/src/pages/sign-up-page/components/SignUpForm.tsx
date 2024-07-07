import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {

  const API_URL = 'http://10.4.53.25:9999';

  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordValid, setPasswordValid] = useState<boolean>(true);
  
  const onSubmitHandler = async () => {
    if (confirmPassword != password) {
      setPasswordValid(false);
      return;
    }
    const url = `${API_URL}/users?username=${username}&password=${password}`;
    await axios.post(url).then(() => navigate('../'));
  }
  
  return (
    <div className="p-4 min-w-[360px] bg-secondary-700 rounded-lg">

      <div className="font-segoe-ui font-bold text-xl text-primary-100">Sign up</div>
      <form>
        <div className="flex flex-col gap-2 text-primary-100 mt-1">
          
          <label htmlFor="username">Username</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} name="username" id="username" className="h-8 pl-2 bg-secondary-600 rounded-sm"/>
          
          <label htmlFor="password">Password {passwordValid ? <></> : <span className="text-red-alert">Password must be the same</span>}</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" className="h-8 pl-2 bg-secondary-600 rounded-sm"/>
          
          <label htmlFor="confirmPassword">Confirm password {passwordValid ? <></> : <span className="text-red-alert">Password must be the same</span>}</label>
          <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} name="confirmPassword" id="confirmPassword" className="h-8 pl-2 bg-secondary-600 rounded-sm"/>
          
          <button type="button" onClick={onSubmitHandler} className="h-8 mt-8 bg-accent-500 rounded-sm">Sign up</button>
          <div className="font-segoe-ui text-primary-100 text-xs">Already have an account? <a className="text-accent-500 underline" href="/">Sign in</a></div>

        </div>
      </form>
    </div>
  )
}

export default SignUpForm