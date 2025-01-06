export default function Footer() {
  return (
    <footer className="py-9 w-full border-t dark:border-t-neutral-900 border-t-neutral-300">
      <div className="flex items-center justify-center h-full mx-auto w-[600px] max-w-full">
        <div className="flex flex-col gap-2">
          <p className="mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 dark:text-orange-50 [&>a]:text-orange-800 dark:[&>a]:text-orange-50 dark:hover:[&>a]:text-cyan-500 hover:[&>a]:text-cyan-700">
            Loosely designed and coded in{' '}
            <a
              className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
              href="https://code.visualstudio.com/"
              target="_blank"
            >
              Visual Studio Code
            </a>{' '}
            by yours truly. Built with{' '}
            <a
              className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
              href="https://nextjs.org/"
              target="_blank"
            >
              React JS
            </a>
            ,
            {' '}
            <a
              className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
              href="https://nextjs.org/"
              target="_blank"
            >
              Next.js
            </a>{' '}
            and{' '}
            <a
              className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
              href="https://tailwindcss.com/"
              target="_blank"
            >
              Tailwind CSS
            </a>{' '}
            , deployed with{' '}
            <a
              className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
              href="https://github.com/"
              target="_blank"
            >
              GitHub
            </a>{' '}
            . All text is set in the Inter typeface.
          </p>
        </div>
      </div>
    </footer>
  )
}
