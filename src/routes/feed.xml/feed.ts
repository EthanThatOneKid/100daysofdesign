import type { Author } from "feed";
import { Feed } from "feed";
import { challenges } from "../challenges";

const ORIGIN = "https://100daysofdesign.etok.me";
const COPYRIGHT = `Copyright ${new Date().getFullYear()} EthanThatOneKid`;

const author: Author = {
  name: "EthanThatOneKid",
  link: "https://etok.codes/",
};

const feed = new Feed({
  title: "100daysofdesign",
  description:
    "100 Days of Design to challenge design abilities and spark creativity!",
  id: ORIGIN,
  link: ORIGIN,
  language: "en",
  image: "https://acmcsuf.com/assets/design-logo.svg",
  favicon: "https://acmcsuf.com/assets/design-logo.svg",
  copyright: COPYRIGHT,
  generator: "Feed (https://github.com/jpmonette/feed)",
  feedLinks: {
    rss: `${ORIGIN}/feed.xml`,
  },
  author,
});

challenges.forEach((challenge) => {
  const id = `${ORIGIN}/${challenge.id.toString().padStart(3, "0")}`;
  feed.addItem({
    title: challenge.title,
    description: challenge.description,
    id,
    link: id,
    author: [author],
    contributor: [author],
    date: new Date(challenge.date),
    copyright: COPYRIGHT,
  });
});

export const rss2 = feed.rss2();
