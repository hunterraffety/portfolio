// app/blog/[slug]/page.tsx

// import { notFound } from 'next/navigation'
// import styles from './Post.module.scss'
// import { format } from 'date-fns'
// import { samplePosts } from '../../data/samplePosts'

// interface PostProps {
//   params: { slug: string }
// }

// export default function PostPage({ params }: PostProps) {
//   const post = samplePosts.find((p) => p.slug === params.slug)

//   if (!post) {
//     notFound()
//   }

//   const formattedDate = format(new Date(post.publishedDate), 'MMMM d, yyyy')

//   return (
//     <article className={styles.post}>
//       {post.coverImage && (
//         <div className={styles.heroImage}>
//           <img src={post.coverImage} alt={post.title} />
//         </div>
//       )}
//       <div className={styles.header}>
//         <h1>{post.title}</h1>
//         <p className={styles.date}>Published on {formattedDate}</p>
//       </div>
//       <div
//         className={styles.content}
//         dangerouslySetInnerHTML={{ __html: post.content }}
//       ></div>
//     </article>
//   )
// }
