## Element Finance

The main purpose of this documentation is to break down some of components used for this project and also, basics of [Next.js framework](https://nextjs.org/docs/getting-started).

## Table of contents

- [Setup](#setup)
- [Reusable components](#reusable-components)
  - [Left section](#left-section)
  - [Right section](#right-section)
  - [Investors](#investors)
  - [Header Footer](#header-footer)
  - [Newsletter](#newsletter)
- [Add new page](#add-new-page)
- [Links](#Links)

## Setup

You’ll need to have Node 10.16.0 or later version on your local development machine (but it’s not required on the server). I recommend using the latest LTS version.

Install the dependancies for this project.

```sh
yarn install
```

Start a Node development server.

```sh
yarn dev
```

The application will open in your browser at http://localhost:3000

## Reusable components

You can easily create a new page, or add certain sections from already built components inside this project, i'll be going few of those:

### Left section

As the name suggets, this component is responsible for displaying lottie animation on the left and the content on the right. The sections takes in 8 parameters, but only 2 of these are required.

```sh
import LeftSection from "components/LeftSection";
```

By importing the component, we will be asked to provide title and text params, pretty straightforward. We can also add a button inside this section by providing properties for button:

```sh
<LeftSection
  title="Grow your savings"
  text="When you purchase Element Principal Tokens, you receive a fixed
  rate token that you buy and hold until the day of the term end
  date."
  buttonText="Start earning"
  buttonHref="https://app.element.fi/fixedrates/"
/>
```

###### This component and every other one included in this list will be reponsive and multi-themed.

We can also choose to add an arrow on the button by providing `hasArrow` property,, keep in mind that the hover animations for these two types of buttons are different and you dont have to provide additional props for that. `largeTitle` will increase the font-size of the title to 64px and respectively on smaller screens.

Finally, we have lotties. Always add a new lottie json file inside the ` public/assets/lotties/` folders, to maintain the structure always always import it from the same path, like so:

```sh
import VaultAnimationDark from "public/assets/lotties/VaultAnimationDark.json";
```

As the website is both dark and light themed, we need to provide both of these values:

```sh
<LeftSection
  darkLottie={VaultAnimatioLight}
  lightLottie={VaultAnimationDark}
/>
```

If there is no light/dark themed lottie, you SHOULD assign both values to the same json file:

```sh
<LeftSection
  darkLottie={VaultAnimationDark}
  lightLottie={VaultAnimationDark}
/>
```

The logic between switching the animations on theme change is already there.

### Right section

`Right section` behaves exactly the same way as `Left section` component, only difference is the svg icons and the direction.

### Investors

The investors component takes in two mandatory parameters `title` and `type`, the first is pretty self explanitory, it will just render the provided text, as for the `type` it's to let next.js know which `api` you want to make a call using the component.

```
import { Investors } from "components/Investors";
```

In order to create a new backend API, go inside `pages/api` folder and add a new file, the name of this file is going to be the type that you will pass to `Investors` component.

```
<Investors title="Our Partners" type="partners" />
```

Just follow the other two examples : `investors` and `partners`.

`alTitle` - Alt title for screen readers
`image` - Investors logo, can be any image format, but make sure that you are providing the correct path
``href``` - Where you want to open a target link

`Investors` component will then make a call to the API, using `SWR ` map the data and display them in a grid structure.

### Header Footer

These components are already included in the root file of the project so you don't have to keep importing them in each page that you create.

### Newsletter

This component is included inside the `Footer`, so it's going to be included in every page

## Add new page

Adding a new page is super simple, all you have to do is navigate to `pages` folder and create a new file. Whatever you name this file will be the path to a new page.

Once you are there, you can import the components that I've mentioned above and start passing props to them, like so:

```
import RightSection from "components/RightSection";

const About = () => (
  <>
      <RightSection
          title="Grow your savings"
          text="When you purchase Element Principal Tokens, you receive a fixed
          rate token that you buy and hold until the day of the term end
          date."
          buttonText="Start earning"
          buttonHref="https://app.element.fi/fixedrates/"
    />
  </>
);

export default About;
```

This is all it takes to create a new page called about, which we can access by going to website.com/about

## Links

There are multiple ways to navigate inside and outside of the project, here are the ways that I've used in this project:

If we want to navigate from our main page (https://www.element.fi/) to a subpage (https://www.element.fi/treasury-management) we can use `Link` component exported by `next/link`.

```
import Link from "next/link";

<Link href="/treasury-management" passHref>
    Treasury Management
</Link>
```

But if you want to navigate users to an external page, without closing your tab, you can use my `ExternalLink` component.

```
<ExternalLink href="https://app.element.fi" noUnderline>
    Click me
</ExternalLink>
```

You might've noticed that we pass `noUnderline ` parameter, indicating that we do not want to show the hover animation. This is handy when using `ExternalLink` on buttons or images, but you should use it on text, since it looks cool 😊
