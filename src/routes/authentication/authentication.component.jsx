import SignInForm from "../../component/sign-in/sign-in-form.component";
import SignUpForm from "../../component/sign-up/sign-up-form.component";

import { AuthenticationContainer } from "./auhentication.style";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
