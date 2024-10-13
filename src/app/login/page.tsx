import { redirect } from "next/navigation";
import { signIn, auth, providerMap } from "@/auth";
import { AuthError } from "next-auth";
import Image from "next/image";
import { BackButton } from "@/components/Button/ActionButton";

export default async function SignInPage(
  props: Readonly<{
    searchParams: { callbackUrl: string | undefined };
  }>
) {
  return (
    <div className="bg-[var(--accent)] w-full h-screen flex justify-center items-center gap-2 mx-0 my-auto">
      <div className="flex w-[50vw] h-[50vh] bg-[var(--background)] rounded-lg shadow-2xl">
        <div className="basis-1/2 rounded-s-lg bg-purple-500 w-full h-full">
          <h1 className="text-3xl font-bold">Sign in</h1>
        </div>
        <div className="relative basis-1/2 rounded-e-lg w-full h-full flex flex-col justify-between">
          <div className="absolute top-3 right-3">
            <BackButton />
          </div>
          <div className="flex flex-col items-start gap-2 mt-10 ml-10 text-[var(--foreground)] ">
            <h2 className="text-4xl font-bold">Hello, friend!</h2>
            <p className="text-lg">Please sign in to continue</p>
          </div>
          <div className="flex flex-col gap-2 items-center mb-20">
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
                  className="text-[var(--foreground)] bg-[var(--background)] p-3 rounded-md hover:shadow-lg transition-shadow duration-500"
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
    </div>
  );
}
