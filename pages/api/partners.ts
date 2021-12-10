import { NextApiHandler } from "next";

const partners: NextApiHandler = (req, res) => {
  res.status(200).json([
    {
      alTitle: "injective",
      image: "/assets/svg/Investors/injective.svg",
      href: "https://injectiveprotocol.com/",
    },
    {
      alTitle: "uniwhales",
      image: "/assets/svg/Investors/uniwhales.svg",
      href: "https://uniwhales.io/",
    },
    {
      alTitle: "chainsafe",
      image: "/assets/svg/Investors/chainsafe.svg",
      href: "https://chainsafe.io/,
    },
    {
      alTitle: "gnosis",
      image: "/assets/svg/Investors/gnosis.svg",
      href: "https://gnosis-safe.io/",
    },
    {
      alTitle: "opolis",
      image: "/assets/svg/Investors/opolis.svg",
      href: "https://opolis.co/",
    },
    {
      alTitle: "drift",
      image: "/assets/svg/Investors/drift.svg",
      href: "https://www.drift.trade/",
    },
    {
      alTitle: "antimatter",
      image: "/assets/svg/Investors/antimatter.svg",
      href: "https://antimatter.finance/",
    },
  ]);
};

export default partners;
