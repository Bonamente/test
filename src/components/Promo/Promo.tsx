import cn from 'classnames'
import s from './promo.module.scss'
import Link from 'next/link'

const Promo = () => {
  return (
    <section className={cn(s.promo)}>
      <div className={cn(s.promoWrapper)}>
        <div className={cn(s.promoContent)}>
          <p className={cn(s.promoText)}>
            Запутались в сложных терминах и документах?
          </p>
          <h1 className={cn(s.promoTitle)}>
            Узнайте, какие<span className={cn(s.topTextFrame)}>документы</span>{' '}
            <br /> подготовить и что учесть <br /> при
            <span className={cn(s.bottomTextFrame)}>
              продаже и<span className={cn(s.mobileText)}>ли</span>&nbsp;покупке
            </span>
            <br /> <span className={cn(s.bottomText)}>квартиры</span>
          </h1>

          <Link href='/' passHref>
            <a className={cn(s.promoLink)}>Хочу знать больше</a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Promo
