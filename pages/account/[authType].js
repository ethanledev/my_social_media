import AuthPage from "../../components/pages/AuthPage/AuthPage";

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      authType: params.authType,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { authType: "login" } },
      { params: { authType: "signup" } },
    ],
    fallback: false,
  };
};

const Page = (props) => <AuthPage {...props} />;

export default Page;
