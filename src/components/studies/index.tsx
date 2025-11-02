import Link from 'next/link'
import React from 'react'
import { StudyType } from './types'
import ItemStudy from './studies'

// data
const studies: StudyType[] = [
  {
    id: 1,
    href: 'https://u-tad.com/',
    title: 'Software engineering',
    role: 'Software Engineering Degree (with specialization in Data Engineering)',
    date: 'OCT 2023 — PRESENT',
    description: (
      <>
      </>
    ),
    links: [],
    tags: []
  },
  {
    id: 2,
    href: 'https://campusfp.es/',
    title: 'Multiplatform Application Development',
    role: 'Certificate of Higher Education',
    date: 'SEPT 2020 — JUN 2022',
    description: (
      <>
      </>
    ),
    links: [],
    tags: []
  },
  {
    id: 1,
    href: 'https://lasallegrinon.es/',
    title: 'Microcomputer Systems and Networks, Computer Science',
    role: 'Intermediate Vocational Training Certificate',
    date: 'SEPT 2018 - JUN 2020',
    description: (
      <>
      </>
    ),
    links: [],
    tags: []
  }
]

// component
export default function ExperiencesSection() {
  return (
    <section id="studies" className="pt-24">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-cyan-100/90 text-black/80">
          Academic Background
        </h3>
        {studies.map((study) => (
          <ItemStudy key={study.id} {...study} />
        ))}
      </div>
    </section>
  )
}
