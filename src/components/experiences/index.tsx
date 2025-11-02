import Link from 'next/link'
import React from 'react'
import { ExperienceType } from './types'
import ItemExperience from './experience'

// data
const experiences: ExperienceType[] = [
  {
    id: 1,
    href: 'https://www.nttdata.com/',
    title: 'NTT DATA',
    role: 'Data Engineer',
    date: 'SEP 2025 — PRESENT',
    description: (
      <>
        Collaborated in creating{' '}
        <Link
          className="hover:underline relative font-medium transition-colors text-cyan-50 hover:text-cyan-500"
          href="https://en.wikipedia.org/wiki/Extract,_transform,_load"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          ETL/ELT pipelines
        </Link>{' '}
        to process data and machine learning models.
        <br />
        <br />
        Location: Madrid, Spain / Remote
      </>
    ),
    links: [],
    tags: ['Python', 'PySpark', 'ETL', 'Machine Learning', 'Data Engineering']
  },
  {
    id: 2,
    href: 'https://ryucapital.com/',
    title: 'Ryü Capital',
    role: 'Software Engineer',
    date: 'JUL 2022 — APR 2025',
    description: (
      <>
        Designed and optimized data pipelines in Python for algorithmic trading bots, 
        integrated APIs with{' '}
        <Link
          className="hover:underline relative font-medium transition-colors text-cyan-50 hover:text-cyan-500"
          href="https://flask.palletsprojects.com/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Flask
        </Link>
        , processed and cleaned information, 
        and analyzed metrics to improve performance.
        <br />
        <br />
        Designed{' '}
        <Link
          className="hover:underline relative font-medium transition-colors text-cyan-50 hover:text-cyan-500"
          href="https://spark.apache.org/docs/latest/api/python/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          PySpark
        </Link>{' '}
        pipelines for obtaining, cleaning, and transforming large volumes of financial data 
        from multiple sources.
        <br />
        <br />
        Conducted statistical analysis and data exploration to optimize strategies.
        <br />
        <br />
        Developed dashboards in{' '}
        <Link
          className="hover:underline relative font-medium transition-colors text-cyan-50 hover:text-cyan-500"
          href="https://www.grafana.com/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Grafana
        </Link>{' '}
        to monitor trading strategies and Python tools that streamlined workflows.
        <br />
        <br />
        Location: Zürich, Switzerland / Remote
      </>
    ),
    links: [],
    tags: ['Python', 'NumPy', 'Pandas', 'PySpark', 'Flask', 'FastAPI', 'Pine Script', 'GitHub', 'InfluxDB', 'SQL', 'Grafana', 'AWS', 'S3']
  },
  {
    id: 3,
    href: 'https://www.hogarth.com/',
    title: 'Hogarth Worldwide',
    role: 'Software Developer',
    date: 'APR 2022 — JUN\n2022',
    description: (
      <>
        Develop and maintain scalable back-end systems for diverse web projects, 
        including e-commerce platforms and landing pages, using a variety of technologies. 
        Collaborate closely with teams, troubleshoot issues, 
        and create internal tools to streamline workflows, ensuring high-quality, 
        client-focused solutions.
        <br />
        <br />
        Location: Madrid, Spain / Hybrid
      </>
    ),
    links: [],
    tags: ['JavaScript', 'PHP', 'React JS', 'GitHub', 'S3']
  },
  {
    id: 4,
    href: 'https://www.cgi.com/',
    title: 'CGI',
    role: 'Java Developer Internship',
    date: 'ABR 2020 — JUN 2020',
    description: (
      <>
        Develop and deploy microservices using Java with Spring Boot, 
        Spring JPA, and Angular. Manage Maven-based configurations, 
        address issues, and implement new features according to client needs.
        <br />
        <br />
        Location: Madrid, Spain / Hybrid
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
