import { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';
import { routes } from './routes';
import logo from '../logo.svg';

console.log(routes,'<')

export const Navigation = () => {
  return (
    <Suspense fallback="...loading"> 
      <BrowserRouter>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              {routes.map(({name, to}) => (
                <li key={to}>
                  <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                </li>)
              )}
            </ul>
          </nav>

          <Routes>
            {routes.map(({path, component: Component }) => <Route key={path} path={path} element={<Component />} />)}
            <Route path="/*" element={<Navigate to={routes[0].to} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}