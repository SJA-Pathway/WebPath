import { useEffect, useState } from "react";
import { XMLParser } from "fast-xml-parser";

type FeedItem = {
  title: string;
  description: string;
  link: string;
};

// global cache (shared across all components)
let cachedFeed: FeedItem[] | null = null;
let inFlight: Promise<FeedItem[]> | null = null;

async function fetchFeed(): Promise<FeedItem[]> {
  const res = await fetch("/feed.xml");
  const xml = await res.text();

  const parser = new XMLParser();
  const data = parser.parse(xml);

  const items = data?.rss?.channel?.item;

  if (!items) return [];
  return Array.isArray(items) ? items : [items];
}

export function useRSSFeed() {
  const [data, setData] = useState<FeedItem[]>(
    cachedFeed ?? []
  );

  const [loading, setLoading] = useState(!cachedFeed);

  useEffect(() => {
    if (cachedFeed) return;

    if (!inFlight) { 
      inFlight = fetchFeed().then((res) => {
        cachedFeed = res;
        inFlight = null;
        return res;
      });
    }

    inFlight.then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}