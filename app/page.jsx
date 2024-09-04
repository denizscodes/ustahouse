import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/dashboard',
      permanent: false, // Geçici yönlendirme, tarayıcı önbelleğe almaz
    },
  };
}

const Homepage = () => {
  return null; // Kullanıcı yönlendirildiği için render edilmeyecek
};

export default Homepage;
