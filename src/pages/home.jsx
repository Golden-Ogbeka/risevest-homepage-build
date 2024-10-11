import React from 'react';
import AppDownload from '../components/home/app-download';
import AssetClassesSection from '../components/home/asset-classes';
import CommunitySection from '../components/home/community';
import CustomerRating from '../components/home/customer-rating';
import FutureSavingSection from '../components/home/future-saving';
import RegulationSection from '../components/home/regulation';
import AppLayout from '../components/layout';

const Homepage = () => {
  return (
    <AppLayout>
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
