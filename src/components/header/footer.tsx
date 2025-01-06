import React from 'react'
import HeaderFooterItem from './footer-item'
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '@icons'

type Props = {}

export default function FooterHeader({}: Props) {
  return (
    <div className="mt-auto max-[700px]:mt-4">
      <div className="flex max-[700px]:flex-col items-center max-[700px]:items-start">
        <div className="flex items-center gap-3">
          <HeaderFooterItem
            href="https://github.com/Cherecho"
            title="Github"
            icon={<GithubIcon />}
          />
          <HeaderFooterItem
            href="https://www.instagram.com/cherecho_/"
            title="Github"
            icon={<InstagramIcon />}
          />
          <HeaderFooterItem
            href="https://www.linkedin.com/in/alvaro-cerezo-pedrero-bb4496202/"
            title="Linkedin"
            icon={<LinkedinIcon />}
          />
          <HeaderFooterItem
            href="https://x.com/cherecho_"
            title="Twitter"
            icon={<TwitterIcon className="p-1" />}
          />
        </div>
      </div>
    </div>
  )
}
