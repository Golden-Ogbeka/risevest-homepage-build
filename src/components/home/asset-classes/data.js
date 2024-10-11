import incomeImage from '../../../assets/images/rise-fixed-income.png';
import estateImage from '../../../assets/images/rise-real-estate.png';
import stocksImage from '../../../assets/images/rise-stocks.png';

export const assetClasses = [
  {
    title: 'Stocks',
    image: stocksImage,
    description:
      'We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.',
    returns: 14,
    risk: 'Medium',
    headerColor: '#FFF4F0',
  },
  {
    title: 'Real Estate',
    image: estateImage,
    description:
      'Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.',
    returns: 14,
    risk: 'Medium',
    headerColor: '#F6F2FF',
  },
  {
    title: 'Fixed Income',
    image: incomeImage,
    description:
      'A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.',
    returns: 14,
    risk: 'Medium',
    headerColor: '#ECFEFE',
  },
];
