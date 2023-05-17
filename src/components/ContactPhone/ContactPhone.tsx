import { FC } from 'react'

import cn from 'classnames'
import s from './contactPhone.module.scss'

type SizeType = 'large' | 'small'
type ColorType = 'dark' | 'light'

export interface ContactPhoneProps {
  size?: SizeType
  color?: ColorType
}

const ContactPhone: FC<ContactPhoneProps> = ({
  size = 'large',
  color = 'dark',
}) => {
  return (
    <p className={cn(s.phone)}>
      <span className='sr-only'>телефон:</span>

      <a className={cn(s.phoneLink, s[color], s[size])} href='tel:+74958354711'>
        <span className={cn(s.svgWrapper, s[size])}>
          <svg
            className={cn(s.svg)}
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            width='100%'
            height='auto'
            viewBox='0 0 28 31'
          >
            <path d='M19.647 30.354a3.76 3.76 0 0 1-.8-.18A27.442 27.442 0 0 1 6.17 21.458 27.438 27.438 0 0 1 .347 7.197 3.9 3.9 0 0 1 .649 5.29 3.83 3.83 0 0 1 1.827 3.77L5.416.934A1.596 1.596 0 0 1 6.712.623c.233.05.452.153.641.3.19.146.345.334.456.549l3.383 6.564a1.356 1.356 0 0 1-.26 1.565l-2.305 2.264a15.787 15.787 0 0 0 2.846 5.248 15.68 15.68 0 0 0 4.549 3.925l2.743-1.771a1.313 1.313 0 0 1 1.518.065l5.676 4.71c.196.15.356.345.467.569a1.69 1.69 0 0 1 .029 1.451 1.673 1.673 0 0 1-.445.592l-3.508 2.854a3.856 3.856 0 0 1-1.346.714c-.49.145-1.003.19-1.51.132zM6.404 2.25 2.815 5.086c-.288.22-.516.514-.66.85a2.163 2.163 0 0 0-.164 1.072 25.754 25.754 0 0 0 5.435 13.387 25.816 25.816 0 0 0 11.929 8.2c.352.117.728.142 1.093.073.365-.068.709-.228 1-.465l3.508-2.854-5.481-4.546-2.947 1.909a.808.808 0 0 1-.76.06 16.316 16.316 0 0 1-5.535-4.586 16.268 16.268 0 0 1-3.295-6.396.852.852 0 0 1 .28-.766l2.48-2.438L6.404 2.25z' />
          </svg>
        </span>
        + 7 495 835 47 11
      </a>
    </p>
  )
}

export default ContactPhone
