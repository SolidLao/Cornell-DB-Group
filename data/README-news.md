# Managing News Data

This file (`news.json`) contains the latest news and achievements for the group.

## File Structure

The file is a simple array of news items, displayed in order from top to bottom.

## Adding News

Add new items at the **top** of the array to show them first:

```json
[
  {
    "text": "Your new news item here!"
  },
  {
    "text": "Older news item..."
  }
]
```

## Formatting News Text

### Basic Text

```json
{
  "text": "Our paper was accepted at SIGMOD 2027!"
}
```

### With Bold Text

Use `<strong>` tags for emphasis:

```json
{
  "text": "Our paper was accepted at <strong>SIGMOD 2027</strong>!"
}
```

### With Links

Use standard HTML `<a>` tags:

```json
{
  "text": "Check out our <a href=\"https://example.com\" target=\"_blank\">new project</a>!"
}
```

**Important:**
- Use `\"` to escape quotes inside the JSON string
- Always include `target=\"_blank\"` to open links in new tabs

### Complex Example

```json
{
  "text": "Our paper on <strong>query optimization</strong> was accepted at <strong>SIGMOD 2027</strong>! Read the <a href=\"https://doi.org/...\" target=\"_blank\">paper here</a>."
}
```

## Examples by Category

### Paper Acceptance

```json
{
  "text": "Our paper on database optimization accepted at <strong>VLDB 2027</strong>!"
}
```

### Award/Recognition

```json
{
  "text": "Our demo wins the <strong>Best Demo Award at SIGMOD'27</strong>!"
}
```

### Thesis Defense

```json
{
  "text": "Jane Doe successfully defends her PhD thesis \"Advanced Query Processing\"!"
}
```

### Milestone Achievement

```json
{
  "text": "Our <a href=\"https://youtu.be/...\" target=\"_blank\">online course</a> reaches <strong>1 million views</strong>!"
}
```

### Workshop/Conference

```json
{
  "text": "Three papers accepted at the <strong>VLDB 2027</strong> conference!"
}
```

## Removing Old News

Simply delete the entire news object from the array:

```json
// Before
[
  { "text": "Recent news" },
  { "text": "Old news to remove" },  // Delete this entire line
  { "text": "Older news" }
]

// After
[
  { "text": "Recent news" },
  { "text": "Older news" }
]
```

**Remember:** Don't forget to remove the comma if it's the last item!

## Tips

- **Keep it concise:** News items should be one sentence
- **Use HTML:** Bold important terms and conferences
- **Order matters:** First item appears at the top
- **Links open new tabs:** Always use `target=\"_blank\"`
- **Test formatting:** Verify HTML renders correctly

## Full Example

```json
[
  {
    "text": "Our paper on leveraging digital annealers for query optimization accepted at <strong>SIGMOD 2026</strong>!"
  },
  {
    "text": "Our paper on CEDAR (cost-efficient data-driven claim verification) accepted at <strong>VLDB 2025</strong>!"
  },
  {
    "text": "Three demos accepted at <strong>SIGMOD 2025</strong> (SQLBarber, SwellDB, and CEDAR)!"
  },
  {
    "text": "Ziyun Wei successfully defends his PhD thesis \"Robust Querying for Data Analysis and Processing\"!"
  },
  {
    "text": "Our <a href=\"https://youtu.be/4cWkVbC2bNE\" target=\"_blank\">online lecture</a> on database systems passes <strong>500,000 views</strong>!"
  }
]
```
