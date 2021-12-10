import { NextApiHandler } from "next";

const investors: NextApiHandler = (req, res) => {
  res.status(200).json([
    {
      alTitle: "polychain",
      image: "/assets/svg/Investors/poly.svg",
      href: "",
    },
    {
      alTitle: "a16z",
      image: "/assets/svg/Investors/a16z.svg",
      href: "",
    },
    {
      alTitle: "republic",
      image: "/assets/svg/Investors/republic.svg",
      href: "",
    },
    {
      alTitle: "Advanced Blockchain",
      image: "/assets/svg/Investors/advanced_blockchain.svg",
      href: "",
    },
    {
      alTitle: "Ethereal Ventures",
      image: "/assets/png/Investors/Venture.png",
      href: "",
    },
    {
      alTitle: "Balancer",
      image: "/assets/svg/Investors/balancer.svg",
      href: "",
    },
    {
      alTitle: "Robot Ventures",
      image: "/assets/svg/Investors/robot_ventures.svg",
      href: "",
    },
    {
      alTitle: "Rarestone",
      image: "/assets/png/Investors/Rarestone.png",
      href: "",
    },
    {
      alTitle: "Scalar Capital",
      image: "/assets/png/Investors/scalar_capital.png",
      href: "",
    },
    {
      alTitle: "Femboy Capital",
      image: "/assets/svg/Investors/femboy_capital.svg",
      href: "",
    },
    {
      alTitle: "Placeholder",
      image: "/assets/svg/Investors/Placeholder.svg",
      href: "",
    },
    {
      alTitle: "a_capital",
      image: "/assets/svg/Investors/a_capital.svg",
      href: "",
    },
    {
      alTitle: "yc",
      image: "/assets/svg/Investors/yc.svg",
      href: "",
    },
    {
      alTitle: "SVAngel",
      image: "/assets/svg/Investors/SVAngel.svg",
      href: "",
    },
  ]);
};

export default investors;
