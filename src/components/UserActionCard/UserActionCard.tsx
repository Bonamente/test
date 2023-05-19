import { FC } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import s from './userActionCard.module.scss'

export interface UserActionCardProps {
  imgUrl: string
  text: string
}

const UserActionCard: FC<UserActionCardProps> = ({ imgUrl, text }) => {
  return (
    <div className={cn(s.card)}>
      <Image src={imgUrl} alt={text} layout='fill' objectFit='contain' />
    </div>
  )
}

export default UserActionCard
