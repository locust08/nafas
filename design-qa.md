# Explore More Design QA

- Source visual truth: Figma prototype frame `17668:1317` and the user-provided Chrome reference screenshot in this task.
- Implementation: `http://localhost:3002/`.
- Implementation screenshot: Codex in-app browser captures attached to this task turn.
- State: Home page hero, video playing, Explore More control visible at the hero boundary.
- Density normalization: CSS viewport measurements were used for geometry checks; browser screenshots were reviewed at their native capture density.

## Viewports

| CSS viewport | Explore diameter | Curve depth | Circle center offset from hero edge |
| --- | ---: | ---: | ---: |
| 390 × 844 | 140 px | 70 px | 0 px |
| 787 × 584 | 140 px | 70 px | 0 px |
| 1920 × 1080 | 180 px | 90 px | 0 px |

## Full-view comparison evidence

The updated hero preserves the existing layout while restoring the transparent video-backed center shown in the reference. The white page edge uses the same radius as the Explore More control, so the cutout remains tangent to the circle as it scales.

## Focused region comparison evidence

- Typography: one circular text path contains two identical `EXPLORE MORE` phrases with the original separator and letter spacing.
- Spacing and layout: the link diameter, curve depth, and video extension share one responsive radius token.
- Colors and visual tokens: the link background is transparent and the circular copy remains white over the hero video.
- Image quality: the existing hero video remains visible through the circular cutout without an added color layer.
- Copy and content: both phrases are identical and the center arrow is absent.
- Responsiveness: the control scales from 140 px to 180 px; measured center alignment stays at 0 px for all tested viewports.
- Runtime: no browser console errors were reported during the responsive checks.

## Comparison history

- Earlier P1: a solid green disk replaced the transparent reference treatment. Fixed by restoring a transparent link background.
- Earlier P1: two independently stretched text paths produced inconsistent phrase widths. Fixed by restoring the original single repeated circular text path.
- Earlier P2: fixed offsets allowed the white curve and circle to drift apart across widths. Fixed by deriving both from the same responsive radius.
- Post-fix evidence: browser measurements at 390 px, 787 px, and 1920 px show matching radii and exact center alignment.

## Findings

No actionable P0, P1, or P2 mismatch remains within the annotated Explore More component scope.

## Follow-up polish

No P3 change is required for this correction.

## Expertise cards QA

- Source visual truth: Figma prototype frame `17668:1317` and the user-provided desktop reference screenshot in this task.
- Implementation evidence: Codex in-app browser captures at 1920 × 1080, 1130 × 764, and 390 × 844.
- Desktop frame: four equal slanted cards, 550px tall, with 330px imagery, 76px overlapping icons, 24px headings, and 18px body copy.
- Annotated frame: four equal slanted cards, 460px tall, with complete copy and no clipping.
- Mobile frame: one 326.7px column; all four cards render at 387.8px natural height without overflow.
- Image fidelity: the supplied ship, NAFAS building, truck fleet, and farmer field assets match the Figma subjects and crops.
- Copy fidelity: restored the Figma wording for the first and second cards, including “dan Industri”.
- Layout rhythm: the section now has the Figma-sized white gap above the cards, matching card radii, image fade, icon overlap, and bottom spacing.
- Browser runtime: no console errors were reported during responsive verification.
- Build gate: `npm run check` passed lint, TypeScript, and the production build.

### Expertise comparison history

- Earlier P1: desktop cards measured about 411px tall against the roughly 540px Figma frames. Fixed with responsive 460–550px card heights.
- Earlier P1: the image area, icon, headings, and body copy remained at compact sizes on wide screens. Fixed with measured responsive dimensions and type scales.
- Earlier P2: equal horizontal copy padding caused the first and fourth headings to wrap to three lines. Fixed with the Figma-aligned asymmetric copy inset; both now wrap to two lines.
- Earlier P2: compact desktop copy extended beyond the 410px card frame. Fixed by increasing the 1130px frame to 460px and confirming zero overflow on all four cards.
- Post-fix evidence: all desktop and mobile cards render without text overflow; the expected heading line counts match the reference.

### Expertise angle and alignment correction

- At 939 × 764, every card keeps the same `skewX(-7deg)` transform before and after entering the viewport; the section no longer animates into straight boxes.
- The two-column layout uses identical 480px card heights, 32px left copy insets, and 28px right copy insets.
- All four headings begin 304px from the card top and reserve the same two-line block height.
- All four body paragraphs begin 358.1px from the card top and remain within the card frame.
- The image layer is counter-skewed so photographs remain visually straight inside the permanent angled frames.

## Company overview farmer composition QA

- Source visual truth: Figma prototype frame `17668:1317` and the user-provided desktop snapshot showing the layered farmer image.
- Implementation: `http://localhost:3002/?qa=motion#gambaran-syarikat`.
- Comparison viewport: 1920 × 1080 CSS pixels at device pixel ratio 1; mobile verification at 665 × 584.
- State: the company overview is in view and all three image layers have completed their scroll reveal.

### Full-view and focused evidence

- Layout: the main frame is 51% of the media column and begins at 34.7%; the faded frame is 70% and begins at 25%. These measurements reproduce the Figma foreground and outer-frame edges.
- Framing: each layer keeps the permanent `skewX(-7deg)` silhouette while its inner image uses a counter-skew, so the photograph stays visually upright.
- Image treatment: two translucent, softly blurred copies sit behind the sharp foreground image with matching rounded corners and a white inner border.
- Crop: all layers use the same source asset and focal position, keeping the farmer and vegetables aligned as the layers reveal.
- Motion: the left ghost, right ghost, and foreground enter one by one with diagonal translation, blur reduction, and staggered delays of 0.06s, 0.20s, and 0.38s.
- Mobile: the foreground remains a tall 68% portrait frame inside 74% faded layers; horizontal overflow is clipped and the image group stays centered.
- Reduced motion: all layers render immediately in their final positions when the user prefers reduced motion.
- Runtime: the final browser verification reported no console errors.
- Build gate: `npm run check` passed ESLint, TypeScript, and the Next.js production build after the final adjustment.

### Comparison history

- Earlier P1: the frame wrapper and image shared one skew, which distorted the photograph and made the composition look wider than the Figma reference. Fixed with separate skewed wrappers and counter-skewed inner images.
- Earlier P1: the foreground and faded frames were oversized at the desktop reference width. Fixed by measuring the Figma edges and refining the final widths and offsets.
- Earlier P2: mobile inherited desktop proportions and could expose horizontal overflow. Fixed with mobile-specific portrait dimensions and clipped page overflow.
- Post-fix evidence: side-by-side 1920 × 1080 captures align the foreground top edge with the reference, retain both faded overlays, and preserve the staggered reveal.

No actionable P0, P1, or P2 mismatch remains within the annotated farmer composition scope.

## About page Figma refinement QA

- Source visual truth: Figma About frame `17668:1361`, the extracted full frame `17668:1497`, the saved detail references in `docs/design-references/nafas/detail`, and the 15 user annotations supplied in this task.
- Implementation: `http://localhost:3002/tentang-kami`.
- Verified viewports: 1440 × 1000, 1092 × 764, and 390 × 844 CSS pixels.
- Hero: uses the supplied looping video with the Figma burgundy treatment; the annotated circular “Terokai” control is removed.
- Company overview: green section label, solid thumbs-up experience mark, Figma image treatment, and matching information strip.
- Values: all four cards use the corresponding Figma photography and icon treatments.
- Purpose: exact label and copy, a wide purpose panel, and pointed Visi and Misi frames with the reference proportions.
- Leadership: the CEO portrait panel and all five department cards use the original Figma assets and responsive framing.
- Corporate facts: checkpoint icons match the content, scroll progress remains animated, and the track terminates at the centre of the final checkpoint with no trailing line.
- Locations: copy, spacing, pale-green section surface, and the supplied Malaysia map asset match the reference composition.
- Responsiveness: the 1092 px and 390 px checks reported no horizontal overflow; purpose, leadership, facts, and map content remain within their frames.
- Runtime and build: the final browser console reported no warnings or errors, and `npm run check` passed ESLint, TypeScript, and the Next.js production build.

No actionable P0, P1, or P2 mismatch remains within the 15 annotated About page items.

## Live Dev Mode inspection - 6 October 2026

- Source: connected ava-figma account, file XpyXrU9sMooNSWMtI4wfFj, V3.1 page 17668:1130, About frame 17668:1497.
- Retrieved design context and screenshot directly from the About frame.
- Corrected previous desktop caps: at 1920 px the hero is 1059 px, four value cards are 539 px, CEO panel is 387 px, and purpose frames are 475 px.
- Downloaded eight original Figma SVG assets and applied local value badges and corporate checkpoint icons at their source dimensions.
- Corrected primary, heading and body colors to #7CAC2F, #1D1D1D and #595959.
- Applied measured containers, spacing, typography, content insets and map scaling while preserving the existing video and scroll animation behavior.
- 1920 x 1080 and 390 x 844 checks reported zero horizontal overflow; all visible Figma SVGs loaded and no browser errors were reported.
- Scope: current About page. Other page frames were inventoried but were not changed in this pass.

final result: passed

## About imagery refinement - 6 October 2026
Replaced Visi/Misi backgrounds, rounded diagonal flag assets, CEO and all five department photos with original Figma exports. Preserved motion implementation and approved corporate facts. TypeScript and lint passed; responsive image loading and zero horizontal overflow checked. Figma hero node exports an empty video slot; current video retained pending original video file.

Design source policy: use only Figma page V3.1 (17668:1130), matching source sizing/scaling, while preserving accepted animations.
