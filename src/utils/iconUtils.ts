import { FaRunning, FaAppleAlt, FaBed, FaBrain, FaUsers, FaSmile, FaTools, FaQuestion } from 'react-icons/fa';
import { IconType } from 'react-icons';

const iconMap: { [key: string]: IconType } = {
  'nutrition': FaAppleAlt,
  'exercise': FaRunning,
  'sleep': FaBed,
  'mindset': FaBrain,
  'social-connections': FaUsers,
  'stress-management': FaSmile,
  'expert-services': FaTools,
};

/**
 * Get the icon for a given pillar.
 * 
 * @param pillar Pillar to get the icon for
 * @returns Icon for the given pillar, or a question mark icon if the pillar is not recognized
 */
export const getIconByPillar = (pillar: string): IconType => {
  const icon: IconType = iconMap[pillar.toLowerCase()] || FaQuestion;
  if (icon === FaQuestion) {
    console.error(`No icon found for pillar: ${pillar}`);
    console.error(`Available pillars: ${Object.keys(iconMap).join(', ')}`);
  }
  return icon;
};