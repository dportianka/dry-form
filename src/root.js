import { Route, Routes, Link } from "react-router-dom";
import Uncontrolled from "./Uncotrolled";
import Controlled from "./Controlled";
import ReactHookForm from "./ReactHookForm";
import FormikExample from "./FormikExample";

export default function Root() {
  return (
    <>
      <nav style={{ display: "flex", flex: "column", padding: "2rem" }}>
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
          <Link to="dry-form">DRY form</Link>
        </li>
      </nav>
      <Routes>
        <Route element={<Uncontrolled />} path="uncotrolled" />
        <Route element={<Controlled />} path="controlled" />
        <Route element={<ReactHookForm />} path="react-hook-form" />
        <Route element={<FormikExample />} path="formik" />
        <Route element={<div>DRY form</div>} path="controlled-but-cooler" />
      </Routes>
    </>
  );
}
