const posts: { title: string; slug: string; content: string }[] = [
  {
    title: "The Golden Era of Hip Hop",
    slug: "golden-era",
    content: "A deep dive into the influential period of the late 80s and early 90s in hip hop music.",
  },
  {
    title: "The Evolution of Sampling in Hip Hop",
    slug: "sampling-evolution",
    content: "Explore how sampling has shaped the sound of hip hop from its origins to today.",
  },
  {
    title: "Top 10 Hip Hop Producers of All Time",
    slug: "top-producers",
    content: "A countdown of the most iconic and influential producers in hip hop history.",
  },
  {
    title: "The Impact of Hip Hop Culture on Fashion",
    slug: "hiphop-fashion",
    content: "Discover how hip hop has influenced fashion trends worldwide.",
  },
  {
    title: "The Rise of Women in Hip Hop",
    slug: "women-in-hiphop",
    content: "A look at the growing presence and impact of female artists in the hip hop industry.",
  },
  {
    title: "Hip Hop and Social Justice: A Powerful Voice",
    slug: "hiphop-social-justice",
    content: "Examining the role of hip hop music in addressing social and political issues.",
  },
  {
    title: "The Global Influence of Hip Hop",
    slug: "global-hiphop",
    content: "How hip hop has transcended borders and become a global cultural phenomenon.",
  },
  {
    title: "The Future of Hip Hop: Emerging Trends",
    slug: "future-hiphop",
    content: "Exploring the new sounds and directions shaping the future of hip hop music.",
  },
  {
    title: "Hip Hop and Storytelling: Lyrical Narratives",
    slug: "hiphop-storytelling",
    content: "Analyzing the art of storytelling through lyrics in hip hop music.",
  },
];

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await getServerSession();
  console.log("session", session);
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  posts.push(body);
  return NextResponse.json(posts);
}
