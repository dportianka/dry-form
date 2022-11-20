import { Route, Routes, Link } from "react-router-dom";
import Uncontrolled from "./Uncotrolled";

export default function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="uncotrolled">uncotrolled</Link>
          </li>
          <li>
            <Link to="controlled">controlled</Link>
          </li>
          <li>
            <Link to="react-hook-form">React Hook Form</Link>
          </li>
          <li>
            <Link to="formik">formik</Link>
          </li>
          <li>
            <Link to="react-form">React Form</Link>
          </li>
          <li>
            <Link to="controlled-but-cooler">controlled but cooler</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route element={<Uncontrolled />} path="uncotrolled" />
        <Route element={<div>controled</div>} path="controlled" />
        <Route element={<div>React Hook Form</div>} path="react-hook-form" />
        <Route element={<div>Formik</div>} path="formik" />
        <Route element={<div>React Form</div>} path="react-form" />
      </Routes>
    </>
  );
}
