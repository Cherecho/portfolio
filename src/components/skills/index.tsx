import React from 'react'
import Skill from './skill'
import {
  CloudinaryIcon,
  CssIcon,
  FirebaseIcon,
  GitIcon,
  PythonIcon,
  NumPyIcon,
  PandasIcon,
  CppIcon,
  HtmlIcon,
  PineScriptIcon,
  JavaIcon,
  JavaScriptIcon,
  MongoDbIcon,
  SolidityIcon,
  MysqlIcon,
  InfluxIcon,
  NextjsIcon,
  PostgressIcon,
  ReactJsIcon,
  SassIcon,
  TailwindcssIcon,
  TypeScriptIcon,
  VercelIcon
} from '@icons'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 max-[800px]:pt-5">
      <h3 className="text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-cyan-100/90 text-black/80">
        Skills
      </h3>
      <div className="max-w-[450px] mx-auto">
        <div className="grid grid-cols-6  space-x-2 justify-center items-center">
          <Skill title="Python" icon={<PythonIcon />} />
          <Skill title="NumPy" icon={<NumPyIcon />} />
          <Skill title="Pandas" icon={<PandasIcon />} />
          <Skill title="C++" icon={<CppIcon />} />
          <Skill title="Java" icon={<JavaIcon />} />
          <Skill title="JavaScript" icon={<JavaScriptIcon />} />
          <Skill title="Solidity" icon={<SolidityIcon />} />
          <Skill title="PineScript" icon={<PineScriptIcon />} />
          <Skill title="Mysql" icon={<MysqlIcon />} />
          <Skill title="MongoDb" icon={<MongoDbIcon />} />
          <Skill title="Firebase" icon={<FirebaseIcon />} />
          <Skill title="Postgress" icon={<PostgressIcon />} />
          <Skill title="InfluxDB" icon={<InfluxIcon />} />
          <Skill title="Git" icon={<GitIcon />} />
          <Skill title="HTML" icon={<HtmlIcon />} />
          <Skill title="CSS" icon={<CssIcon />} />
          {/* <Skill title="Next js" icon={<NextjsIcon />} /> */}
          <Skill title="React js" icon={<ReactJsIcon />} />
          
          {/* <Skill title="TypeScript" icon={<TypeScriptIcon />} /> */}
          <Skill title="Tailwidcss" icon={<TailwindcssIcon />} />
          {/* <Skill title="Sass" icon={<SassIcon />} /> */}
          
          {/* <Skill title="Cloudinary" icon={<CloudinaryIcon />} /> */}
          {/* <Skill title="Vercel" icon={<VercelIcon />} /> */}
          
          
        </div>
      </div>
    </section>
  )
}
