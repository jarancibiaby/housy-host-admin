import { useSession, signIn } from "next-auth/react";
import Image from "next/image";

const Home = () => {
  const { data: session } = useSession();

  return (
    <section className="login">
      <Image src={"/assets/housy-host-logo.png"} width={400} height={400} alt="housy host logo"></Image>
      <p className="">Welcome to Housy Host</p>
      { !session ? <a href="#" onClick={(() => signIn())}>Login to continue →</a> : ''}
    </section>
  );
}

export default Home;
