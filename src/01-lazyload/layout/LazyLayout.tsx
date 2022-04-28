import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import LazyPage1 from '../pages/LazyPage1';
import LazyPage2 from '../pages/LazyPage2';
import LazyPage3 from '../pages/LazyPage3'

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      { /** Children routes */}
      <ul>
        {/* { routes.map(({ to, name}) => (
          <li key={to} ><NavLink to={to} className={({ isActive }) => isActive ? "nav-active" : ""}/>{ name }</li>
        ))} */}
        <NavLink to="lazy1" className={({ isActive }) => isActive ? "nav-active" : ""}>Lazy1</NavLink> 
        <NavLink to="lazy2" className={({ isActive }) => isActive ? "nav-active" : ""}>Lazy2</NavLink> 
        <NavLink to="lazy3" className={({ isActive }) => isActive ? "nav-active" : ""}>Lazy3</NavLink> 
      </ul>

      <Routes>
          <Route path="lazy1" element={ <LazyPage1 /> } />
          <Route path="lazy2" element={ <LazyPage2 /> } />
          <Route path="lazy3" element={ <LazyPage3 /> } />

          <Route path="*" element={ <Navigate replace to={"lazy1"} /> } />
      </Routes>
    </div>
  )
}

export default LazyLayout;