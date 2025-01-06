import CustomLink from '@components/custom-link'
import React from 'react'

type Props = {}

export default function AboutSection({}: Props) {
  return (
    <section id="about" className="pt-24 max-[800px]:pt-0">
      <h3 className="text-2xl max-[800px]:block hidden font-semibold tracking-tight mb-3 pb-4 dark:text-orange-100/90 text-black/80">
        About
      </h3>
      <div className="dark:text-neutral-400 text-neutral-900">
        <p className="mb-4 leading-6 text-base">
          As a dedicated 
          <CustomLink href="https://en.wikipedia.org/wiki/Software_engineering">
          Software Engineer
          </CustomLink>{' '} and AI enthusiast, 
          I have developed a strong foundation in various aspects of software development, 
          particularly in backend systems and data management. 
          My expertise includes 
          <CustomLink href="https://www.python.org/">
          Python
          </CustomLink>{' '}
          , 
          <CustomLink href="https://www.java.com/">
          Java
          </CustomLink>{' '}
          , 
          <CustomLink href="https://es.wikipedia.org/wiki/C%2B%2B">
          C++
          </CustomLink>{' '}, and a deep understanding of 
          <CustomLink href="https://es.wikipedia.org/wiki/SQL">
          SQL
          </CustomLink>{' '} and 
          <CustomLink href="https://es.wikipedia.org/wiki/NoSQL">
          NoSQL
          </CustomLink>{' '} databases. 
          <br />
          <br />
          One of my key achievements has been developing an advanced trading bots that automates 
          real-time transactions, optimizing strategies and enhancing efficiency for the fund.
          <br />
          <br />
          I am committed to lifelong learning, 
          as demonstrated by my ongoing education in 
          <CustomLink href="https://en.wikipedia.org/wiki/Software_engineering">
          Software Engineering
          </CustomLink>{' '} at 
          <CustomLink href="https://u-tad.com/">
          U-TAD
          </CustomLink>{' '} and recent certifications. 
          My focus is on staying ahead of technological trends, 
          ensuring that the solutions I develop are both innovative and effective.
        </p>
      </div>
    </section>
  )
}
