# Job Layout Reference

> Floor plans for all work areas in the grocer. These layouts define the background art and character positioning.

---

## Overview

The workspace is divided into four main areas:
1. **Kitchen** - Where Howard, Emma, Jacob, and Nat work
2. **Office** - Michael's domain (manager)
3. **Packing Area** - Where Todd works, connects kitchen to store
4. **Store Front** - Elizabeth's area (till), customer-facing

---

## 1. Kitchen Layout

**File:** `Kitchen-layout.png`

**Characters:** Howard (dish pit), Emma (prep), Jacob (cooking), Nat (assists)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   ┌───────────┐           (Nat)           ┌─────────────┐   │
│   │   WORK    │             ○             │             │   │
│   │   BENCH   │                           │    OVEN     │   │
│   └───────────┘                           │             │   │
│                                           └─────────────┘   │
│   ┌───────────┐      ┌─────────────┐                        │
│   │  (Emma)   │      │             │      ┌─────────────┐   │
│   │   PREP    │  ○   │   CENTRAL   │      │             │   │
│   └───────────┘      │    BENCH    │      │    STOVE    │   │
│                      │             │      │             │   │
│   ┌───────────┐      │             │      └─────────────┘   │
│   │   CRYO    │      │             │                        │
│   │  FREEZER  │      └─────────────┘      ┌─────────────┐   │
│   └───────────┘                           │    BENCH    │   │
│                                           │             │   │
│   ╔═══════════╗                           └─────────────┘   │
│   ║   SINK/   ║                                             │
│   ║   WASH    ║  ○ (Howard)                                 │
│   ║   BENCH   ║                                     ○       │
│   ╚═══════════╝                                  (Jacob)    │
│                      ┌─────────────┐                        │
│   ┌───────────┐      │             │                        │
│   │DISHWASHER │      │   CENTRAL   │                        │
│   │           │      │    AISLE    │                        │
│   └───────────┘      │             │                        │
│                      │             │      ┌─────────────┐   │
│   ╔═══════════╗      │             │      │   SINK/     │   │
│   ║   SINK/   ║      └─────────────┘      │   MOP       │   │
│   ║   WASH    ║                           │             │   │
│   ║   BENCH   ║                           └─────────────┘   │
│   ╚═══════════╝                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Key Elements:
- **Howard's Station** (highlighted ╔═══╗): Sink/wash bench - his primary location
- **Dishwasher**: Adjacent to Howard's station
- **Central Bench**: Main prep area, open sightlines
- **Stove/Oven**: Jacob's cooking area (right side)
- **Cryo Freezer**: Cold storage, liminal space for mystery moments
- **Mop Sink**: Bottom right, utility area

### Sightlines:
- Howard can see across to cooking area (Jacob)
- Emma works upper left, visible from Howard's position
- Central aisle provides movement corridor

---

## 2. Office Layout

**File:** `Office-layout.png`

**Characters:** Michael (manager)

```
┌─────────────────────────────────────────┐
│                                         │
│   ┌─────────────┬─────────┐             │
│   │             │COMPUTER │             │
│   │   DESK      │         │             │
│   │      ○      └─────────┘             │
│   │  (Michael)                          │
│   └─────────────┘                       │
│                                         │
│                                         │
│            O F F I C E                  │
│                                         │
│           (open space)                  │
│                                         │
│                                         │
│                                         │
│   ┌─────────────┐                       │
│   │             │                       │
│   │  CUPBOARD   │                       │
│   │             │                       │
│   └─────────────┘                       │
│                                         │
│   ┌─────────────┐                       │
│   │             │                       │
│   │   LOCKERS   │                       │
│   │             │                       │
│   │             │                       │
│   └─────────────┘                       │
│                                         │
│          ┌─────────┐                    │
│          │  DOOR   │                    │
│          └─────────┘                    │
└─────────────────────────────────────────┘
```

### Key Elements:
- **Michael's Desk**: Top of room with computer - where he vapes and scrolls
- **Open Office Space**: Mostly empty, emphasizes Michael's isolation
- **Cupboard**: Storage
- **Lockers**: Staff lockers - where notes can be hidden/found
- **Door**: Exit to kitchen/packing area

### Narrative Function:
- Glass window looking into kitchen (not shown but implied)
- Michael visible but separate from kitchen activity
- Lockers are important for note-leaving mechanic

---

## 3. Packing Area Layout

**File:** `Packing Area- layout .png`

**Characters:** Todd (packer), Nat sometimes helps here

```
┌───────────────────────────────────────────────────────────────────────┐
│                                                                       │
│   ┌─────────────────┐                              ┌────────┐         │
│   │   CONTAINERS    │ (for packing food:           │ WASHER │         │
│   │   FOR PACKING   │  salads, fried rice, etc)    └────────┘         │
│   └─────────────────┘                                                 │
│                                                    ┌────────┐         │
│                                                    │ DRYER  │         │
│   ┌─────────────┐  ┌───────────┐  ┌─────────────┐  └────────┘         │
│   │             │  │ MANAGER'S │  │             │                     │
│   │             │  │  OFFICE   │  │   FREEZER   │                     │
│   │             │  └───────────┘  │             │                     │
│   │   KITCHEN   │                 │ ○ Packing   │  ┌───────────────┐  │
│   │             │   PACKING AREA  │   happens   │  │    FREEZER    │  │
│   │             │                 │   on top    │  │    FRIDGE     │  │
│   │             │      ○          │  (as bench) │  │  DOUBLE DOOR  │  │
│   │             │    (Todd)       │             │  │               │  │
│   └─────────────┘                 └─────────────┘  └───────────────┘  │
│                                                                       │
│   ┌─────────────────────┐  ┌─────┐  ┌─────────────────────────────┐  │
│   │    CONTAINERS &     │  │ VAC │  │      WORK BENCH FOR         │  │
│   │       BAGS          │  │MACH │  │         PACKING             │  │
│   └─────────────────────┘  └─────┘  └─────────────────────────────┘  │
│                                                                       │
└───────────────────────────────────────────────────────────────────────┘
```

### Key Elements:
- **Kitchen Access**: Left side connects to main kitchen
- **Manager's Office**: Adjacent, Michael can observe
- **Freezer (as bench)**: Packing happens on top of freezer surface
- **Freezer Fridge Double Door**: Large cold storage
- **Vac Machine**: Vacuum sealing for packed goods
- **Containers & Bags**: Packing supplies storage
- **Work Bench**: Main packing surface
- **Washer/Dryer**: Utility area (right side)

### Narrative Function:
- Todd & Nat's will-they-won't-they plays out here
- Transition zone between kitchen and store front
- Packed goods move from here to store displays

---

## 4. Store Front Layout

**File:** `Store-front-layout.png`

**Characters:** Elizabeth (till)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                        ┌─────────────────────────┐                      │
│                        │       FREEZERS          │                      │
│                        └─────────────────────────┘                      │
│                                                                         │
│   ┌─────┐  ┌─────────────────────────┐           ┌───────────────────┐  │
│   │     │  │ ═══════════════════════ │           │   SALAD FRIDGE    │  │
│   │  F  │  │ ═══════════════════════ │           ├───────────────────┤  │
│   │  R  │  │ ═══════════════════════ │  ┌─────┐  │  CHICKEN WARMER   │  │
│   │  I  │  │        AISLES           │  │COOK │  ├───────────────────┤  │
│   │  D  │  │ ═══════════════════════ │  │IES/ │  │    DELI/CHEESE    │  │
│   │  G  │  ├─────────────────────────┤  │SNACK│  │                   │  │
│   │  E  │  │         │         │     │  └─────┘  └───────────────────┘  │
│   │  S  │  │ PRODUCE │ PRODUCE │     │                                  │
│   │     │  │         │         │     │                        ○         │
│   └─────┘  └─────────────────────────┘                    Elizabeth     │
│                                                           (TILL)        │
│                                        ┌─────────┐   ═══════════════    │
│                                        │  WINES  │   ═══════════════    │
│                                        │    ◇    │      (counter)       │
│                                        └─────────┘                      │
│                                                                         │
│                              ┌──────────────┐                           │
│                              │   ENTRANCE   │                           │
│                              │ STORE FRONT  │                           │
│                              └──────────────┘                           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Key Elements:
- **Freezers**: Top wall, large frozen goods section
- **Fridges**: Left wall, refrigerated items
- **Aisles**: Central shopping area with shelves
- **Produce**: Fresh fruits/vegetables section
- **Cookies/Snacks**: Center displays
- **Salad Fridge**: Right side - where kitchen-made salads go
- **Chicken Warmer**: Hot prepared foods
- **Deli/Cheese**: Specialty items
- **Elizabeth's Till**: Right side, customer checkout
- **Wines**: Diamond display near entrance
- **Entrance**: Bottom, customer entry point

### Narrative Function:
- **Elizabeth's Position**: Sightline toward back (where pass window would be)
- **Salad Fridge**: Howard's excuse to come to front ("restocking")
- Customer flow from entrance → aisles → till
- Boutique grocer aesthetic - quality over quantity

---

## Complete Floor Plan (All Areas Connected)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                              STORE FRONT                                    │
│     ┌─────────────────────────────────────────────────────────────────┐     │
│     │  Freezers | Aisles | Produce | Cookies | Salad/Deli | Elizabeth │     │
│     │                                                      (Till)     │     │
│     └─────────────────────────────────────┬───────────────────────────┘     │
│                                           │                                 │
│                                     [PASS WINDOW]                           │
│                                           │                                 │
│     ┌─────────────────────────────────────┴───────────────────────────┐     │
│     │                        PACKING AREA                             │     │
│     │  Containers | Freezer/Bench | Work Bench | Washer/Dryer        │     │
│     │                      (Todd)                                     │     │
│     └───────────────┬─────────────────────────────────────────────────┘     │
│                     │                                                       │
│     ┌───────────────┴───────────────┐    ┌─────────────────────────────┐   │
│     │           KITCHEN             │    │          OFFICE             │   │
│     │  Howard | Emma | Jacob | Nat  │    │         (Michael)           │   │
│     │  Dish Pit | Prep | Cooking    │◄──►│  Desk | Lockers | Cupboard  │   │
│     │                               │    │                             │   │
│     └───────────────────────────────┘    └─────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Key Connections:
- **Pass Window**: Links packing area to store front (Howard ↔ Elizabeth sightline)
- **Kitchen ↔ Packing**: Food flows from cooking to packing
- **Office ↔ Kitchen**: Michael can observe but rarely participates
- **Packing ↔ Store Front**: Packed goods go to display fridges

---

## Background Art Requirements

### Per Area:

| Area | Primary View | Alt Views | Characters Visible |
|------|--------------|-----------|-------------------|
| Kitchen | Howard's POV from dish pit | Wide shot | Emma, Jacob, Nat, (Michael through window) |
| Office | From kitchen looking in | Michael's POV | Michael |
| Packing | Todd's station | Wide shot | Todd, (Nat when helping) |
| Store Front | From pass window | Elizabeth's POV | Elizabeth, customers |

### Seasonal Variations Needed:
- Each area needs Winter/Autumn/Summer/Spring variants
- Lighting changes (winter = cool, summer = warm)
- Seasonal decorations (holiday in winter, etc.)
- Wear/freshness levels (Winter = worn, Spring = new)

---

*These layouts define character positions, movement paths, and sightlines. The pass window between packing and store front is the critical connection point for the Howard/Elizabeth relationship.*
