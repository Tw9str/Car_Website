import { useRouter } from "next/router";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

const AuthPage = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <>
      {type === "register" ? (
        <RegisterForm />
      ) : type === "login" ? (
        <LoginForm />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <h2>404 | This page could not be found.</h2>
        </div>
      )}
    </>
  );
};

export default AuthPage;
