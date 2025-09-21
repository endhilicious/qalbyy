import React from 'react'
import LandingPageScreen from '#/screens/landingpage/LandingPageScreen'
import { APP_CONFIG } from '#/config/app'
import { redirect } from 'next/navigation'

const Landingpage = () => {
  console.log('APP_CONFIG', APP_CONFIG)
  // If landing page is disabled, redirect to apps
  if (!APP_CONFIG.ENABLE_LANDING_PAGE) {
    redirect('/apps')
  }

  // Route handler for haji-umroh landing page
  // This will show the main landing page for haji and umroh services
  return (
    <LandingPageScreen />
  )
}

export default Landingpage
