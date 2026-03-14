# MASH-IT Rebrand Design

## Context

The game is currently called "MASH" (Mansion, Apartment, Shack, House). The user wants to rebrand it to **MASH-IT** by extending the acronym to include **Island** and **Treehouse** — two fun housing types that complement the existing spectrum from dream home (Mansion) to rough (Shack).

**MASH-IT** = Mansion, Apartment, Shack, House, Island, Treehouse

## Goals

1. Rename the game title from "MASH" to "MASH-IT"
2. Add Island and Treehouse to the default Home category (4 → 6 options)
3. Add a Home random pool so the Home category can be randomized while always guaranteeing the 6 core MASH-IT options
4. Enable Home category randomization (currently skipped)

## Design

### 1. Title Rename

**File:** `src/components/GameModeSelector.tsx`

- Change the `<h1>` title from "MASH" to "MASH-IT" (line 10)
- Update button description strings that say "classic MASH categories" to "classic MASH-IT categories" (lines 28, 36)
- Check `index.html` for any `<title>` tag referencing "MASH" and update it too

### 2. Default Home Category Update

**File:** `src/constants/defaultCategories.ts` (lines 5-12)

Add two new options to the Home category:
```
{ id: 'home-5', text: 'Island', eliminated: false }
{ id: 'home-6', text: 'Treehouse', eliminated: false }
```

### 3. Home Random Pool

**File:** `src/constants/randomChoicePools.ts`

Add a `'Home'` entry to `RANDOM_CHOICE_POOLS` with ~30+ housing type options (e.g., Penthouse, Castle, RV, Houseboat, Cabin, Condo, Duplex, Loft, Studio, Farmhouse, etc.). Also update the comment on line 1 that says "except Home which is always fixed" since Home is no longer fixed.

Update `getRandomChoices()` to support guaranteed options. New signature:
```typescript
export function getRandomChoices(
  categoryName: string,
  guaranteedOptions?: string[]
): string[] | null
```

**Behavior when `guaranteedOptions` is provided:**
1. Start with the guaranteed options (e.g., the 6 MASH-IT options)
2. Filter the pool to exclude any guaranteed options (avoid duplicates)
3. Pick random extras from the filtered pool to bring total to `guaranteedOptions.length + 2` (e.g., 6 + 2 = 8 for Home)
4. Return the combined array (shuffled)

**Behavior when `guaranteedOptions` is not provided (existing categories):**
- No change — continue returning 4 random options from the pool as before

Add a constant for the guaranteed options:
```typescript
export const MASHIT_HOME_OPTIONS = ['Mansion', 'Apartment', 'Shack', 'House', 'Island', 'Treehouse'];
```

### 4. Enable Home Randomization

**File:** `src/components/CategoryEditor.tsx` (lines 19-21)

Remove the `if (category.name === 'Home') { return category; }` early return. Replace with:

```typescript
const guaranteedOptions = category.name === 'Home' ? MASHIT_HOME_OPTIONS : undefined;
const randomChoices = getRandomChoices(category.name, guaranteedOptions);
```

The Randomize button is currently only visible in `default-only` mode. This stays the same — no change to button visibility.

## Files Changed

| File | Change |
|------|--------|
| `src/components/GameModeSelector.tsx` | Title "MASH" → "MASH-IT", update description strings |
| `src/constants/defaultCategories.ts` | Add Island + Treehouse to Home |
| `src/constants/randomChoicePools.ts` | Add Home pool, update `getRandomChoices()`, add `MASHIT_HOME_OPTIONS` |
| `src/components/CategoryEditor.tsx` | Remove Home skip, pass guaranteed options |
| `index.html` | Update page title if it references "MASH" |

## Verification

1. Run `npm run dev` and verify the title shows "MASH-IT"
2. Verify button descriptions say "classic MASH-IT categories"
3. Verify browser tab title says "MASH-IT"
4. Start a Default Only game → Home category should show 6 options (M, A, S, H, I, T)
5. Click Randomize → Home category should show the 6 MASH-IT options plus 2 extras from the pool (8 total)
6. Click Randomize again → MASH-IT options stay, extras change
7. Start a Default + Custom game → Home should show 6 options, be editable
8. Play through the full elimination → verify the game works with 6+ Home options
9. Start a Custom Only game → verify no impact (user creates their own categories)
