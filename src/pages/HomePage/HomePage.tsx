import { FC } from 'react'

import s from './homePage.module.scss'
import Promo from 'components/Promo/Promo'
import UserActions from 'components/UserActions/UserActions'
import Survey from 'components/Survey/Survey'
import Head from 'next/head'

export const HomePage: FC = () => {
  return (
    <div className={s.homePage}>
      <Head>
        <title>Магазин квартир</title>
      </Head>
      <Promo />
      <div className={s.homePageWrapper}>
        <UserActions />
        <Survey />
      </div>
    </div>
  )
}
