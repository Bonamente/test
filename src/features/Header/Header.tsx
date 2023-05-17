import { FC } from 'react'
import cn from 'classnames'

import s from './header.module.scss'

import Logo from 'components/Logo/Logo'
import Navigation from 'components/Navigation/Navigation'
import ContactPhone from 'components/ContactPhone/ContactPhone'
import { Button } from 'components'

export interface HeaderProps {
  classNames?: string
}

export const Header: FC<HeaderProps> = ({ classNames }) => {
  return (
    <header className={cn(s.header, classNames)}>
      <div className={cn(s.headerContent)}>
        <Logo
          imgUrl='/assets/icons/logo_icon.svg'
          classNames={cn(s.headerLogo)}
        />
        <div className={cn(s.navWrapper)}>
          <Navigation />
        </div>
        <ContactPhone />

        <Button onClick={() => {}} classNames={cn(s.callbackBtn)}>
          Перезвоните мне
        </Button>
      </div>
    </header>
  )
}
