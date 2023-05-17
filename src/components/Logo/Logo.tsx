import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import cn from 'classnames'

import s from './logo.module.scss'

interface LogoProps {
  imgUrl: string
  classNames?: string
}

const Logo: FC<LogoProps> = ({ imgUrl, classNames }) => {
  return (
    <div className={cn(s.logo, classNames)}>
      <Link href='/'>
        <Image src={imgUrl} alt='logo' layout='fill' objectFit='contain' />
      </Link>
    </div>
  )
}

export default Logo
