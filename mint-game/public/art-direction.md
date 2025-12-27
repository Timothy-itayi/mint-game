# Project Mint - Art Direction

> Visual language for a psychological mystery card game about fractured time, split identity, and kitchen work.

---

## Core Visual Identity

**Genre Blend:** Cozy task management + psychological mystery + narrative card game

**Feeling:** Warm but unsettling. Familiar but wrong. Like a memory you can't quite trust.

**Key References:**
- Strange Horticulture (tactile UI, muted hand-drawn aesthetic)
- Coffee Talk (service work + visual novel, lo-fi warmth)
- Papers Please (workspace intimacy, decisions at a desk)
- Inscryption (cards as physical objects, candlelit atmosphere)
- Limbo/INSIDE (atmosphere through lighting, mystery through environment)

---

## Art Style

### Overall Approach

**Hand-drawn 2D with subtle shader effects**

- Muted, natural color palette
- Clean lines with soft textures
- Illustrated rather than pixel art (but not anime)
- Physical, tactile feeling—things have weight
- Atmospheric depth through layering and lighting

### Character Design

| Aspect | Direction |
|--------|-----------|
| Style | Stylized realism, expressive faces |
| Lines | Clean with slight hand-drawn wobble |
| Colors | Natural skin tones, muted clothing |
| Expressions | Subtle but readable |
| Reference | Griftlands, Coffee Talk, Oxenfree |

**Key Characters to Design:**
- Howard (25) - Kitchen hand, protagonist
- Elizabeth (23) - Retail/till, the love interest
- Michael (50s) - Manager, awkward and sad
- Jacob (37) - French-trained cook, quiet observer
- Emma (22) - Kitchen hand, practical
- Todd & Nat (19) - Packers, young and carefree
- Mr. Simmons - Owner, well-dressed, corporate warmth

### Environment Design

**The Kitchen (Primary Space)**

The kitchen is where 90% of the innie gameplay happens. It should feel:
- Contained but not claustrophobic
- Functional—a real working kitchen
- Warm lighting from overhead fixtures
- Stainless steel, wood cutting boards, tile floors
- Slightly worn—this is a workplace, not a showroom

**Seasonal Variations:**

| Season | Lighting | Color Temp | Condition | Details |
|--------|----------|------------|-----------|---------|
| Winter | Pale blue-grey, low | Cool | Most worn | Holiday decorations, condensation on cold storage |
| Autumn | Golden, warm | Amber | Moderate wear | Squash and root veg visible, shorter days |
| Summer | Bright, slightly harsh | Warm/neutral | Newer looking | Doors propped open, fans running, abundance |
| Spring | Fresh, clean | Cool/fresh | Pristine | Everything new, unfamiliar, blank |

**Other Spaces:**
- Front of house (till area) - Where Elizabeth works, glimpsed not played
- Loading dock - Where Howard and Elizabeth meet privately
- Storage/cold room - Liminal space, mystery moments
- Howard's apartment (outie) - Decrepit, cluttered, curtains closed

---

## UI/UX Design

### The Workspace Philosophy

Inspired by Strange Horticulture's tactile desk:
- **Everything exists in the space** - No floating menus
- **Physical interactions** - Drag, flip, place
- **Tools have presence** - Notes, schedules, objects feel real
- **The desk/station is your interface**

### Card Design

Cards are central to gameplay. They should feel:
- **Physical** - Slight shadow, paper texture
- **Hand-held** - Comfortable size, readable
- **Consistent** - Clear hierarchy of information
- **Meaningful** - Each card decision has weight

**Card Types:**
- Task cards (kitchen work)
- Decision cards (narrative choices)
- Note cards (messages between selves)
- Memory cards (fragments, clues)

### Typography

| Use | Style | Notes |
|-----|-------|-------|
| Headers | Hand-written or typewriter | Personal, intimate |
| Body text | Clean sans-serif | Readable, modern |
| Notes | Handwritten script | Howard/Elizabeth's voices |
| UI labels | Minimal, functional | Doesn't compete |

### Color System

**Base Palette:**
```
Background:    #1a1a1a (deep charcoal)
Surface:       #2d2d2d (warm grey)
Primary:       #c4a77d (muted gold/brass)
Secondary:     #7d9c8c (sage green)
Accent:        #a65d57 (dusty rose/rust)
Text:          #e8e4df (warm white)
Text-muted:    #8a8a8a (grey)
```

**Seasonal Overlays:**
```
Winter:  +blue tint, desaturated, cool shadows
Autumn:  +amber warmth, golden highlights
Summer:  +brightness, slightly washed
Spring:  +freshness, pale, clean
```

---

## Animation & Motion

### Principles

- **Subtle over flashy** - Animations support, don't distract
- **Physical weight** - Things move like they have mass
- **Purposeful** - Every animation means something
- **GSAP-powered** - Smooth, professional easing

### Key Animations

| Element | Animation | Feeling |
|---------|-----------|---------|
| Cards | Slight hover lift, smooth draw/place | Tactile, physical |
| Transitions | Fade + subtle slide | Time passing, memory shifting |
| Notes | Paper unfold/fold | Intimate, personal |
| Time shifts | Color grade transition + grain | Disorienting, dreamlike |
| Decisions | Weight/pause before confirming | Gravity, consequence |

### Shader Effects

Using WebGL (PixiJS or VFX-JS) for atmospheric touches:

**Constant Effects:**
- Subtle film grain (memory texture)
- Soft vignette (focus, intimacy)
- Slight chromatic aberration at edges (unease)

**Transitional Effects:**
- Color temperature shifts between seasons
- Blur/focus pulls for memory moments
- Static/glitch at convergence points
- Fade to white/black for time cuts

**Environmental Effects:**
- Steam/heat shimmer in kitchen
- Dust particles in light beams
- Rain on windows (where applicable)
- Condensation on cold surfaces

---

## Atmosphere by Timeline

### INNIE Timeline (Kitchen)

**Winter (Month 12) - Where We Start**
- Intimate, warm despite cold outside
- Lived-in, comfortable
- Relationship established in visual language (shared spaces, notes visible)
- Slight melancholy (year ending)

**Autumn (Month 9)**
- Golden light, harvest feeling
- Still warm but edges of change
- Less settled than Winter

**Summer (Month 6)**
- Bright, energetic
- The kitchen is hot, busy
- Crush energy - everything slightly charged

**Spring (Month 1)**
- Fresh, unfamiliar
- Howard's station looks generic
- The kitchen feels bigger (he doesn't know it yet)

### OUTIE Timeline (Apartment/Outside)

**Visual Contrast:**
- While innie world is warm and lived-in
- Outie world is cold and stagnant
- Same color palette but inverted emphasis
- Shadows where there should be light

**Howard's Apartment:**
- Cluttered with unused potential (art supplies, books)
- Curtains closed, light avoided
- Takeout containers, neglected spaces
- The visual representation of depression

**Elizabeth Encounters (Hallway/Building):**
- Brief splashes of warmth in cold environment
- She brings color/light into frame
- Howard's avoidance shown through framing/distance

---

## Technical Implementation

### Stack

- **Next.js 15** - React framework
- **Tailwind CSS** - Styling system
- **GSAP** - Animation library (already included)
- **PixiJS** (recommended) - WebGL 2D rendering for shaders
- **Custom CSS** - Grain, vignette, color overlays

### Asset Requirements

**Illustrations Needed:**
- Character portraits (multiple expressions)
- Kitchen environment (layered for parallax)
- Card templates
- UI elements (buttons, frames, decorations)
- Note/paper textures
- Seasonal variations of key scenes

**Format Recommendations:**
- SVG for UI elements (scalable)
- PNG for illustrations (transparency)
- WebP for optimized delivery
- Sprite sheets for animated elements

### Performance Considerations

- Lazy load seasonal assets
- Pre-render shader effects where possible
- Keep particle counts reasonable
- Test on mid-range devices

---

## Mood Board Keywords

**Visual:**
- Muted warmth
- Kitchen steam
- Handwritten notes
- Candlelit cards
- Worn wood and steel
- Soft shadows
- Film grain

**Emotional:**
- Intimate but uncertain
- Cozy but wrong
- Familiar but forgotten
- Warm but lonely
- Present but fractured

---

## Reference Links

- [Strange Horticulture Dev Deep Dive](https://www.gamedeveloper.com/design/deep-dive-strange-horticulture)
- [PixiJS - 2D WebGL Renderer](https://pixijs.com/)
- [VFX-JS - Easy WebGL Effects](https://tympanus.net/codrops/2025/01/20/vfx-js-webgl-effects-made-easy/)
- [GSAP Animation Library](https://greensock.com/gsap/)

---

## Next Steps

1. **Character Design** - Start with Howard and Elizabeth
2. **Kitchen Environment** - Base illustration with seasonal variants
3. **Card Template** - Core card design system
4. **UI Kit** - Buttons, frames, interactive elements
5. **Shader Prototypes** - Grain, vignette, color grading tests
6. **Animation Prototypes** - Card interactions, transitions

---

*The art should make players feel like they're handling real objects in a real space—but a space that's slightly off, like a memory you're not sure you trust.*
