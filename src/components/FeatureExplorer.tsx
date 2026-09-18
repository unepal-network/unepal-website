'use client';

import { useState } from 'react';
import BrandIcon from './BrandIcon';
import SocialArtwork from './SocialArtwork';
import styles from './landing.module.css';

const features = [
  { name: 'Home feed', icon: 'house', title: 'Everyday moments. Familiar connections.', description: 'Share a thought, a photo or a story. Keep up with the people you follow and discover what your community is talking about.', image: 'home_screen.png', detail: 'Posts · Photos · Stories', color: 'rose' },
  { name: 'Hamro TV', icon: 'play', title: 'A little closer to the stories you love.', description: 'Explore videos, reels and moments from Nepalese creators. From everyday life to culture and entertainment, find your next watch.', image: 'hamrotv_screen.png', detail: 'Videos · Reels · Creators', color: 'blue' },
  { name: 'Bazaar', icon: 'bag-shopping', title: 'Your next find could be just around the corner.', description: 'Browse local listings, share what you are looking for and discover businesses. Rooms, jobs, services and everyday finds, together in Bazaar.', image: 'bazaar_screen.png', detail: 'Listings · Requests · Businesses', color: 'sand' },
  { name: 'Community', icon: 'users', title: 'Find the people who share your world.', description: 'Explore groups and pages around your interests, your location and the things that bring Nepalese communities together.', image: 'community_screen.png', detail: 'Groups · Pages · Local discovery', color: 'blue' },
];

export default function FeatureExplorer() {
  const [selected, setSelected] = useState(0);
  const feature = features[selected];
  return (
    <div className={styles.explorer}>
      <div className={styles.featureTabs} role="group" aria-label="Choose an app feature">
        {features.map((item, index) => (
          <button key={item.name} type="button" aria-pressed={selected === index} aria-controls="feature-preview" onClick={() => setSelected(index)}>
            <BrandIcon name={item.icon} />{item.name}
          </button>
        ))}
      </div>
      <div id="feature-preview" className={styles.featurePanel} data-tone={feature.color}>
        <div className={styles.featureCopy} aria-live="polite" aria-atomic="true">
          <span className={styles.eyebrow}>{feature.name}</span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
          <span className={styles.featureDetail}>{feature.detail}</span>
          <a href="#download" className={styles.textLink}>Explore it in uNepal <BrandIcon name="arrow" /></a>
        </div>
        <SocialArtwork variant={(['feed', 'video', 'bazaar', 'community'] as const)[selected]} />
      </div>
    </div>
  );
}
