import { getSession } from "next-auth/client";
import Box from "../../components/ui/Box"

function Settings(props) {
  return (
    <Box>
      <p style={{textAlign: 'center', fontSize: "30px"}}>Work in Progress</p>
    </Box>
  );
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

export default Settings;
