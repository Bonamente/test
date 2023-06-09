import cn from 'classnames'
import s from './shopHours.module.scss'

const ShopHours = () => {
  return (
    <div className={cn(s.shopHours)}>
      <h4 className={cn(s.title)}>
        <span className={cn(s.svgWrapper)}>
          <svg
            className={cn(s.svg)}
            width='100%'
            height='auto'
            viewBox='0 0 23 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11.5 0C17.851 0 23 5.372 23 12s-5.149 12-11.5 12S0 18.628 0 12 5.149 0 11.5 0zm0 1.674c-2.625 0-5.142 1.088-6.997 3.024C2.647 6.635 1.604 9.261 1.604 12s1.043 5.365 2.899 7.302c1.855 1.936 4.372 3.024 6.997 3.024 2.624 0 5.142-1.088 6.997-3.024 1.856-1.937 2.899-4.563 2.899-7.302s-1.043-5.365-2.899-7.302c-1.855-1.936-4.373-3.024-6.997-3.024zm-1.07 5.023c.443 0 .802.376.802.838v5.86h5.617c.207.009.404.1.547.257a.857.857 0 0 1 .225.58c0 .217-.08.426-.224.582a.788.788 0 0 1-.548.256H10.43a.786.786 0 0 1-.568-.246.857.857 0 0 1-.235-.592V7.536c0-.463.359-.839.803-.839z'
              fill='#D44B4B'
            />
          </svg>
        </span>
        Режим работы
      </h4>
      <p className={cn(s.weekdays)}>Пн. - Пт. - с 9:00 до 17:00</p>
      <p className={cn(s.weekend)}>Сб. - Вс. - с 9:00 до 17:00</p>
    </div>
  )
}

export default ShopHours
