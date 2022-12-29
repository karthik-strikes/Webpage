import PostCard from '@/components/PostCard'
import { Blog } from 'contentlayer/generated'
import Link from 'next/link'

const MAX_DISPLAY = 2

interface RecentPosts {
  posts: Omit<Blog, 'body' | '_raw' | '_id'>[]
}

export default function RecentPosts({ posts }: RecentPosts) {
  const slicedPost = posts.slice(0, MAX_DISPLAY)

  return <></>
}
