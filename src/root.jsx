import { Route, Routes } from "react-router-dom";

export default function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="uncotrolled">uncotrolled</a>
          </li>
          <li>
            <a href="controlled">controlled</a>
          </li>
          <li>
            <a href="react-hook-form">React Hook Form</a>
          </li>
          <li>
            <a href="formik">formik</a>
          </li>
          <li>
            <a href="react-form">React Form</a>
          </li>
          <li>
            <a href="controlled-but-cooler">controlled but cooler</a>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route element={<div>uncontolled</div>} path="uncotrolled" />
          <Route element={<div>controled</div>} path="controled" />
          <Route element={<div>React Hook Form</div>} path="react-hook-form" />
          <Route element={<div>Formik</div>} path="formik" />
          <Route element={<div>React Form</div>} path="react-form" />
        </Routes>
      </div>
    </>
  );
}
