"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
 

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const login = async () => {
        await gitHubSignIn();   
    }

    const logout = async () => {
        await firebaseSignOut();      
    }

    return (
        <main>
            <h1 className="text-4xl font-bold mb-2">Shopping List App</h1>
          <div>
            { user ? ( 
                <div>
                    <p>Signed in as {user.displayName} </p>
                    <button onClick={logout}>Sign out</button>
                    <p><Link href="week-9/shopping-list">Continue to your Shopping List</Link></p>
                </div>
            ) : (
                <button onClick={login}>Login with GitHub</button>
            ) }
            
          </div>
        
        </main>
    );
}
