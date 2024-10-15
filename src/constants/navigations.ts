export default [
  {
    id: "home",
    title: "Home",
    href: "/",
  },
  {
    id: "attorney-profiles",
    title: "Attorney Profiles",
    href: "/attorney-profiles",
  },
  {
    id: "practice-area",  // Corrected the typo here
    title: "Practice Area",
    href: "#",
    submenu: [
      {
        id: "securities-litigation-attorney",
        title: "Securities Litigation Attorney",
        href: "/securities-litigation-attorney",
      },
      {
        id: "civil-litigation-attorney",
        title: "Civil Litigation Attorney",
        href: "/civil-litigation-attorney",
      },
      {
        id: "ponzi-scheme-law-firm",
        title: "Ponzi Scheme Law Firm",
        href: "/ponzi-scheme-law-firm",
      },
      {
        id: "broker-misconduct-lawyers",
        title: "Broker Misconduct Lawyers",
        href: "/broker-misconduct-lawyers",
      },
      {
        id: "investment-fraud-lawyer",
        title: "Investment Fraud Lawyer",
        href: "/investment-fraud-lawyer",
      }
     
    ],
  },
  {
    id: "recent-results",
    title: "Recent Results",
    href: "/recent-results",
  },
  {
    id: "client-reviews",
    title: "Client Reviews",
    href: "/client-reviews",
  },
  {
    id: "blog",
    title: "Blog",
    href: "/blog",
  },
  {
    id: "contact-us",
    title: "Contact",
    href: "/contact-us",
  },

];
