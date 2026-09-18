import Image from 'next/image';
import BrandIcon from './BrandIcon';
import styles from './landing.module.css';

function Avatar({ tone = 0 }: { tone?: number }) {
  const colors = ['#e6edff', '#ffe2e9', '#e0f0ee', '#eee7ff'];
  return <svg className={styles.avatar} viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="24" fill={colors[tone % 4]} /><path d="M8 48v-7c0-15 32-15 32 0v7" fill={tone % 2 ? '#e94e72' : '#3f6cd4'} />{tone % 2 === 1 && <path d="M12 22C9 2 38 1 37 22v11H12Z" fill="#23304d" />}<ellipse cx="24" cy="23" rx="10" ry="12" fill={tone > 1 ? '#c99276' : '#e9b39a'} /><path d={tone % 2 ? 'M14 20c4-1 9-4 11-10 0 5 5 8 10 9l-3-11H18Z' : 'M14 21v-8l4-6 14 2 4 7-2 6-3-7-14 1Z'} fill="#23304d" /><path d="M20 26q4 4 8 0" fill="none" stroke="#8f4d47" strokeWidth="1.5" strokeLinecap="round" /><circle cx="20" cy="21" r="1" fill="#23304d" /><circle cx="28" cy="21" r="1" fill="#23304d" /></svg>;
}

function StoryRow() {
  return <div className={styles.storyRow}>{['Little joys', 'Our culture', 'Together', 'Outdoors'].map((name,index)=><div key={name}><span><Avatar tone={index} /></span><small>{name}</small></div>)}</div>;
}

export function SocialPost({ priority = false }: { priority?: boolean }) {
  return <div className={styles.socialPost}>
    <div className={styles.postHeader}><Avatar tone={1} /><div><strong>A moment from home</strong><small>Shared with the community</small></div><span aria-hidden="true">•••</span></div>
    <p>Some places always feel like home. <span aria-hidden="true">❤️</span></p>
    <div className={styles.postPhoto}><Image src="/assets/site-2026/social-landscape.webp" alt="A peaceful lakeside view of the Himalayas" fill sizes="(max-width: 900px) 300px, 380px" priority={priority} /></div>
    <div className={styles.postActions} aria-hidden="true"><span><BrandIcon name="heart" />Like</span><span><BrandIcon name="message" />Comment</span><span><BrandIcon name="arrow" />Share</span></div>
  </div>;
}

export function VideoArtwork() {
  return <div className={styles.videoArtwork}><div className={styles.videoMain}><Image src="/assets/site-2026/social-landscape.webp" alt="Himalayan lakeside scenery" fill sizes="(max-width: 900px) 90vw, 420px" /><span className={styles.videoPlay} aria-hidden="true">▷</span><div><small>Hamro TV</small><strong>A little closer to home.</strong></div></div><div className={styles.videoMini}><Image src="/assets/site-2026/social-food.webp" alt="Momo and tea shared around a table" width={150} height={100} /><span><strong>Good food. Familiar stories.</strong><small>Culture, creativity & everyday life</small></span><BrandIcon name="play" /></div></div>;
}

export function DiscoveryArtwork({ bazaar = false }: { bazaar?: boolean }) {
  return <div className={styles.discoveryArtwork}><div className={styles.discoveryTitle}><span className={styles.tileIcon}><BrandIcon name={bazaar ? 'bag-shopping' : 'users'} /></span><div><strong>{bazaar ? 'A little closer. A local find.' : 'There’s a place for you here.'}</strong><small>{bazaar ? 'Discover your Bazaar' : 'Find your community'}</small></div></div><div className={styles.discoveryPhoto}><Image src={bazaar ? '/assets/site-2026/social-food.webp' : '/assets/site-2026/social-landscape.webp'} alt={bazaar ? 'Food and tea on a welcoming table' : 'A peaceful Himalayan lakeside landscape'} fill sizes="(max-width: 900px) 90vw, 440px" /></div><div className={styles.discoveryTags}>{(bazaar ? [['house','Housing'],['briefcase','Jobs'],['bag-shopping','Everyday finds']] : [['users','Shared interests'],['globe','Local connections'],['heart','Our culture']]).map(([icon,label])=><span key={label}><BrandIcon name={icon}/>{label}</span>)}</div></div>;
}

export default function SocialArtwork({ variant = 'hero' }: { variant?: 'hero' | 'feed' | 'video' | 'bazaar' | 'community' }) {
  return <figure className={`${styles.socialArtwork} ${variant === 'hero' ? styles.socialHero : styles.socialFeature}`}>
    {variant === 'hero' ? <><div className={styles.storyCard}><div className={styles.storyGreeting}>A little more of your world <BrandIcon name="heart" /></div><StoryRow /></div><div className={styles.heroPost}><SocialPost /></div><div className={styles.chatCard}><div><BrandIcon name="message" /><strong>Good conversations start here.</strong></div><span>A little catch-up?</span><span>Always time for our people <span aria-hidden="true">❤️</span></span></div><div className={styles.socialSticker}><BrandIcon name="users" /><span>Your people.<br /><strong>Your kind of place.</strong></span></div></> : variant === 'feed' ? <div className={styles.feedArt}><StoryRow /><SocialPost /></div> : variant === 'video' ? <VideoArtwork /> : <DiscoveryArtwork bazaar={variant === 'bazaar'} />}
    <figcaption className={styles.artCaption}>A glimpse of life on uNepal · Illustrative design</figcaption>
  </figure>;
}
