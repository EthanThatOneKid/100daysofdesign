export async function getFollowRatio(username: string): Promise<FollowRatio> {
  return await fetch(
    `https://follow-ratio.deno.dev/?username=${username}`
  ).then((response) => response.json());
}

// follow-ratio.deno.dev API source code:
// https://github.com/EthanThatOneKid/follow-ratio-api
//

/**
 * The Follow Ratio is simply the number of followers someone has divided by the number of people following them. A value above 1 means an account has more followers than accounts they are following.
 */
export interface FollowRatio extends FollowerFollowingCount {
  ratio: number;
  difference: number;
  notFollowingBack?: string[];
  notFollowedBack?: string[];
  followingEachOther?: string[];
}

export interface FollowerFollowingCount {
  followers: number;
  following: number;
}
