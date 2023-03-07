import { signIn, signOut } from "next-auth/react"

export default function LoginButton() {
    return (
        <>
            <button onClick={() => signIn()} className="loginButton">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" />
                    Log in with Google
            </button>
        </>
    )
}