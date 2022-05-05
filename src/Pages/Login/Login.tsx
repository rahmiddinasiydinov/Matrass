import './Login.scss';
import { ReactComponent as Lock } from '../../Assets/Images/lock.svg';
import { ReactComponent as Profile} from '../../Assets/Images/profile.svg';
import { loaderAction } from '../../Redux/ReduxSlices/LoadSlic';
import { useDispatch } from 'react-redux';

export default function Login() {
    const dispatch = useDispatch();
      dispatch(loaderAction.handleLoad(true));
    const handleLogin = (e:any )=> {
        e.preventDefault();
        const { username, password } = e.target.elements;
        console.log(username.value, password.value);
        fetch("https://matrassesapp.herokuapp.com/api/login", {
            method: "POST", 
            headers: {
                "content-type":"application/json"
            }, 
            body: JSON.stringify({
                email: username.value, 
                password:password.value
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.length > 10) {
                    dispatch(loaderAction.handleLoad(false))
                     window.location.assign(
                       `https://matras-admin.netlify.app`
                     )  
                }
                   
                
            });        

    }
    return (
        <div className="login">
        <div className="login__wrapper">
          <h2 className="login__title">Kirish</h2>
          <form action='' className="login__form" onSubmit={handleLogin}>
            <label htmlFor="username" className="login__label">
             <Profile className='login__svg'/> <input type="text" name='username' id="username" placeholder='Login' required className="login__input" />
            </label>
            <label htmlFor="passwor" className="login__label">
              <Lock className='login__svg'/><input type="password" name='password' id="password" placeholder='Parol' required className="login__input" />
            </label>
            <button type='submit' className="login__btn">Kirish</button>
          </form>
        </div>
      </div>
    );
}



