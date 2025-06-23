// components/NewsSection.jsx
'use client'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const articles = [
  {
    id: 1,
    category: 'ANALYTICS',
    comments: 13,
    title: 'Customer onboarding there business classes.',
    date: '09',
    month: 'NOV',
    image: 'https://advisorhtml.websitelayout.net/img/blog/blog-01.jpg',
  },
  {
    id: 2,
    category: 'FINANCE',
    comments: 8,
    title: 'How investing in dependand increasing to business',
    date: '04',
    month: 'NOV',
    image: 'https://advisorhtml.websitelayout.net/img/blog/blog-02.jpg',
  },
  {
    id: 3,
    category: 'CONSULTATION',
    comments: 1,
    title: '7 Productivity tips to avoid burnout when working',
    date: '30',
    month: 'OCT',
    image: 'https://advisorhtml.websitelayout.net/img/blog/blog-03.jpg',
  },
]

export default function NewsSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.4 } },
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      {/* Heading */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className="text-yellow-400 uppercase tracking-widest mb-2">Lastest News</p>
        <h2 className="text-4xl font-extrabold mb-12 font-houschka text-blue-900">News & Articles</h2>
      </motion.div>

      {/* Articles Grid */}
      <div className="grid gap-8 md:grid-cols-3 mb-12">
        {articles.map(({ id, category, comments, title, date, month, image }) => (
          <motion.div
            key={id}
            className="bg-white rounded-lg shadow-md overflow-hidden text-left"
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <div className="relative">
              <img src={image} alt={title} className="w-full h-48 object-cover" />
              <div className="absolute bottom-2 right-2 bg-slate-900 text-white rounded-tl-lg px-4 py-2 text-center">
                <p className="text-2xl font-bold leading-none">{date}</p>
                <p className="text-xs uppercase tracking-wide">{month}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-slate-400 uppercase mb-2 flex items-center gap-3">
                <span>{category}</span>
                <span>•</span>
                <span>{comments < 10 ? `0${comments}` : comments} Comments</span>
              </div>
              <h3 className="font-semibold text-lg text-slate-900">{title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Blog Button */}
      <motion.button
        className="bg-yellow-400 px-8 py-3 rounded-md font-semibold text-white hover:bg-yellow-500 transition"
        initial="hidden"
        animate={controls}
        variants={buttonVariants}
      >
        VIEW ALL BLOG
      </motion.button>
    </section>
  )
}
