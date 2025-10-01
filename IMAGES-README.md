# Image Organization Guide

## Directory Structure

```
Cornell-DB-Group/static/images/
├── logos/                      # University and institutional logos
│   ├── cornell-university.png  # Main Cornell logo (used in hero)
│   └── cornell-logo.png        # Alternate Cornell logo
└── people/                     # Person photos
    ├── immanuel-trummer.png    # ✓ Provided
    ├── jiale.jpg               # ✓ Provided
    ├── sainyam-galhotra.png    # Placeholder
    ├── anna-mazhar.png          # Placeholder
    ├── eric-enouen.png          # Placeholder
    ├── ning-wang.png            # Placeholder
    ├── saehan-jo.png            # Placeholder
    ├── tharushi-jayasekara.png  # Placeholder
    ├── victor-giannakouris.png  # Placeholder
    └── wenzhi-li.png            # Placeholder
```

## Current Status

### ✓ Available Images
- `people/immanuel-trummer.png` - Immanuel Trummer (Faculty)
- `people/jiale.jpg` - Jiale Lao (PhD Student)
- `logos/cornell-university.png` - Cornell University logo

### 📋 Needed Images
To complete the website, please add images for:
- Sainyam Galhotra (Faculty)
- Anna Mazhar (PhD Student)
- Eric Enouen (PhD Student)
- Ning Wang (PhD Student)
- Saehan Jo (PhD Student)
- Tharushi Jayasekara (PhD Student)
- Victor Giannakouris (PhD Student)
- Wenzhi Li (PhD Student)

## Image Specifications

### Faculty Photos
- **Size**: 150x150 pixels (will be displayed in circle)
- **Format**: PNG, JPG, or JPEG
- **Quality**: High resolution recommended
- **Background**: Any (will be cropped to circle)

### PhD Student Photos
- **Size**: 80x80 pixels (will be displayed in circle)
- **Format**: PNG, JPG, or JPEG
- **Quality**: Medium to high resolution
- **Background**: Any (will be cropped to circle)

### Logo Images
- **Format**: PNG (with transparency preferred)
- **Size**: Vector or high resolution
- **Usage**: Cornell logo appears in hero section (inverted to white)

## Adding New Images

1. Place person photos in `static/images/people/`
2. Use lowercase names with hyphens: `firstname-lastname.png`
3. Place logos in `static/images/logos/`
4. Images with errors will gracefully hide (onerror handler)

## Image Fallback

All images have an `onerror` handler that hides them if they can't be loaded. This means:
- The website works even without all images
- Missing images won't show broken image icons
- Users will see name and role even without photos

## Notes

- Images are automatically styled with circular borders in Cornell red (#b31b1b)
- Hover effects apply to all person cards
- Responsive design adjusts image sizes on mobile devices
