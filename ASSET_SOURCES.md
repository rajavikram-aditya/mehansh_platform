# Mehansh Platform Asset Sources

This static project uses managed website asset paths rather than repository-local media files. The image files are held in the project asset store so the deployed site can load them reliably without placing large binary files inside the frontend project directory. Their source paths are intentionally tracked below alongside the files that reference them.

| Asset | Managed website path | Used in | Source status |
| --- | --- | --- | --- |
| Mehansh crest | `/manus-storage/mehansh-crest_199225de.png` | Header, footer, founder seal, inquiry form | Generated brand mark |
| Hospitality hero | `/manus-storage/mehansh-hero_0f1c8e24.jpg` | Hero section | Generated website image |
| Institutional catering | `/manus-storage/mehansh-catering_35fb5a72.jpg` | V.I.I.T. Pune portfolio card | Generated website image |
| Rahgir logistics | `/manus-storage/mehansh-rahgir_6e355fe7.jpg` | Rahgir portfolio card | Generated website image |
| Ber Anjuna restaurant | `/manus-storage/ber-anjuna-restaurant_36fad056.png` | Ber Anjuna portfolio card | User-supplied image |
| Saurabh Anand portrait | `/manus-storage/mehansh-founder-portrait_f8964a65.jpeg` | Founder section | User-supplied image |

## Updating an Image

When a new image is approved, upload it to the project asset store, replace the corresponding `/manus-storage/...` reference in `client/src/pages/Home.tsx`, and update this manifest in the same commit. This keeps source history in GitHub while preserving deployment-safe asset delivery.
