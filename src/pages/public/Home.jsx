import React from 'react'
import HomeBanner from '../../components/common/HomeBanner'
import WhyChooseUs from '../../components/common/WhyChooseUs'
import Academics from '../../components/common/Academics'
import Stats from '../../components/common/Stats'
import Events from '../../components/common/Events'
import CTA from '../../components/common/CTA'
  
export default function Home() {
  return (
    <div>
      <HomeBanner />
      <WhyChooseUs />
      <Academics />
      <Stats />
      <Events />
      <CTA />
    </div>
  );
}
