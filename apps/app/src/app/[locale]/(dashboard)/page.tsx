import { SignOut } from "@/components/sign-out";
import { getI18n } from "@/locales/server";
import { auth } from "@v1/auth/server";
import { headers } from "next/headers";

export const metadata = {
  title: "Home",
};

export default async function Page() {
  const session = await auth.api.getSession({
    headers: headers(),
  });
  const t = await getI18n();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <p>{t("welcome", { name: session?.user?.name })}</p>

        <SignOut />
      </div>
    </div>
  );
}
