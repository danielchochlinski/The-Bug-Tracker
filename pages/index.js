import Dashboard from "../components/dashboard/Dashboard";
import { getSession } from "next-auth/client";
function Main() {
  return <Dashboard />;
}
export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Main;
