import useMediaQuery from '@/hooks/useMediaQuery'
import React from 'react'
import '@/haikei.css'

type Props = {}

const MobileSpacer = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px")
  return (
    <div> 
      <div className={`${!isAboveMediumScreens ? "layer1 spacer": ""}`}/>
      <div className={`${!isAboveMediumScreens ? "layer2 spacer": ""}`}/>       
    </div>
  )
}

export default MobileSpacer