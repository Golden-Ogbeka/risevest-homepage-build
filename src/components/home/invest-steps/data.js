import chooseImage from '../../../assets/images/rise-choose-investment.png';
import investImage from '../../../assets/images/rise-invest-dollars.png';
import goalImage from '../../../assets/images/rise-investment-goals.png';
import rememberImage from '../../../assets/images/rise-remember-investment.png';

export const stepsData = [
  {
    title: 'Invest your money in dollars',
    description:
      'By holding your investments in a stable currency, your money grows more over time and retains its value better.',
    image: investImage,
    mobileTitle: 'Superior Performance',
    mobileDescription:
      'Rise outperforms your other alternatives in two ways. The first is through our expert, algorithm driven investment approach that picks through over 3,000 data sets to find the perfect investment for you.',
    showOnMobile: true,
  },
  {
    title: "Choose what's best for you",
    description:
      'Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place.',
    image: chooseImage,
    mobileTitle: 'Personalization',
    mobileDescription:
      "No two people are the same, and everyone's financial goals are different. Rise understands this, which is why we tailor your journey to financial freedom to fit you.",
    showOnMobile: true,
  },
  {
    title: 'Set goals and reach them',
    description:
      'You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them.',
    image: goalImage,
    mobileTitle: 'Diversification',
    mobileDescription:
      'Rise offers a choice of three asset classes: US equities, US real estate and fixed income assets to provide stability to your investments and protection from market declines. You can pick one asset class or',
    showOnMobile: true,
  },
  {
    title: 'We remember so you dont have to',
    description:
      'Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule. ',
    image: rememberImage,
    showOnMobile: false,
  },
];
