<a href="https://github.com/whosramoss/nt3">
  <img alt="NT3" src="./public/thumbnail.png" />
  <h1 align="center">NT3</h1>
</a>

<p align="center">
  This template provides a starting point for building Next.js apps with Tailwind CSS, TypeScript and Three.js.
</p>

<div align="center">
  <img src="https://img.shields.io/badge/next.js-323330?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Website">
  <img src="https://img.shields.io/badge/React-323330?style=for-the-badge&logo=React&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Tailwind-323330?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/Typescript-323330?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Framer%20Motion-323330?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion">
  <br/>
  <img src="https://img.shields.io/badge/Prettier-323330?style=for-the-badge&logo=prettier&logoColor=white" alt="Prettier">
  <img src="https://img.shields.io/badge/eslint-323330?style=for-the-badge&logo=eslint&logoColor=white" alt="eslint">
  <img src="https://img.shields.io/badge/zod-323330?style=for-the-badge&logo=zod&logoColor=white" alt="zod">
   <img src="https://img.shields.io/badge/three-323330?style=for-the-badge&logo=three.js&logoColor=white" alt="three">
</div>
<br/>

<br/>

## How to install

```bash
  # Clone the project
  git clone https://github.com/whosramoss/nt3/

  # Go to the project directory
  cd nt3

  # Install dependencies
  npm install

  # Start the server
  npm run dev
```

## How to build

- Before generating the build, don't forget to update the [layout](./src/app/layout.tsx) file and set `isLocalMetadata = false`.
- To generate a static compilation, the [next.config.mjs](./next.config.mjs) file must have the object below :

```bash
const staticbuild = {
  distDir: 'build',
  output: 'export',
  trailingSlash: true,
}
```

- Run the command:

```bash
  npm run build
```

## Project Modular Structure Overview

```bash
src/
├── app/
│   ├── manifest.ts
│   ├── layout.tsx
│   ├──page.tsx
│   └── [lang]/
│         └── page.tsx/
├── modules/
│   └── {module-name}/
│       ├── components/
│       ├── services/
│       ├── schemas/
│       └── data/
└── shared/
    ├── ui/
    ├── styles/
    ├── providers/
    ├── utils/
    └── hooks/
```

## Framework and Packages

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://framer.com/motion)
- [Zod](https://zod.dev/)

## Hooks

- [useAnimationCursor](./src/hooks/useAnimationCursor.ts)
- [useAnimationFadeIn](./src/hooks/useAnimationFadeIn.ts)
- [useFetch](./src/hooks/useFetch.ts) (Using [React-Query](https://www.npmjs.com/package/react-query))

## Contributing

If you want to contribute to `nt3`, please make sure to review the [contribution guidelines](https://github.com/whosramoss/nt3/blob/master/CONTRIBUTING.md). This project makes use of [GitHub issues](https://github.com/whosramoss/nt3/issues) for
tracking requests and bugs.

## License

MIT License. [LICENSE](./LICENSE)

## Author

Gabriel Ramos ([@whosramoss](https://github.com/whosramoss))
