import { redirect } from "next/navigation";
import { signIn, providerMap } from "@/auth";
import { AuthError } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function SignInPage(
  props: Readonly<{
    searchParams: { callbackUrl: string | undefined };
  }>
) {
  return (
    <div className="bg-[var(--background)] dark:bg-[var(--foreground)] w-full h-screen flex flex-col justify-center items-center gap-2 mx-0 my-auto">
      <div className="w-[80vw] flex justify-center">
        <div className="relative flex flex-col gap-2 justify-center items-center max-w-fit p-8">
          <Link href={"/"} className="text-3xl font-bold text-[var(--accent)]">Ouji</Link>
          <h2 className="text-xl mb-32">Let&apos;s finish your project!</h2>
          {/* TODO: Add illustration */}
          {Object.values(providerMap).map((provider) => (
            <form
              key={provider.id}
              action={async () => {
                "use server";
                try {
                  await signIn(provider.id, {
                    redirectTo: props.searchParams?.callbackUrl ?? "",
                  });
                } catch (error) {
                  // Signin can fail for a number of reasons, such as the user
                  // not existing, or the user not having the correct role.
                  // In some cases, you may want to redirect to a custom error
                  if (error instanceof AuthError) {
                    return redirect(`/signin-error?error=${error.type}`);
                  }
                  // Otherwise if a redirects happens Next.js can handle it
                  // so you can just re-thrown the error and let Next.js handle it.
                  // Docs:
                  // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
                  throw error;
                }
              }}
            >
              <button
                className="text-sm text-[var(--foreground)] bg-[var(--background)] p-1 md:p-3 rounded-md hover:shadow-lg transition-shadow duration-500"
                type="submit"
              >
                <div className="flex gap-2">
                  <Image
                    src={provider.icon}
                    alt={provider.name}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <span>Sign in with {provider.name}</span>
                </div>
              </button>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
}
