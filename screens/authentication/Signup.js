import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../store/auth-context";
import { signup } from "../../util/auth";
import SignupContent from "../../components/authentication/SignupContent";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();

  async function signupHandler({ username, password }) {
    setIsLoading(true);

    try {
      const token = await signup(username, password);

      //      authCtx.authenticate(token);
    } catch {
      setIsLoading(false);
    }
    setIsLoading(false);
  }

  // if (authCtxToken.token) {
  //   navigation.navigate('BottomNavigator');
  // }
  return <SignupContent onAuthenticate={signupHandler} isLoading={isLoading} />;
};

export default Signup;
