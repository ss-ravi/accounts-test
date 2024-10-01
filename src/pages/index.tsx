import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Home</h1>
      <div>Session</div>
      {session ? <pre>{JSON.stringify(session, null, 2)}</pre> : "No session"}
      <div>
        {session ? (
          <button onClick={() => signOut()}>Sign Out</button>
        ) : (
          <button onClick={() => signIn("auth0")}>Sign In</button>
        )}
      </div>
    </div>
  );
}
