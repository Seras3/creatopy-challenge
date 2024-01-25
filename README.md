# Creatopy Challenge

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. ``yarn install``
2. Copy the `.env.example` into `.env.local`
3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Requirements

✅ SSR React components  
✅ Use [JsonDesign.types.ts](./app/types/json-design.types.ts)  
✅ Dynamic JSON data fetching  
✅ Node.js backend - fetch/process/render JSON schema  
✅ Use TypeScript on both the backend and the frontend sides   
✅ Display Text & Image elements (without animations)  


## Bonus
✅ [Docs](https://whimsical.com/creatopy-challenge-UTMdiDdnV9mwSc5xQhKoxL)  
✅ Other Elements  
 - [ElementButton](./app/designs/[id]/elements/element-button.tsx)
 - [Handle all background types](./app/designs/[id]/utils/get-styles.ts)
   
❌ Testing  
❌ Animations  


## Challenges 
1. **Initial complexity**  
That was an interesting challenge. It can be overwhelming to look over a plain JSON structure and wonder how can you structure and render this. Pan & paper helped me to overcome this situation and I tried to split the entire structure into smaller chunks.

2. **Choosing the technology**  
Since the SSR components were required, the first thing that came to my mind was Next.js. The advantage that I had here was that I worked with this technology before, a few years ago. That might sound great, but they changed their architecture from back then :). So I jumped on the docs and gave it a ride.

3. **Scaling the components**  
Due to the SSR nature of being client unaware, the rescaling banner was a pretty cool challenge. To have access to the client window dimensions I created a CSR component and a hook that listens to the resize events. Unfortunately, the CSS was not enough and I came up with a formula that implies both banner dimensions and client window dimensions.

```
min(windowWidth / bannerWidth, windowHeight / bannerHeight)
```
Passing the banner dimensions from the SSR component to the CSR component was the key to finishing the rescale problem.

## Future improvements
- Testing
- Animations
- Implement all the elements
- Implement all the styling props
- Create a clear styling system
- Populate the example list from home with more examples
