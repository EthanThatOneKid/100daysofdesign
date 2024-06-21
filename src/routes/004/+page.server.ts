import { getFollowRatio } from "./github";

export async function load({ url }: { url: URL }) {
  const username = url.searchParams.get("username");
  return {
    followRatio: username !== null ? await getFollowRatio(username) : null,
  };
}
