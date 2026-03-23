import type { PortableTextComponents } from '@portabletext/react'
import Link from 'next/link'

export const customPortableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4 last:mb-0 text-inherit leading-relaxed">{children}</p>,
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-6 mt-10 text-white">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-5 mt-8 text-white">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mb-4 mt-6 text-white">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold mb-4 mt-6 text-white">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#916AFF] pl-6 my-6 text-neutral-300 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 mb-6 last:mb-0 space-y-2 marker:text-[#916AFF] text-inherit">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 mb-6 last:mb-0 space-y-2 marker:text-[#916AFF] text-inherit">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-2">{children}</li>,
    number: ({ children }) => <li className="pl-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      const rel = target === '_blank' ? 'noopener noreferrer' : undefined
      
      if (!value?.href) return <span className="text-[#916AFF] underline decoration-[#916AFF]/40">{children}</span>;
      
      const isInternal = value.href.startsWith('/') || value.href.startsWith('#')
      
      if (isInternal) {
        return (
          <Link 
            href={value.href} 
            className="text-[#916AFF] hover:text-[#7d5be6] underline decoration-[#916AFF]/40 hover:decoration-[#7d5be6] underline-offset-4 transition-colors font-medium break-words"
          >
            {children}
          </Link>
        )
      }

      return (
        <a 
          href={value.href} 
          target={target} 
          rel={rel}
          className="text-[#916AFF] hover:text-[#7d5be6] underline decoration-[#916AFF]/40 hover:decoration-[#7d5be6] underline-offset-4 transition-colors font-medium break-words"
        >
          {children}
        </a>
      )
    },
  },
}
