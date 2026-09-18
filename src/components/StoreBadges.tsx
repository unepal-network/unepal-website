import Image from 'next/image';
import { ANDROID_PLAY_STORE_URL, IOS_APP_STORE_URL } from '@/lib/storeLinks';
import styles from './landing.module.css';

export default function StoreBadges({ compact = false }: { compact?: boolean }) {
  return <div className={`${styles.storeBadges} ${compact ? styles.compactBadges : ''}`} data-store-cta={compact ? undefined : ''}>
    <a href={IOS_APP_STORE_URL} aria-label="Download uNepal on the App Store"><Image src="/assets/store-badges/app-store.svg" alt="Download on the App Store" width={120} height={40} unoptimized /></a>
    <a href={ANDROID_PLAY_STORE_URL} aria-label="Get uNepal on Google Play"><Image src="/assets/store-badges/google-play.svg" alt="Get it on Google Play" width={135} height={40} unoptimized /></a>
  </div>;
}
