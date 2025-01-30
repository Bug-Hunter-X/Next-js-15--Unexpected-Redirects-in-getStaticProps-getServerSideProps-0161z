// bugSolution.js
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  //Simulate an asynchronous operation
  await new Promise((resolve) => setTimeout(resolve, 500));

  const condition = true;

  if (condition) {
    //Ensure proper data validation before redirecting
    return {
      redirect: {
        destination: '/destination',
        permanent: false,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default function MyComponent() {
  return <div>This page will redirect...</div>;
}
