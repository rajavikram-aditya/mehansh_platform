# Mehansh Platform Asset Sources

This static project uses local asset paths (`/assets/`) which are served from the `client/public/assets/` directory.

| Asset | Local path | Used in | Source status |
| --- | --- | --- | --- |
| Mehansh crest | `/assets/mehansh-crest_199225de.png` | Header, footer, founder seal, inquiry form | Generated brand mark |
| Hospitality hero | `/assets/mehansh-hero_0f1c8e24.jpg` | Hero section | Generated website image |
| Institutional catering | `/assets/mehansh-catering_35fb5a72.jpg` | V.I.I.T. Pune portfolio card | Generated website image |
| Rahgir logistics | `/assets/mehansh-rahgir_6e355fe7.jpg` | Rahgir portfolio card | Generated website image |
| Ber Anjuna restaurant | `/assets/ber-anjuna-restaurant_36fad056.png` | Ber Anjuna portfolio card | User-supplied image |
| Saurabh Anand portrait | `/assets/mehansh-founder-portrait_f8964a65.jpeg` | Founder section | User-supplied image |

## Updating an Image

When adding a new image, place it in the `client/public/assets/` folder and reference it in the code as `/assets/your-image-name.jpg`. Ensure this manifest is updated to keep track of assets.
