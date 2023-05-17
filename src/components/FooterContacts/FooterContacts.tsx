import cn from 'classnames'
import s from './footerContacts.module.scss'
import ContactPhone from 'components/ContactPhone/ContactPhone'
import Address from 'components/Address/Address'
import ShopHours from 'components/ShopHours/ShopHours'

const FooterContacts = () => {
  return (
    <>
      <div className={cn(s.contactsWrapper, s.tablet)}>
        <div className={cn(s.columnLeft)}>
          <div className={cn(s.addressWrapper)}>
            <Address />
          </div>
          <ContactPhone color='light' size='small' />
        </div>
        <div>
          <ShopHours />
        </div>
      </div>

      <div className={cn(s.contactsWrapperMobile)}>
        <div className={cn(s.contactPhoneWrapper)}>
          <ContactPhone color='light' size='small' />
        </div>

        <div className={cn(s.shopHoursWrapper)}>
          <ShopHours />
        </div>

        <div className={cn(s.addressWrapperMobile)}>
          <Address />
        </div>
      </div>
    </>
  )
}

export default FooterContacts
