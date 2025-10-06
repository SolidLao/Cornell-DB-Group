# Managing Projects Data

This file (`projects.json`) contains featured research projects.

## File Structure

The file is an array of project objects:

```json
[
  {
    "title": "Project Name",
    "url": "https://project-website.com",
    "description": "Brief description."
  }
]
```

## Adding a New Project

```json
{
  "title": "MyProject",
  "url": "https://myproject.com",
  "description": "A revolutionary approach to data processing."
}
```

**Fields:**
- `title` (required): Project name
- `url` (required): Project website or repository URL
- `description` (required): One-sentence description

## Field Guidelines

### Title

- Keep it short and memorable
- Use the official project name
- Examples: `"DB-BERT"`, `"SkinnerDB"`, `"NaturalMiner"`

### URL

- Link to the official project website
- Can also link to GitHub repository
- Must start with `http://` or `https://`

### Description

- One sentence summary
- Explain what the project does
- Keep under 100 characters for best display
- Examples:
  - `"Adaptive query processing with reinforcement learning."`
  - `"The database tuning tool that \"reads\" the manual."`
  - `"Automate exploratory data analysis via LLMs."`

## Reordering Projects

Projects appear in the order listed. To feature a project:

1. Move it higher in the array
2. Or add it at the beginning

## Removing a Project

Delete the entire project object:

```json
// Before
[
  { "title": "Project A", ... },
  { "title": "Old Project", ... },  // Remove this
  { "title": "Project C", ... }
]

// After
[
  { "title": "Project A", ... },
  { "title": "Project C", ... }
]
```

## Full Example

```json
[
  {
    "title": "DB-BERT",
    "url": "https://itrummer.github.io/dbbert/",
    "description": "The database tuning tool that \"reads\" the manual."
  },
  {
    "title": "UDO",
    "url": "https://cornelldbgroup.github.io/UDO/",
    "description": "The \"Swiss Army Knife\" of database tuning tools."
  },
  {
    "title": "SkinnerDB",
    "url": "https://cornelldbgroup.github.io/skinnerdb/",
    "description": "Adaptive query processing with reinforcement learning."
  },
  {
    "title": "NaturalMiner",
    "url": "https://github.com/itrummer/NaturalMiner",
    "description": "Automate exploratory data analysis via LLMs."
  }
]
```

## Tips

- **Featured projects:** Put most important projects first
- **Active projects:** Consider removing very old/inactive projects
- **Clear descriptions:** Explain the "what" not the "how"
- **Working links:** Verify URLs are correct and accessible
- **Quotes in descriptions:** Use `\"` to escape quotes in JSON
