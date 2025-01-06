import Link from 'next/link'
import React from 'react'
import { ExperienceType } from './types'
import ItemExperience from './experience'

// data
const experiences: ExperienceType[] = [
  {
    id: 1,
    href: 'https://ryucapital.com/',
    title: 'Ryü Capital',
    role: 'Software Engineer',
    date: 'JUL 2022 — PRESENT',
    description: (
      <>
        Develop, optimize, and deploy sophisticated algorithmic trading bots 
        across various exchanges, including
        {' '}<Link
          className="hover:underline relative font-medium transition-colors text-cyan-50 hover:text-cyan-500"
          href="https://www.binance.com/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Binance
        </Link>{' '}
          and
        {' '}<Link
          className="hover:underline relative font-medium transition-colors text-cyan-50 hover:text-cyan-500"
          href="https://www.kraken.com/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Kraken
        </Link>
          , 
        while continuously identifying and helping them to resolve endpoint issues. 
        <br />
        <br />
        Design and implement an intuitive interface with
        {' '}<Link
          className="hover:underline relative font-medium transition-colors text-cyan-50 hover:text-cyan-500"
          href="https://www.grafana.com/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Grafana
        </Link>{' '}
        for monitoring trading strategies, 
        leading development through collaboration, data analysis, troubleshooting, 
        and creating internal tools to streamline workflows.
      </>
    ),
    links: [],
    tags: ['Python', 'NumPy', 'Pandas', 'Pine Script', 'GitHub', 'InfluxDB', 'SQL', 'Grafana', 'AWS', 'S3']
  },
  {
    id: 2,
    href: 'https://www.hogarth.com/',
    title: 'Hogarth Worldwide',
    role: 'Software Developer Internship',
    date: 'ABR 2022 — JUN 2022',
    description: (
      <>
        Develop and maintain scalable back-end systems for diverse web projects, 
        including e-commerce platforms and landing pages, using a variety of technologies. 
        Collaborate closely with teams, troubleshoot issues, 
        and create internal tools to streamline workflows, ensuring high-quality, 
        client-focused solutions.
      </>
    ),
    links: [],
    tags: ['JavaScript', 'PHP', 'React JS', 'GitHub', 'S3']
  },
  {
    id: 1,
    href: 'https://www.cgi.com/',
    title: 'CGI',
    role: 'Java Developer Internship',
    date: 'ABR 2020 — JUN 2020',
    description: (
      <>
        Develop and deploy microservices using Java with Spring Boot, 
        Spring JPA, and Angular. Manage Maven-based configurations, 
        address issues, and implement new features according to client needs.
      </>
    ),
    links: [],
    tags: ['Java', 'Spring Boot', 'Spring JPA', 'Angular']
  }
]

// component
export default function ExperiencesSection() {
  return (
    <section id="experience" className="pt-24">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-cyan-100/90 text-black/80">
          Experiences
        </h3>
        {experiences.map((experience) => (
          <ItemExperience key={experience.id} {...experience} />
        ))}
      </div>
    </section>
  )
}
