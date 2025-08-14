# GAIA Packs Bundle v3
Generated August 14, 2025

This bundle updates the v2 set. It keeps file names and structure so integration stays simple.
Every file has content. A global manifest is included. Each pack also has its own manifest.

Folders
- packs/phase-1: brand, copy, services, tokens, email, calendar, JSON-LD, Playbook.
- packs/phase-2: demos, proof, offer ladder, conversion architecture, KPIs.
- packs/runtime: pages, API route, components, scripts, tests, workflow, snippets for layout and footer.
- packs/notion: mapping, sync script, nightly workflow, sample import, proposal templates.
- packs/n8n: two flow blueprints and a readme.
- prompts: four Cursor prompts.
- templates: services index and detail pages.

How to use
1) Copy folders into your Next.js repo at the same paths.
2) Apply the package.json edits in packs/runtime/package_patch_instructions.txt.
3) Commit and push.
4) Paste prompts into Cursor Agent as needed.

Verify integrity
- From this folder, you can check hashes with: md5sum -c MANIFEST.md5
