import Link from 'next/link'

import cn from 'classnames'

import s from './navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={cn(s.nav)}>
      <ul className={cn(s.navList)}>
        <li>
          <Link href='/'>Как продать квартиру</Link>
        </li>
        <li>
          <Link href='/'>Истории клиентов</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
