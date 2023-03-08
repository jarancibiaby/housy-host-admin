import Image from "next/image" 
import { signIn, signOut, useSession } from "next-auth/react"

export default function Login() {

    const data = useSession();

    console.log(data)
    return (
        <section className="login">
            <Image src={"/assets/housy-host-logo.png"} width={400} height={400} alt="housy host logo"></Image>
            <p className="">Welcome to Housy Host</p>
            <a href="#" onClick={(() => signIn())}>Login to continue →</a>
        </section>
    )
}