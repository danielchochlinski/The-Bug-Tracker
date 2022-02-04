import AuthForm from "../components/auth/AuthForm";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";


function Auth() {
  const [isLoading, seIsLoading] = useState(true);
  const router = useRouter();

  return <AuthForm />;
}

export default Auth