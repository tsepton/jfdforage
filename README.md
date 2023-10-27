
<div style="text-align: center">
<img src="public\img\logo.jpg" width="200" />
</div>

## Running locally

Running the development server:

```bash
npm run dev
```

## Deployment

Use the following commands:
```bash
node update_gallerie_static_listing.js && npm run build
git add ./out/*
git commit -m "Deploy new version <version number>"
```