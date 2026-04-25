# Deployment and Iteration Guide

## 1) Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, click **Add New Project** and import the repository.
3. Keep defaults (Framework: Next.js) and deploy.

## 2) Set Production URL

After first deploy, update these values from `https://portfolio-site.vercel.app` to your real domain:

- `src/app/layout.tsx` (`metadataBase`)
- `src/app/sitemap.ts` (`baseUrl`)
- `src/app/robots.ts` (`sitemap`)

## 3) Connect Custom Domain

1. In Vercel project settings, open **Domains**.
2. Add your domain and follow DNS instructions.
3. Re-deploy once DNS is verified.

## 4) Analytics

`@vercel/analytics` is already integrated in `src/app/layout.tsx` with `<Analytics />`.
Enable Web Analytics in your Vercel project dashboard to start collecting traffic data.

## 5) Iterate on Performance and Conversion

- Run Lighthouse in Chrome DevTools and target 90+ in Performance, SEO, and Accessibility.
- Update hero headline and project order based on top landing page and click-through behavior.
- Replace placeholder `public/resume.pdf` with your final resume file.
