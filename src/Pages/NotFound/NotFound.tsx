import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './NotFound.scss'
import { loaderAction } from '../../Redux/ReduxSlices/LoadSlic';


export const NotFound: React.FC = () => {
    const dispatch = useDispatch();
    setTimeout(()=>{dispatch(loaderAction.handleLoad(true))}, 1000)
    return (
      <div className="notfound">
        <h2 className="notfound__title">404</h2>
        <p className='notfound__text'>page you are searching is not found 😢</p>
            <NavLink to="/" className="notfound__btn" onClick={() => {
                dispatch(loaderAction.handleLoad(false))
        }}>
          back to home
        </NavLink>
      </div>
    );
}