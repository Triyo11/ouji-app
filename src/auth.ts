import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import type { Provider } from "next-auth/providers";
import GitLab from "next-auth/providers/gitlab";
import Google from "next-auth/providers/google";
import google from "../public/assets/icons/google.svg";
import github from "../public/assets/icons/github.svg";
import gitlab from "../public/assets/icons/gitlab.svg";

const providers: Provider[] = [Google, GitHub, GitLab];

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider();
      let icon;
      if (providerData.name === "Google") {
        icon = google;
      } else if (providerData.name === "GitHub") {
        icon = github;
      } else {
        icon = gitlab;
      }
      return {
        id: providerData.id,
        name: providerData.name,
        icon: icon,
      };
    } else {
      let icon;
      if (provider.name === "Google") {
        icon = google;
      } else if (provider.name === "GitHub") {
        icon = github;
      } else {
        icon = gitlab;
      }
      return { id: provider.id, name: provider.name, icon: icon };
    }
  })
  .filter((provider) => provider.id !== "credentials");

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  pages: {
    signIn: "/login",
  },
});
