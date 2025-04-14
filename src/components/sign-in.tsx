import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("Line")
      }}
    >
      <button type="submit">Signin with LINE</button>
    </form>
  )
} 