# Multi-Project Repository with Yarn Plug'n'Play (PnP)

This is a multi-project repo that uses the modern version 2 of yarn and yarn Plug’n’Play (PnP) to manage the packages. Yarn is a new way of handling and dealing with packages and dependencies in a fast and efficient manner, without relying on node_modules. Yarn PnP is a feature that improves the performance, reliability, and security of your projects by enforcing strict resolutions and preventing code from accessing undeclared dependencies. I’ll briefly guide you through the steps to get you started with this repo.

> **Pro Tip: Manage Yarn with Corepack**
>
> Optimal Yarn management is achieved on a per-project basis using [Corepack], a tool bundled by default with Node.js. Instead of installing modern Yarn releases globally or from npm, Corepack provides the preferred method.

## Enabling Corepack

Before diving in, ensure Corepack is enabled:

```bash
corepack enable
```

## Initializing a New Project

If you're starting from scratch (though not necessary for this repository), initialize a new project:

```bash
yarn init -2
```

## Updating Yarn

To keep Yarn up to date with the latest version, execute these commands:

```bash
yarn set version stable
yarn install
```

## Getting Started with Projects

To begin working with specific projects, navigate to their directories and run the appropriate commands:

```bash
cd react-ts-children && yarn dev
```

## Learn More

Expand your understanding of these important topics by exploring the following resources:

- [What is Yarn?](https://yarnpkg.com/getting-started/qa#what-is-yarn)
- [Yarn Plug'n'Play (PnP)](https://yarnpkg.com/features/pnp)
- [Corepack Documentation](https://nodejs.org/dist/latest/docs/api/corepack.html)
- [Updating Yarn](https://yarnpkg.com/getting-started/install#updating-yarn)

Feel free to dive deeper into these references to gain a comprehensive grasp of Yarn, PnP, Corepack, and updating your Yarn version.

If you have any questions or need further assistance, don't hesitate to reach out!

[Corepack]: https://nodejs.org/dist/latest/docs/api/corepack.html
```
