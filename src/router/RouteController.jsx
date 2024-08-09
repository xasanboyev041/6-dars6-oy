import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Register = lazy(() => import("./register/Register"));
const Login = lazy(() => import("./login/Login"));
const Profile = lazy(() => import("./profile/Profile"));
import Nav from "../components/Nav";
const RouteController = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="register"
          element={
            <Suspense fallback={<p>Loading..</p>}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback={<p>Loading..</p>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="profile"
          element={
            <Suspense fallback={<p>Loading..</p>}>
              <Profile />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default RouteController;
