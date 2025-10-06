# Contributing to Cornell Database Group Website

Welcome! This guide will help you update the Cornell Database Group website. The website is now modularized with all content stored in easy-to-edit JSON files.

## 📁 File Structure

```
Cornell-DB-Group/
├── data/                       # All website content (EDIT THESE FILES)
│   ├── people.json            # Team members and affiliations
│   ├── news.json              # Latest news and achievements
│   ├── projects.json          # Featured research projects
│   ├── publications.json      # Publications by year
│   └── gallery.json           # Photo gallery images
├── index.html                 # Main website (don't edit directly)
├── static/
│   ├── js/index.js           # JavaScript (handles data loading)
│   ├── css/                  # Styles
│   └── images/               # Image files
│       ├── people/           # Person photos
│       ├── life/             # Gallery/group photos
│       └── logos/            # Logos
└── README.md                 # General information
```

## 🚀 Quick Start Guide

### To Update Website Content:

1. **Navigate to the `data/` directory**
2. **Edit the appropriate JSON file** (see sections below)
3. **Save your changes**
4. **Refresh the website** - changes appear automatically!

No need to edit HTML or JavaScript files. All content is loaded dynamically from the JSON files.

---

## 📝 How to Update Each Section

### 1. Adding/Updating People (`data/people.json`)

#### Add a New Faculty Member

```json
{
  "faculty": [
    {
      "name": "Your Name",
      "image": "static/images/people/yourname.png",
      "website": "https://yourwebsite.com"
    }
  ]
}
```

#### Add a New PhD Student

```json
{
  "phd_students": [
    {
      "name": "Student Name",
      "image": "static/images/people/student.png",
      "website": "https://studentwebsite.com"
    }
  ]
}
```

#### Add a PhD Graduate

```json
{
  "phd_graduates": [
    {
      "name": "Graduate Name",
      "image": "static/images/people/graduate.png",
      "website": "https://graduatewebsite.com",
      "affiliation": "Company Name"
    }
  ]
}
```

#### Add an Undergraduate Student

```json
{
  "undergraduate_students": [
    {
      "name": "Undergrad Name"
    }
  ]
}
```

**📷 Adding Photos:** Place photos in `static/images/people/` with filename matching the image path in JSON.

---

### 2. Adding News Items (`data/news.json`)

Add new items to the **beginning** of the array to show them first:

```json
[
  {
    "text": "Our paper was accepted at <strong>SIGMOD 2027</strong>!"
  },
  {
    "text": "Check out our <a href=\"https://example.com\" target=\"_blank\">new project</a>!"
  }
]
```

**Tips:**
- Use `<strong>` for bold text
- Use `<a href="..." target="_blank">` for links
- HTML is allowed in the text field

---

### 3. Adding Projects (`data/projects.json`)

```json
[
  {
    "title": "Project Name",
    "url": "https://project-website.com",
    "description": "Brief description of the project."
  }
]
```

---

### 4. Adding Publications (`data/publications.json`)

Publications are organized by year. To add a new year or publication:

```json
{
  "2027": [
    {
      "venue": "SIGMOD 2027",
      "title": "Your Paper Title",
      "authors": "Author1, Author2, Author3",
      "award": "Best Paper Award",  // OPTIONAL
      "links": [                     // OPTIONAL
        {
          "type": "Paper",
          "url": "https://doi.org/..."
        },
        {
          "type": "Code",
          "url": "https://github.com/..."
        }
      ]
    }
  ]
}
```

**Link Types:** `Paper`, `Code`, `Data`, `Book`, `Video`, etc.

**Tips:**
- Years are sorted newest first automatically
- First 3 years are expanded by default
- Add `"award": "Award Name"` for special recognition

---

### 5. Adding Gallery Photos (`data/gallery.json`)

```json
[
  {
    "src": "static/images/life/photo-name.jpg",
    "caption": "Photo Description"
  }
]
```

**📷 Adding Photos:** Place photos in `static/images/life/` directory.

---

## 🖼️ Working with Images

### Person Photos

1. **Save the image** to `static/images/people/`
2. **Name format:** `firstname-lastname.png` (or `.jpg`)
3. **Recommended size:**
   - Faculty: 200x200 pixels
   - Students: 100x100 pixels
4. **Update** the corresponding entry in `data/people.json`

### Gallery Photos

1. **Save the image** to `static/images/life/`
2. **Name format:** descriptive name (e.g., `retreat-2027.jpg`)
3. **Recommended:** Optimize for web (< 500KB)
4. **Add entry** to `data/gallery.json`

---

## ✅ Testing Your Changes

### Local Testing

1. **Open `index.html` in a web browser**, or
2. **Run a local server:**
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

3. **Check:**
   - All new content appears correctly
   - Images load properly
   - Links work
   - No console errors (press F12 to check)

---

## 🔧 Common Tasks

### Reordering Items

Simply change the order in the JSON array. Items appear in the order listed.

### Removing Items

Delete the corresponding JSON object from the array. Don't forget to remove trailing commas!

### Optional Fields

Some fields are optional:
- Person `website` - if empty (`""`), name won't be a link
- Publication `links` - can be empty array `[]`
- Publication `award` - omit field if no award

---

## ⚠️ Common Mistakes to Avoid

1. **Missing Commas:** Every item except the last needs a comma
   ```json
   ✅ { "name": "A" },
      { "name": "B" }

   ❌ { "name": "A" }
      { "name": "B" }  // Missing comma!
   ```

2. **Trailing Commas:** Last item should NOT have a comma
   ```json
   ✅ { "name": "A" },
      { "name": "B" }

   ❌ { "name": "A" },
      { "name": "B" },  // Extra comma!
   ```

3. **Quotes in Text:** Use `\"` for quotes inside strings
   ```json
   ✅ "title": "The \"Best\" Paper"
   ❌ "title": "The "Best" Paper"
   ```

4. **JSON Validation:** Use [JSONLint](https://jsonlint.com/) to check your JSON is valid

---

## 📚 Detailed Guides

For more detailed information on each data type, see:
- [`data/README-people.md`](data/README-people.md) - Managing people
- [`data/README-news.md`](data/README-news.md) - Adding news
- [`data/README-projects.md`](data/README-projects.md) - Managing projects
- [`data/README-publications.md`](data/README-publications.md) - Publications
- [`data/README-gallery.md`](data/README-gallery.md) - Photo gallery

---

## 🆘 Getting Help

1. **Validate your JSON:** https://jsonlint.com/
2. **Check browser console** (F12) for error messages
3. **Compare with existing entries** in the JSON files
4. **Contact:** [Group administrators]

---

## 🎯 Best Practices

- **Test locally** before deploying
- **Optimize images** before uploading
- **Keep descriptions concise** and informative
- **Use consistent formatting** (follow existing examples)
- **Backup** before making major changes
- **Validate JSON** after editing

---

Happy updating! 🎉
