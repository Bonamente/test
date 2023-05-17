import { FC } from 'react'
import cn from 'classnames'

import s from './footer.module.scss'
import Logo from 'components/Logo/Logo'
import FooterContacts from 'components/FooterContacts/FooterContacts'

export interface FooterProps {
  classNames?: string
}

export const Footer: FC<FooterProps> = ({ classNames }) => {
  return (
    <footer className={cn(s.footer, classNames)}>
      <div className={cn(s.footerContent)}>
        <Logo
          imgUrl='/assets/icons/footer-logo_icon.svg'
          classNames={cn(s.footerLogo)}
        />
        <FooterContacts />
      </div>
    </footer>
  )
}
