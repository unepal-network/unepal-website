import Image from 'next/image';
import Link from 'next/link';
import Contact from './Contact';
import FeatureExplorer from './FeatureExplorer';
import MobileNavigation from './MobileNavigation';
import BrandIcon from './BrandIcon';
import SocialArtwork, { VideoArtwork } from './SocialArtwork';
import StoreBadges from './StoreBadges';
import StickyStoreBar from './StickyStoreBar';
import styles from './landing.module.css';

function Arrow() { return <BrandIcon name="arrow" />; }

function StoreLinks() {
  return <StoreBadges />;
}

function Logo() {
  return <Link href="/" className={styles.logo} aria-label="uNepal home"><Image src="/assets/logo.png" alt="" width={42} height={42} /><span>uNepal<small>Hamro Social Network</small></span></Link>;
}

const navigation = [['The app', '#features'], ['Community', '#experience'], ['Bazaar', '#bazaar'], ['For businesses', '#business']];
const questions = [
  ['What is uNepal?', 'uNepal is a social and community app for Nepalese people in Nepal and around the world. It brings together a home feed, Hamro TV, Bazaar, community discovery, business pages and messaging.'],
  ['Is uNepal available on Android and iPhone?', 'Yes. Use the Google Play or App Store links on this page to download uNepal for your phone.'],
  ['Do I need to live in Nepal to use it?', 'No. uNepal is for Nepalese communities everywhere, whether you are at home, studying overseas or building a life in a new country.'],
  ['What can I find in Bazaar?', 'Bazaar brings listings, requests and businesses together. Explore categories such as housing, jobs, services and items, and use the app to connect with the people behind a listing. Availability depends on your area.'],
  ['How can I get help or report a concern?', 'Use the reporting tools in the app for content or account concerns. You can also contact the team using the form below or email hello@unepal.com. Our community guidelines and safety standards are linked in the footer.'],
];

export default function LandingPage() {
  return <div className={styles.page}>
    <a href="#main-content" className={styles.skipLink}>Skip to content</a>
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Logo />
        <nav className={styles.nav} aria-label="Main navigation">{navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <a href="#download" className={styles.headerCta}>Get the app <Arrow /></a>
        <MobileNavigation links={navigation} />
      </div>
    </header>

    <main id="main-content">
      <section id="home" className={`${styles.hero} ${styles.container}`} aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <span className={styles.heroEyebrow}><BrandIcon name="heart" /> Namaste. You’re in good company.</span>
          <h1 id="hero-title">A little Nepal.<br />A lot of<br /><span className={styles.gradient}>connection.</span></h1>
          <p>The everyday moments. The familiar faces. The conversations that feel like home. Find your people on uNepal.</p>
          <StoreLinks />
          <div className={styles.heroNote}><BrandIcon name="shield" /> Made for Nepalese, wherever life takes you.</div>
        </div>
        <SocialArtwork />
      </section>

      <div className={styles.featureRibbon} aria-label="Explore uNepal"><div className={styles.container}>
        {[['house', 'Share your everyday', '#features'], ['play', 'Watch Hamro TV', '#hamro-tv'], ['bag-shopping', 'Find it in Bazaar', '#bazaar'], ['users', 'Find your community', '#experience']].map(([icon, label, href]) => <a key={href} href={href}><BrandIcon name={icon} />{label}<Arrow /></a>)}
      </div></div>

      <section id="features" className={`${styles.section} ${styles.container}`} aria-labelledby="features-title">
        <div className={styles.sectionHeading}><div><span className={styles.eyebrow}>A place for your everyday</span><h2 id="features-title">So many ways<br />to feel connected.</h2></div><p>Share a little. Discover something new. Find the people and places that make your world feel closer.</p></div>
        <FeatureExplorer />
        <div className={styles.midpointDownload}><div><h3>Make yourself at home.</h3><p>Your people and your everyday, in one app.</p></div><StoreBadges /></div>
      </section>

      <section id="experience" className={styles.communitySection} aria-labelledby="community-title">
        <span id="community" className={styles.legacyAnchor} /><span id="community-spaces" className={styles.legacyAnchor} />
        <div className={`${styles.container} ${styles.communityGrid}`}>
          <div className={styles.communityCopy}><span className={styles.eyebrow}>FAMILIAR CONNECTIONS. NEW POSSIBILITIES.</span><h2 id="community-title">Find your people.<br /><span className={styles.gradient}>Feel at home.</span></h2><p>Across cities, countries and time zones. Stay close to the people, culture and conversations that matter to you.</p><a href="#download" className={styles.textLink}>Find your community <Arrow /></a><div className={styles.communityArtwork}><Image src="/assets/site-2026/community-connections.webp" alt="Illustration of Nepalese friends sharing a conversation in Sydney" fill sizes="(max-width: 760px) 90vw, 45vw" /></div></div>
          <div className={styles.communityValues}>{[['users', 'Find common ground', 'Discover groups and pages around the things you care about.'], ['message', 'Good conversations. Closer connections.', 'Keep in touch with your people through direct messages.'], ['calendar', 'Stay connected to your culture', 'Explore events and updates from your community.'], ['profile', 'Your story. Your space.', 'Share your moments and make your profile your own.']].map(([icon,title,copy]) => <div key={icon} id={icon === 'calendar' ? 'events' : undefined}><span className={styles.tileIcon}><BrandIcon name={icon} /></span><span><strong>{title}</strong><small>{copy}</small></span></div>)}</div>
        </div>
      </section>

      <section id="bazaar" className={`${styles.section} ${styles.container}`} aria-labelledby="bazaar-title">
        <div className={styles.sectionHeading}><div><span className={styles.eyebrow}>LIFE HAPPENS LOCALLY</span><h2 id="bazaar-title">Big possibilities.<br /><em>Right in your Bazaar.</em></h2></div><p>A room to settle into. A new opportunity. Something you need, or something to pass on. Start with your community.</p></div>
        <div className={styles.bazaarGrid}>{[
          ['01', 'house', 'A place to call home', 'Explore rooms, rentals and housing listings.', 'Housing'],
          ['02', 'briefcase', 'Your next opportunity', 'Discover jobs and work opportunities.', 'Jobs'],
          ['03', 'screwdriver-wrench', 'A helping hand nearby', 'Find services and local businesses.', 'Services'],
          ['04', 'bag-shopping', 'A new home for old favourites', 'Buy, sell and discover everyday items.', 'Buy & sell'],
        ].map(([number, icon, title, copy, label]) => <a href="#download" key={number} className={styles.bazaarCard}><span className={styles.categoryNumber}><BrandIcon name={icon} /><Arrow /></span><span className={styles.categoryLabel}>{label}</span><h3>{title}</h3><p>{copy}</p></a>)}</div>
      </section>

      <section id="hamro-tv" className={`${styles.mediaSection} ${styles.container}`} aria-labelledby="media-title"><div className={styles.mediaCopy}><span className={styles.tileIcon}><BrandIcon name="play" /></span><span className={styles.eyebrow}>Press play on Hamro TV</span><h2 id="media-title">Our stories.<br /><span className={styles.gradient}>Your next watch.</span></h2><p>A familiar song. A new perspective. A moment worth sharing. Explore videos and reels from your community.</p><a className={styles.lightButton} href="#download">Discover Hamro TV <Arrow /></a></div><div className={styles.mediaVisual}><VideoArtwork /></div></section>

      <section id="business" className={`${styles.section} ${styles.container} ${styles.businessSection}`} aria-labelledby="business-title"><div className={styles.businessVisual}><Image src="/assets/site-2026/local-discovery.webp" alt="Illustration of Nepalese shoppers meeting a local craft business" fill sizes="(max-width: 760px) 90vw, 45vw" /></div><div><span className={styles.eyebrow}>LOCAL BUSINESSES. COMMUNITY CONNECTIONS.</span><h2 id="business-title">Let your community<br /><em>find your business.</em></h2><p>Give people a place to discover what you do. Bring your business into the conversation with a profile, updates and direct messages.</p><ul className={styles.checkList}><li>Showcase your business and services</li><li>Help nearby customers discover you</li><li>Connect through messages and updates</li></ul><a href="#download" className={styles.textLink}>Explore business features <Arrow /></a></div></section>

      <section className={styles.safetyStrip}><div className={styles.container}><span className={styles.safetyIcon}><BrandIcon name="shield" /></span><div><h2>A community built on respect.</h2><p>Reporting, blocking and privacy controls help you shape your experience.</p></div><Link href="/community">Our community guidelines <Arrow /></Link></div></section>

      <section className={`${styles.section} ${styles.container} ${styles.faqSection}`} aria-labelledby="faq-title"><div><span className={styles.eyebrow}>A FEW THINGS TO KNOW</span><h2 id="faq-title">Curious?<br /><em>Start here.</em></h2><p>Something else on your mind?<br /><a href="#contact" className={styles.textLink}>Talk to our team <Arrow /></a></p></div><div className={styles.questions}>{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

      <section id="download" className={styles.downloadSection} aria-labelledby="download-title"><div className={styles.container}><Image src="/assets/logo.png" alt="" width={64} height={64} /><span className={styles.eyebrow}>YOUR COMMUNITY GOES WITH YOU</span><h2 id="download-title">A little Nepal.<br /><span className={styles.gradient}>Wherever you are.</span></h2><p>Your people, your stories, your everyday. Get uNepal.</p><StoreLinks /><span className={styles.downloadNote}>Available on iPhone and Android.</span></div></section>
      <div className={styles.contactSection}><Contact /></div>
    </main>

    <footer className={styles.footer}><div className={styles.container}><div className={styles.footerTop}><div><Logo /><p>Rooted in Nepal.<br />Connected everywhere.</p></div><div><h3>Explore</h3><a href="#features">The app</a><a href="#bazaar">Bazaar</a><a href="#hamro-tv">Hamro TV</a><a href="#business">For businesses</a></div><div><h3>Here to help</h3><a href="#contact">Contact us</a><a href="mailto:hello@unepal.com">hello@unepal.com</a><Link href="/community">Community guidelines</Link><Link href="/child-safety-standards">Child safety standards</Link></div><div className={styles.footerMessage}><span lang="ne">जहाँ भए पनि,<br />हामी नेपाली।</span><p>Wherever we are, we belong.</p></div></div><div className={styles.footerBottom}><span>© {new Date().getFullYear()} uNepal. All rights reserved.</span><div><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of service</Link><a href="#home">Back to top ↑</a></div></div></div></footer>
    <p className={styles.storeCredits}>Apple, the Apple logo and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.</p>
    <StickyStoreBar />
  </div>;
}
