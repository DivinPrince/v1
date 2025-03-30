"use client";

import { signOut } from "@v1/auth/client";
import { Button } from "@v1/ui/button";
import { Icons } from "@v1/ui/icons";

export function SignOut() {
  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess() {
          console.log("success");
          window.location.href = "/";
        },
      },
    });
  };

  return (
    <Button
      onClick={handleSignOut}
      variant="outline"
      className="font-mono gap-2 flex items-center"
    >
      <Icons.SignOut className="size-4" />
      <span>Sign out</span>
    </Button>
  );
}
