import {
  AgentsMark,
  AwsMark,
  AzureMark,
  BashMark,
  ClaudeMark,
  CodexMark,
  CppMark,
  DeltaLakeMark,
  DockerMark,
  FabricMark,
  FastAPIMark,
  FlaskMark,
  GitHubActionsMark,
  GitMark,
  GrafanaMark,
  InfluxDBMark,
  JavaMark,
  JavaScriptMark,
  LinuxMark,
  McpMark,
  MongoDBMark,
  MySQLMark,
  NumPyMark,
  OneLakeMark,
  PandasMark,
  PhpMark,
  PolarsMark,
  PostgreSQLMark,
  PySparkMark,
  PythonMark,
  ReactMark,
  RustMark,
  SkillsMark,
  SqlServerMark,
  WorkflowsMark
} from '@icons/marks'
import Reveal from './reveal'
import Section from './section'

type Tool = {
  name: string
  mark: (props: { className?: string }) => JSX.Element
}

const GROUPS: { name: string; tools: Tool[] }[] = [
  {
    name: 'Languages',
    tools: [
      { name: 'Python', mark: PythonMark },
      { name: 'C++', mark: CppMark },
      { name: 'Rust', mark: RustMark },
      { name: 'Java', mark: JavaMark },
      { name: 'JavaScript', mark: JavaScriptMark },
      { name: 'PHP', mark: PhpMark }
    ]
  },
  {
    name: 'Backend & web',
    tools: [
      { name: 'FastAPI', mark: FastAPIMark },
      { name: 'Flask', mark: FlaskMark },
      { name: 'React', mark: ReactMark }
    ]
  },
  {
    name: 'Data & distributed',
    tools: [
      { name: 'PySpark', mark: PySparkMark },
      { name: 'pandas', mark: PandasMark },
      { name: 'NumPy', mark: NumPyMark },
      { name: 'Polars', mark: PolarsMark },
      { name: 'Delta Lake', mark: DeltaLakeMark }
    ]
  },
  {
    name: 'AI & agents',
    tools: [
      { name: 'Claude Code', mark: ClaudeMark },
      { name: 'Codex', mark: CodexMark },
      { name: 'MCP', mark: McpMark },
      { name: 'Agents', mark: AgentsMark },
      { name: 'Skills', mark: SkillsMark },
      { name: 'Workflows', mark: WorkflowsMark }
    ]
  },
  {
    name: 'Cloud platforms',
    tools: [
      { name: 'AWS', mark: AwsMark },
      { name: 'Azure', mark: AzureMark },
      { name: 'Fabric', mark: FabricMark },
      { name: 'OneLake', mark: OneLakeMark }
    ]
  },
  {
    name: 'Tooling & ops',
    tools: [
      { name: 'Docker', mark: DockerMark },
      { name: 'Git', mark: GitMark },
      { name: 'Actions', mark: GitHubActionsMark },
      { name: 'Linux', mark: LinuxMark },
      { name: 'Bash', mark: BashMark },
      { name: 'Grafana', mark: GrafanaMark }
    ]
  },
  {
    name: 'Databases',
    tools: [
      { name: 'PostgreSQL', mark: PostgreSQLMark },
      { name: 'MySQL', mark: MySQLMark },
      { name: 'SQL Server', mark: SqlServerMark },
      { name: 'MongoDB', mark: MongoDBMark },
      { name: 'InfluxDB', mark: InfluxDBMark }
    ]
  }
]

function Module({ tool }: { tool: Tool }) {
  const Mark = tool.mark
  return (
    <div className="group flex flex-col items-center gap-2 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-lg border border-line bg-raised text-muted transition duration-300 group-hover:-translate-y-1 group-hover:border-signal/60 group-hover:text-signal group-hover:shadow-[0_0_24px_-6px_rgb(var(--signal)/0.6)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
        <Mark className="h-7 w-7" />
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted transition-colors duration-300 group-hover:text-ink motion-reduce:transition-none">
        {tool.name}
      </span>
    </div>
  )
}

export default function Stack() {
  return (
    <Section id="stack" label="Stack">
      <div className="space-y-10">
        {GROUPS.map((group, gi) => (
          <div
            key={group.name}
            className="grid gap-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6"
          >
            <Reveal delay={gi * 60}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted sm:pt-2">
                {group.name}
              </h3>
            </Reveal>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(84px,1fr))] gap-x-2 gap-y-7">
              {group.tools.map((tool, ti) => (
                <li key={tool.name}>
                  {/* Each module arrives a beat after the last, so the row ripples. */}
                  <Reveal delay={gi * 60 + ti * 45}>
                    <Module tool={tool} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </Section>
  )
}
