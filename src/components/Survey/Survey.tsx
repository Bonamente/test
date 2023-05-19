import cn from 'classnames'
import s from './survey.module.scss'

import SurveyInfo from 'components/SurveyInfo/SurveyInfo'

const Survey = () => {
  return (
    <section className={cn(s.survey)}>
      <div className={cn(s.surveyWrapper)}>
        <h2 className={cn(s.surveyTitle)}>
          Пройдите небольшой опрос и узнайте, <br /> как{' '}
          <span className={cn(s.textFrame)}>избежать рисков</span> при продаже
          или <br /> покупке квартиры
        </h2>

        <h2 className={cn(s.surveyTitleMobile)}>
          Пройдите небольшой опрос <br /> и узнайте,
          <span className={cn(s.textFrameMobile)}>
            как избежать рисков
          </span>{' '}
          <br /> при продаже или покупке квартиры
        </h2>

        <div className={cn(s.surveyInfoWrapper)}>
          <SurveyInfo />
        </div>
      </div>
    </section>
  )
}

export default Survey
