### Articles database

Required properties:
- **Title**: title
- **Slug**: rich text
- **Summary**: rich text
- **Date**: date
- **Tags**: multi select
- **Body**: rich text (or use page content blocks if Body is empty)

Output:
- `content/blog/<slug>.md` with front matter: `title`, `slug`, `date`, `summary`, `tags`.
- `data/blog-index.json` list of items with the same fields.

### Cases database

Required properties:
- **Title**: title
- **Slug**: rich text
- **Summary**: rich text
- **Sector**: multi select or select
- **Logo URL**: url
- **Link**: url
- **Body**: rich text (or page content blocks)

Output shape in `data/cases.json`:
- `{ cases: Array<{ id, title, description, metrics, tags, logoUrl, link }> }`
  - **id**: slug
  - **description**: summary or first 240 chars of body
  - **metrics**: empty object (extend as needed)
  - **tags**: sector values
  - **logoUrl** and **link**: from properties


