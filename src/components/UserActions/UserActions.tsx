import cn from 'classnames'
import s from './userActions.module.scss'

import UserActionCard from 'components/UserActionCard/UserActionCard'

const userActionsData = [
  {
    imgUrl: '/assets/images/action1.png',
    smallImgUrl: '/assets/images/small-action1.png',
    text: 'Какие документы мне нужны для продажи или покупки квартиры?',
  },

  {
    imgUrl: '/assets/images/action2.png',
    smallImgUrl: '/assets/images/small-action2.png',
    text: 'Зайду на www.ccccc.ru и узнаю!',
  },

  {
    imgUrl: '/assets/images/action3.png',
    smallImgUrl: '/assets/images/small-action3.png',
    text: 'Отлично! Теперь я знаю, что делать!',
  },
]

const UserActions = () => {
  return (
    <section className={cn(s.userActions)}>
      <div className={cn(s.userActionsWrapper)}>
        <h2 className='sr-only'>
          Всего три шага отделяют вас от покупки или продажи квартиры!
        </h2>

        <ol className={cn(s.userActionsList)}>
          {userActionsData.map(action => (
            <li key={action.text}>
              <div className={cn(s.tabletCards)}>
                <UserActionCard imgUrl={action.imgUrl} text={action.text} />
              </div>
              <div className={cn(s.mobileCards)}>
                <UserActionCard
                  imgUrl={action.smallImgUrl}
                  text={action.text}
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default UserActions
