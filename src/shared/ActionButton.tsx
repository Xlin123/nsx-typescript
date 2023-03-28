import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types'

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
    className='rounded-md bg-whiteAccent-500  text-redAccent-500 px-10 py-2 hover:bg-redAccent-500 hover:text-whiteAccent-500'
    onClick={() => {setSelectedPage(SelectedPage.ContactUs)}}
    href={`#${SelectedPage.ContactUs}`}
    >
    {children}
    </AnchorLink>
  )
}

export default ActionButton