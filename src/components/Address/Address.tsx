import cn from 'classnames'
import s from './address.module.scss'

const Address = () => {
  return (
    <p className={cn(s.address)}>
      <span className='sr-only'>адрес:</span>
      <span className={cn(s.svgWrapper)}>
        <svg
          className={cn(s.svg)}
          width='100%'
          height='auto'
          viewBox='0 0 19 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.475 0c5.234 0 9.476 4.33 9.476 9.672 0 4.086-2.814 8.54-8.368 13.409a1.68 1.68 0 0 1-1.11.419c-.407 0-.8-.15-1.109-.421l-.367-.326C2.69 18.012 0 13.667 0 9.672 0 4.33 4.242 0 9.475 0zm0 1.488a7.936 7.936 0 0 0-5.669 2.397 8.27 8.27 0 0 0-2.348 5.787c0 3.473 2.476 7.476 7.496 11.96l.363.32a.24.24 0 0 0 .317 0c5.263-4.615 7.859-8.724 7.859-12.28a8.331 8.331 0 0 0-.61-3.132 8.197 8.197 0 0 0-1.738-2.655 8.008 8.008 0 0 0-2.602-1.774 7.876 7.876 0 0 0-3.068-.623zm0 4.464c.967 0 1.894.392 2.577 1.09a3.76 3.76 0 0 1 1.068 2.63 3.76 3.76 0 0 1-1.068 2.63 3.607 3.607 0 0 1-2.577 1.09 3.607 3.607 0 0 1-2.577-1.09 3.76 3.76 0 0 1-1.067-2.63 3.76 3.76 0 0 1 1.067-2.63 3.607 3.607 0 0 1 2.577-1.09zm0 1.488c-.58 0-1.136.235-1.546.653-.41.419-.64.987-.64 1.579 0 .591.23 1.16.64 1.578.41.418.966.653 1.546.653.58 0 1.136-.235 1.546-.653.41-.419.64-.986.64-1.578 0-.592-.23-1.16-.64-1.579a2.164 2.164 0 0 0-1.546-.653z'
            fill='#D44B4B'
          />
        </svg>
      </span>
      г. Москва, Красная площадь д.1
    </p>
  )
}

export default Address
