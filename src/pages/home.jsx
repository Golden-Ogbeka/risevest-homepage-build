import React from 'react';
import AppDownload from '../components/home/app-download';
import AssetClassesSection from '../components/home/asset-classes';
import CommunitySection from '../components/home/community';
import CustomerRating from '../components/home/customer-rating';
import FutureSavingSection from '../components/home/future-saving';
import HeroSection from '../components/home/hero';
import InvestmentStepsSection from '../components/home/invest-steps';
import PartnerSection from '../components/home/partners';
import RegulationSection from '../components/home/regulation';
import AppLayout from '../components/layout';

const Homepage = () => {
  return (
    <AppLayout>
      <HeroSection />
      <PartnerSection />
      <InvestmentStepsSection />
      <AssetClassesSection />
      <FutureSavingSection />
      <RegulationSection />
      <CustomerRating />
      <CommunitySection />
      <AppDownload />
    </AppLayout>
  );
};

export default Homepage;
