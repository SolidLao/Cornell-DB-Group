# Managing Gallery Data

This file (`gallery.json`) contains photos for the "Life at Cornell DB Group" section.

## File Structure

The file is an array of image objects:

```json
[
  {
    "src": "static/images/life/photo-name.jpg",
    "caption": "Photo Description"
  }
]
```

## Adding a New Photo

1. **Prepare your image:**
   - Format: JPG or PNG
   - Recommended size: 800-1200px wide
   - File size: Under 500KB (optimize for web)
   - Name: descriptive, lowercase, hyphens for spaces
     - Good: `retreat-2027-group.jpg`
     - Bad: `IMG_1234.JPG`

2. **Save to directory:**
   - Location: `static/images/life/`
   - Example path: `static/images/life/retreat-2027.jpg`

3. **Add to JSON:**
   ```json
   {
     "src": "static/images/life/retreat-2027.jpg",
     "caption": "Group Retreat 2027"
   }
   ```

## Fields Explained

- **src** (required): Path to the image file
  - Must start with `static/images/life/`
  - Include the file extension (`.jpg` or `.png`)

- **caption** (required): Description shown on hover and in lightbox
  - Keep concise (2-5 words)
  - Capitalize important words
  - Examples: `"SIGMOD 2027"`, `"Lab Retreat"`, `"Jane's Graduation"`

## Reordering Photos

Photos appear in the order listed in the JSON file:

```json
[
  { "src": "...", "caption": "First photo (top-left)" },
  { "src": "...", "caption": "Second photo" },
  { "src": "...", "caption": "Third photo" }
]
```

## Removing a Photo

1. **Delete from JSON:**
   ```json
   // Before
   [
     { "src": "static/images/life/keep.jpg", "caption": "Keep" },
     { "src": "static/images/life/remove.jpg", "caption": "Remove" },
     { "src": "static/images/life/keep2.jpg", "caption": "Keep" }
   ]

   // After
   [
     { "src": "static/images/life/keep.jpg", "caption": "Keep" },
     { "src": "static/images/life/keep2.jpg", "caption": "Keep" }
   ]
   ```

2. **Optionally delete the image file** from `static/images/life/`

## Photo Categories

Typical photo types for the gallery:

### Conference/Workshop

```json
{
  "src": "static/images/life/sigmod-2027-group.jpg",
  "caption": "SIGMOD 2027 - Group Photo"
}
```

### Retreats

```json
{
  "src": "static/images/life/retreat-2027.jpg",
  "caption": "Annual Retreat 2027"
}
```

### Graduations

```json
{
  "src": "static/images/life/jane-graduation.jpg",
  "caption": "Jane's PhD Defense"
}
```

### Social Events

```json
{
  "src": "static/images/life/holiday-party-2027.jpg",
  "caption": "Holiday Party 2027"
}
```

### Lab Activities

```json
{
  "src": "static/images/life/team-building.jpg",
  "caption": "Team Building Activity"
}
```

## Image Optimization Tips

Before adding images to the gallery:

1. **Resize:** Maximum 1200px width
2. **Compress:** Use tools like:
   - [TinyPNG](https://tinypng.com/)
   - [ImageOptim](https://imageoptim.com/)
   - [Squoosh](https://squoosh.app/)
3. **Target:** Under 500KB per image
4. **Format:**
   - JPG for photos
   - PNG for images with text/graphics

## Lightbox Behavior

- **Click photo:** Opens in full-screen lightbox
- **Navigation:** Arrow keys or on-screen arrows
- **Caption:** Displayed below the image
- **Close:** Click outside, press Esc, or click ×

## Full Example

```json
[
  {
    "src": "static/images/life/retreat-24.jpg",
    "caption": "Retreat 2024"
  },
  {
    "src": "static/images/life/retreat-24-ball.jpg",
    "caption": "Retreat 2024 - Ball Game"
  },
  {
    "src": "static/images/life/saehan-graduation.jpg",
    "caption": "Saehan's Graduation"
  },
  {
    "src": "static/images/life/sigmod-group.jpg",
    "caption": "SIGMOD - Group Photo"
  },
  {
    "src": "static/images/life/sigmod-jiale-immanuel.jpg",
    "caption": "SIGMOD - Jiale & Immanuel"
  }
]
```

## Tips

- **High quality:** Use good resolution photos
- **Variety:** Mix event types (conferences, social, lab work)
- **Recent first:** Put newest photos at the top
- **Consistent style:** Similar aspect ratios look better
- **Test display:** Check how photos look in the grid
- **Privacy:** Get consent before posting photos with people
