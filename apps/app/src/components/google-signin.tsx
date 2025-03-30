"use client";
import { Button } from "@v1/ui/button";
import { signIn } from "@v1/auth/client";

export function GoogleSignin() {
  const handleSignin = () => {
    signIn.social({
      provider: "google",
      callbackURL: "/"
    });
  };

  return (
    <Button onClick={handleSignin} variant="outline" className="font-mono">
      Sign in with Google
    </Button>
  );
}
