import cn from 'classnames'
import s from './surveyInfo.module.scss'
import { Button } from 'components/Button/Button'

const SurveyInfo = () => {
  return (
    <div className={cn(s.surveyInfo)}>
      <div className={cn(s.surveyInfoWrapper)}>
        <p className={cn(s.surveyTime)}>
          Время прохождения опроса <span>3 минуты</span>
        </p>
        <h3 className={cn(s.surveyInfoTitle)}>
          Хочу безопасно и легко <br /> продать или купить квартиру
        </h3>

        <Button onClick={() => {}} classNames={cn(s.surveyInfoBtn)}>
          Начать
        </Button>

        <p className={cn(s.surveyInfoText)}>
          После завершения опроса вы получите
          <br className={cn(s.mobileLineBreak)} /> PDF
          <br className={cn(s.desktopLineBreak)} /> файл с содержащий:
        </p>

        <ol className={cn(s.surveyInfoList)}>
          <li>
            <p>
              Список документов, необходимых
              <br className={cn(s.mobileLineBreak)} /> в вашем
              <br className={cn(s.desktopLineBreak)} /> конкретном случае.
            </p>
          </li>
          <li>
            <p>
              Разъяснение сложных терминов <br /> «на пальцах».
            </p>
          </li>
          <li>
            <p>Оценку возможных рисков.</p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default SurveyInfo
