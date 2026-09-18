# Official store badges

Retrieved 2026-09-18; artwork is unmodified and served locally.

- Apple: https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg
- Apple guidance: https://developer.apple.com/app-store/marketing/guidelines/
- Google: `GetItOnGooglePlay_Badge_Web_color_English.svg`, downloaded through the official asset link in https://partnermarketinghub.withgoogle.com/brands/google-play/google-play/lockups-icons-badges/?folder=86718

Use the black App Store badge first beside Google Play. Preserve artwork proportions and colors. Images display at 48px high on desktop and 40px on mobile; Google Play is at least the same height. Badge pairs have 24px desktop / 20px mobile spacing. The narrowest in-page layouts wrap rather than shrink below 40px. Mobile links have at least 48px touch height.

Hero, feature midpoint and final download areas offer both unchanged destinations from `src/lib/storeLinks.ts`. The mobile-only sticky bar offers both destinations, no automatic redirect or download. It hides when in-page badges, contact or footer intersect the viewport, or when navigation/contact dialog is open. No new motion or tracking is introduced. Missing IntersectionObserver leaves the sticky bar hidden; in-page links still work without JavaScript.
