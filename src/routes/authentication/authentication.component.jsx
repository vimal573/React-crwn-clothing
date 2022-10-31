import SignInForm from "../../component/sign-in/sign-in-form.component";
import SignUpForm from "../../component/sign-up/sign-up-form.component";

import "./auhentication.style.scss";

function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
