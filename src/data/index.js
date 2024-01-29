const tabData = [
  {
    id: 1,
    name: "My debit cards",
    functional: true
  },
  {
    id: 2,
    name: "All company cards",
    functional: false
  },
];

const cardInfo = [
  {
    id: 1,
    name: "Mark Henry",
    cardNumber: "1234567890123456",
    validity: "12/20",
    type: "visa",
    isActive:true
  },
  {
    id: 2,
    name: "Manvi Mehta",
    cardNumber: "1111222233334444",
    validity: "12/27",
    type: "visa",
    isActive:true
  }

];
const bottomPanelItems = [
  {
      id:1,
      name:"Home",
      icon: "LogoBottom",
  },
  {
      id:2,
      name:"Cards",
      icon: "Pay",
      isActive:true
  },
  {
      id:3,
      name:"Payments",
      icon: "Payments",
  },
  {
      id:4,
      name:"Credit",
      icon: "Credit",
  },
  {
      id:5,
      name:"Profile",
      icon: "Account",
  }
];

const optionsPanelItems = [
  {
      id:1,
      name:"Freeze Card",
      secondName: "Unfreeze Card",
      icon: "FreezeCard",
  },
  {
      id:2,
      name:"Set spend limit",
      icon: "SetSpendLimit",
      isActive:true
  },
  {
      id:3,
      name:"Add to GPay",
      icon: "GPay",
  },
  {
      id:4,
      name:"Replace card",
      icon: "ReplaceCard",
  },
  {
      id:5,
      name:"Cancel card",
      icon: "DeactivateCard",
  }
];

const transactionData = [
  {
    id: 1,
    name: "Hamleys",
    price: "150",
    type: "credit",
    date: "20 May 2020"
  },
  {
    id: 2,
    name: "Hamleys",
    price: "150",
    type: "debit",
    date: "19 May 2020"
  }, {
    id: 3,
    name: "Hamleys",
    price: "150",
    type: "credit",
    date: "18 May 2020"
  }, {
    id: 4,
    name: "Hamleys",
    price: "150",
    type: "debit",
    date: "17 May 2020"
  }, {
    id: 5,
    name: "Hamleys",
    price: "150",
    type: "credit",
    date: "16 May 2020"
  }, {
    id: 6,
    name: "Hamleys",
    price: "150",
    type: "debit",
    date: "15 May 2020"
  }, {
    id: 7,
    name: "Hamleys",
    price: "150",
    type: "debit",
    date: "14 May 2020"
  }
]




export { tabData, cardInfo,bottomPanelItems,optionsPanelItems,transactionData};
