# Managing Publications Data

This file (`publications.json`) contains all group publications organized by year.

## File Structure

Publications are organized by year, with each year containing an array of publications:

```json
{
  "2027": [ /* publications */ ],
  "2026": [ /* publications */ ],
  "2025": [ /* publications */ ]
}
```

## Adding a New Publication

### Basic Publication

```json
{
  "venue": "SIGMOD 2027",
  "title": "Your Paper Title Here",
  "authors": "Author1, Author2, Author3",
  "links": []
}
```

### Publication with Links

```json
{
  "venue": "VLDB 2027",
  "title": "Advanced Query Processing Techniques",
  "authors": "Jane Doe, John Smith",
  "links": [
    {
      "type": "Paper",
      "url": "https://doi.org/10.1145/..."
    },
    {
      "type": "Code",
      "url": "https://github.com/username/project"
    }
  ]
}
```

### Publication with Award

```json
{
  "venue": "SIGMOD 2027",
  "title": "Groundbreaking Database Research",
  "authors": "Researcher A, Researcher B",
  "award": "Best Paper Award",
  "links": [
    {
      "type": "Paper",
      "url": "https://doi.org/..."
    }
  ]
}
```

## Fields Explained

### Required Fields

- **venue**: Conference/journal name and year
  - Format: `"SIGMOD 2027"`, `"VLDB 2027"`, `"PVLDB 2027"`

- **title**: Full paper title
  - Use sentence case or title case
  - No period at the end

- **authors**: Comma-separated list of authors
  - Format: `"First Last, First Last, First Last"`

- **links**: Array of related links
  - Can be empty: `[]`
  - See "Link Types" below

### Optional Fields

- **award**: Recognition received (omit field if no award)
  - Examples: `"Best Paper Award"`, `"Best Demo Runner Up"`, `"Selected for \"Best of SIGMOD\""`

## Link Types

Common link types and their uses:

- `"Paper"` - Published paper (DOI or direct link)
- `"Code"` - Source code repository
- `"Data"` - Dataset
- `"Video"` - Presentation or demo video
- `"Slides"` - Presentation slides
- `"Book"` - Published book
- `"Demo"` - Live demonstration

```json
"links": [
  {
    "type": "Paper",
    "url": "https://doi.org/10.1145/3299869.3300088"
  },
  {
    "type": "Code",
    "url": "https://github.com/username/project"
  },
  {
    "type": "Video",
    "url": "https://youtube.com/watch?v=..."
  }
]
```

## Adding a New Year

To add publications for a new year (e.g., 2027):

```json
{
  "2027": [
    {
      "venue": "SIGMOD 2027",
      "title": "First Paper of 2027",
      "authors": "Authors Here",
      "links": []
    }
  ],
  "2026": [ /* existing publications */ ]
}
```

**Note:** Years are automatically sorted newest-first on the website.

## Display Behavior

- **First 3 years:** Automatically expanded on page load
- **Older years:** Collapsed by default, click to expand
- **Ordering:** Years sorted newest to oldest
- **Within a year:** Publications appear in the order listed

## Examples by Venue Type

### Journal

```json
{
  "venue": "VLDBJ 2027",
  "title": "Comprehensive Survey of Database Systems",
  "authors": "Jane Doe, John Smith, Alice Johnson",
  "links": [
    {
      "type": "Paper",
      "url": "https://doi.org/10.1007/..."
    }
  ]
}
```

### Conference

```json
{
  "venue": "SIGMOD 2027",
  "title": "Novel Query Optimization Approach",
  "authors": "Researcher A, Researcher B",
  "links": [
    {
      "type": "Paper",
      "url": "https://doi.org/10.1145/..."
    },
    {
      "type": "Code",
      "url": "https://github.com/..."
    }
  ]
}
```

### Workshop

```json
{
  "venue": "Q-Data 2027",
  "title": "Quantum Computing for Databases",
  "authors": "Author Name",
  "links": []
}
```

### Demo/Poster

```json
{
  "venue": "SIGMOD 2027",
  "title": "Demonstrating SystemX: A New Approach to Query Processing",
  "authors": "Demo Authors",
  "links": [
    {
      "type": "Paper",
      "url": "https://doi.org/..."
    },
    {
      "type": "Demo",
      "url": "https://demo.site.com"
    }
  ]
}
```

### Book

```json
{
  "venue": "MEAP Book",
  "title": "AI-Assisted Data Science",
  "authors": "Book Author",
  "links": [
    {
      "type": "Book",
      "url": "https://www.manning.com/books/..."
    }
  ]
}
```

## Tips

- **Consistent formatting:** Follow existing entries for venue names
- **Author order:** Match the paper's author order exactly
- **DOI links preferred:** Use DOI links when available
- **Check links:** Verify all URLs are accessible
- **Awards:** Include in the `award` field, not the venue name
- **Special characters:** Use `\"` for quotes in titles

## Full Example

```json
{
  "2027": [
    {
      "venue": "SIGMOD 2027",
      "title": "Adaptive Query Processing with Machine Learning",
      "authors": "Jane Doe, John Smith, Alice Johnson",
      "award": "Best Paper Award",
      "links": [
        {
          "type": "Paper",
          "url": "https://doi.org/10.1145/..."
        },
        {
          "type": "Code",
          "url": "https://github.com/username/project"
        }
      ]
    },
    {
      "venue": "VLDB 2027",
      "title": "Efficient Data Processing at Scale",
      "authors": "Bob Wilson, Carol Davis",
      "links": [
        {
          "type": "Paper",
          "url": "https://doi.org/10.14778/..."
        }
      ]
    }
  ],
  "2026": [
    {
      "venue": "SIGMOD 2026",
      "title": "Database Systems for the Modern Era",
      "authors": "Multiple Authors",
      "links": []
    }
  ]
}
```
