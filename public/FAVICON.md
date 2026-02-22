# How to update the favicon

Your site uses the favicon from **`/favicon.ico`**. To change it:

## Option 1: Replace the file in `public/` (recommended)

1. Create or export your favicon as **favicon.ico** (e.g. 32×32 or 48×48 pixels).
2. Put it in the **`public`** folder: **`public/favicon.ico`**.
3. Commit and push to GitHub. Vercel will redeploy and the new favicon will go live.

## Option 2: Use the App folder

1. Put **favicon.ico** in **`src/app/favicon.ico`** (replacing any existing file).
2. Commit and push. Next.js will serve it automatically.

## Tips

- **Format:** `.ico` is most compatible. You can also use `.png` (e.g. **`src/app/icon.png`**) for a modern icon.
- **Sizes:** 32×32 or 48×48 is typical for favicon.ico; 192×192 or 512×512 for high-DPI.
- **Cache:** After updating, do a hard refresh (Ctrl+Shift+R or Cmd+Shift+R) or clear cache to see the new icon.
