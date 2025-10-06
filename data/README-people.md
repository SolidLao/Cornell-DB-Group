# Managing People Data

This file (`people.json`) contains information about all group members.

## File Structure

The file has four main sections:

1. **faculty** - Faculty members
2. **phd_students** - Current PhD students
3. **phd_graduates** - PhD graduates (with current affiliation)
4. **undergraduate_students** - Current undergraduate students

## Adding a New Person

### Faculty Member

```json
{
  "name": "Full Name",
  "image": "static/images/people/firstname-lastname.png",
  "website": "https://personal-website.com"
}
```

**Fields:**
- `name` (required): Full name as it should appear
- `image` (required): Path to photo file
- `website` (required): Personal website URL (use `""` if none)

### PhD Student

```json
{
  "name": "Full Name",
  "image": "static/images/people/firstname-lastname.png",
  "website": "https://personal-website.com"
}
```

**Fields:**
- `name` (required): Full name
- `image` (required): Path to photo file
- `website` (required): Personal website URL (use `""` for no link)

### PhD Graduate

```json
{
  "name": "Full Name",
  "image": "static/images/people/firstname-lastname.png",
  "website": "https://personal-website.com",
  "affiliation": "Current Company/Institution"
}
```

**Fields:**
- `name` (required): Full name
- `image` (required): Path to photo file
- `website` (required): Personal website URL (use `""` for no link)
- `affiliation` (required): Current employer/institution

### Undergraduate Student

```json
{
  "name": "Full Name"
}
```

**Fields:**
- `name` (required): Full name

## Adding Photos

1. **Prepare the image:**
   - Faculty: Recommended 200x200 pixels
   - Students: Recommended 100x100 pixels
   - Format: PNG or JPG
   - Size: Keep under 200KB

2. **Name the file:**
   - Format: `firstname-lastname.png` (or `.jpg`)
   - Use lowercase, hyphens for spaces
   - Example: `jane-doe.png`

3. **Save to:** `static/images/people/`

4. **Update JSON:**
   ```json
   "image": "static/images/people/jane-doe.png"
   ```

## Moving People Between Categories

### When a PhD Student Graduates

1. **Copy their entry** from `phd_students`
2. **Add to `phd_graduates`** with affiliation field
3. **Remove from `phd_students`**

Example:
```json
// From phd_students
{
  "name": "Jane Doe",
  "image": "static/images/people/jane-doe.png",
  "website": "https://janedoe.com"
}

// To phd_graduates (add affiliation)
{
  "name": "Jane Doe",
  "image": "static/images/people/jane-doe.png",
  "website": "https://janedoe.com",
  "affiliation": "Google"
}
```

### When a Person Leaves the Group

Simply remove their entire entry from the appropriate section.

## Tips

- **Order matters:** People appear in the order listed
- **Missing images:** If image file doesn't exist, it will gracefully hide
- **No website:** Use empty string `""` - name will display without link
- **Keep consistent:** Follow existing formatting for consistency

## Example Entry

```json
{
  "faculty": [
    {
      "name": "Immanuel Trummer",
      "image": "static/images/people/immanuel-trummer.png",
      "website": "https://itrummer.github.io/"
    }
  ],
  "phd_students": [
    {
      "name": "Anna Mazhar",
      "image": "static/images/people/anna.png",
      "website": "https://anna-mazhar.github.io/"
    }
  ],
  "phd_graduates": [
    {
      "name": "Junxiong Wang",
      "image": "static/images/people/junxiong.png",
      "website": "https://jxiw.github.io/",
      "affiliation": "TogetherAI"
    }
  ],
  "undergraduate_students": [
    {
      "name": "Ved Sriraman"
    }
  ]
}
```
