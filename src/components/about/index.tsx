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
          Data engineer specialized in data analytics and artificial intelligence. 
          Experienced in designing{' '}
          <CustomLink href="https://en.wikipedia.org/wiki/Extract,_transform,_load">
          ETL/ELT pipelines
          </CustomLink>{' '}
          for data processing and machine learning models.
          <br />
          <br />
          Expertise in{' '}
          <CustomLink href="https://spark.apache.org/docs/latest/api/python/">
          PySpark
          </CustomLink>{' '}
          pipeline design and{' '}
          <CustomLink href="https://aws.amazon.com/">
          AWS
          </CustomLink>{' '}
          automation. Driven by the motivation to transform knowledge into actionable data 
          and create efficient solutions that generate impact.
          <br />
          <br />
          I am committed to lifelong learning, 
          as demonstrated by my ongoing education in{' '}
          <CustomLink href="https://en.wikipedia.org/wiki/Software_engineering">
          Software Engineering
          </CustomLink>{' '}
          at{' '}
          <CustomLink href="https://u-tad.com/">
          U-TAD
          </CustomLink>
          . My focus is on staying ahead of technological trends, 
          ensuring that the solutions I develop are both innovative and effective.
        </p>
      </div>
    </section>
  )
}
