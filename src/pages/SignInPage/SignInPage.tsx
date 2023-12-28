import * as React from "react";
import { Navigate } from "react-router-dom";
// components
import Page from "../../components/Page/Page";
import SignIn from "../../components/SignIn/SignIn";
// hooks
import useCorp from "../../hooks/useCorp";

function SignInPage() {
  const isCorp = useCorp();

  return (
    <Page className="SignInPage">
      <SignIn />
      {!isCorp && <Navigate to="/not-found" replace />}
    </Page>
  );
}

export default SignInPage;
