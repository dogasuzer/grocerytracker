import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import LoginContent from "../../components/authentication/LoginContent";
import { AuthContext } from "../../store/auth-context";
import { login } from "../../util/auth";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();

  async function loginHandler({ username, password }) {
    setIsLoading(true);

    try {
      const response = await login(username, password);
      authCtx.authenticate(response.token);
      authCtx.getUsername(response.username);
    } catch {
      setIsLoading(false);
    }
    setIsLoading(false);
  }

  return <LoginContent onAuthenticate={loginHandler} isLoading={isLoading} />;
};

export default Login;
