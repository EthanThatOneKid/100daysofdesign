import type { RequestEvent } from "@sveltejs/kit";
import { rss2 } from "./feed";

export function GET(_: RequestEvent) {
  return new Response(rss2, {
    headers: { "content-type": "application/xml" },
  });
}
