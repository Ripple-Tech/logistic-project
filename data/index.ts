import Ship from "@/assets/bg.png"
import Bluebus from "@/assets/bg1.png"
import Airplane from "@/assets/bg.png"
import Train from "@/assets/bg.png"
import { FormControlItem, Option } from "@/lib/types"

export const Experience = [
  {
    id: 1,
    title: "Air Freight",
    des: "We are a leading air freight service provider with high performance standards.",
    img: "/plane.png",
   // iconLists: ["/next.svg", "/vercel.svg", "/social-x.svg", "/vercel.svg", "/social-x.svg"],
    link: "/",
    points: [
      "Coordinated international air cargo shipments ensuring compliance with customs regulations.",
       "Monitored real-time cargo movement for time-sensitive deliveries.",
      "Implemented tracking systems to improve visibility and client communication.",
    ],
  },
  {
    id: 2,
    title: "Road Delivery",
    des: "We specialize in truck loading and cargo delivery with on-time response service.",
    img: "/bus.png",
    //iconLists: ["/next.svg", "/vercel.svg", "/social-x.svg", "/vercel.svg", "/social-x.svg"],
    link: "/",
    points: [
       "Scheduled and dispatched vehicles ensuring optimized fuel efficiency and timely delivery.",
      "Worked closely with drivers and fleet managers to ensure safety and compliance.",
      "Utilized GPS tracking systems to streamline delivery operations and reduce delays.",
    ],
  },
  {
    id: 3,
    title: "Sea Shipping",
    des: "One of the biggest shipping companies seen in ports all over the world.",
    img: "/ship.png",
    //iconLists: ["/next.svg", "/vercel.svg", "/social-x.svg", "/vercel.svg", "/social-x.svg"],
    link: "/",
    points: [
      "Handled container shipping logistics and port documentation for international freight.",
      "Negotiated contracts with carriers to secure competitive ocean freight rates.",
      "Ensured compliance with maritime safety and environmental regulations.",
    ],
  },
  {
    id: 4,
    title: "Railway Network",
    des: "With our extensive network, we offer an efficient delivery through railways.",
    img: "/train.png",
    //iconLists: ["/next.svg", "/vercel.svg", "/social-x.svg", "/vercel.svg", "/social-x.svg"],
    link: "/",
    points: [
      "Optimized freight scheduling across national rail networks to reduce lead time.",
      "Collaborated with rail operators to ensure compliance and cargo safety.",
      "Monitored shipment progress using digital platforms to provide real-time updates to clients.",
    ],
  },
];


export const services = [
    {
        imgURL: "/icons/truck-fast.svg",
        label: "Fast delivery",
        subtext: "Enjoy seamless shipping with our complimentary shipping service."
    },
    {
        imgURL: "/icons/shield-tick.svg",
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: "/icons/support.svg",
        label: "Love to help",
        subtext: "Our dedicated team is here to assist you every step."
    },
];

export const projects = [
    {
      id: 3,
      title: "Air Freight",
      des: "We are leading air freight service provider with high performance standards.",
      img: Airplane,
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "/ui.aiimg.com",
    },
    {
      id: 2,
      title: "Road Delivery",
      des: "We are specializes in Truck Loading & Cargo delivering on-time response service.",
      img: Bluebus,
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "/ui.yoom.com",
    },
    {
      id: 1,
      title: "Sea Shipping",
      des: "One of the biggest shipping companies seen in ports all over the world.",
      img: Ship,
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "/ui.earth.com",
    },
    {
      id: 4,
      title: "Railway Network",
      des: "With our extensive network, we offer an efficient delivery through Railways.",
      img: Train,
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "/ui.apple.com",
    },
    
  ]; 


  export const typeOfPackage: Option[] = [
    {
      label: 'Document',
      value: 'document', 
      },
      {
        label: 'Parcel',
        value: 'parcel', 
     },
     {
      label: 'Cargo',
      value: 'cargo', 
   }, ];
   export const ModeOfTransport: Option[] = [
    {
      label: 'Air Freight',
      value: 'Air freight', 
      },
      {
        label: 'Road Freight',
        value: 'Road freight', 
     },
     {
      label: 'Sea Freight',
      value: 'Sea freight', 
    }, {
      label: 'Express Delivery',
      value: 'Express delivery', 
     }, ];
   export const ModeOfPayment: Option[] = [
    {
      label: 'Cash On Delivery',
      value: 'Cash on delivery', 
      },
      {
        label: 'Online Payment',
        value: 'Online payment', 
     },
     {
      label: 'Pay To Bank',
      value: 'Pay to bank', 
   }, ]

  export const formControls: FormControlItem[] = [
    {
      id: 'shippername',
      label: 'Shipper Name',
      placeholder: 'Shipper Name',
      type: 'text',
      component: 'shippername',
      options: [],
    },
    {
      id: 'recievername',
      label: "Reciever name",
      placeholder: 'Reciever Name',
      type: 'text',
      component: 'recievername',
      options: [],
    },
    {
      id: 'shipperaddress',
      label: 'Shipper Address',
      placeholder: 'Shipper Address',
      type: 'text',
      component: 'shipperaddress',
      options: [],
    },
    {
      id: 'recieveraddress',
      label: 'Reciever Address',
      placeholder: 'Reciever Address',
      type: 'text',
      component: 'recieveraddress',
      options: [],
    },
    {
      id: 'waybilnumber',
      label: 'Waybil Number',
      placeholder: 'Waybil Number',
      type: 'text',
      component: 'waybilnumber',
      options: [],
    },
    {
      id: 'quantity',
      label: 'Quantity',
      placeholder: 'Quantity',
      type: 'text',
      component: 'quantity',
      options: [],
    },
    {
      id: 'weight',
      label: 'Product Name',
      placeholder: 'Product',
      type: 'text',
      component: 'weight',
      options: [],
    },
   
    {
      id: 'shipperphonumb',
      label: 'Shipper Phone Number',
      placeholder: 'Shipper Phone Number',
      type: 'text',
      component: 'shipperphonumb',
      options: [],
    },
    {
      id: 'recieverphonumb',
      label: 'Reciever Phone Number',
      placeholder: 'Reciever Phone Number',
      type: 'text',
      component: 'recieverphonumb',
      options: [],
    },
    {
      id: 'shipperemail',
      label: 'Shipper Email',
      placeholder: 'Shipper Email',
      type: 'text',
      component: 'shipperemail',
      options: [],
    },
    
   {
    id: 'recieveremail',
    label: 'Reciever Email',
    placeholder: 'Reciever Email',
    type: 'text',
    component: 'recieveremail',
    options: [],
  },
  {
    id: 'itemdescription',
    label: 'Description',
    placeholder: 'Description',
    type: 'text',
    component: 'itemdescription',
    options: [],
  },

  {
    id: 'departuredate',
    label: 'Departure Date',
    placeholder: 'Departure Date',
    type: 'text',
    component: 'departuredate',
    options: [],
  },
  {
    id: 'estdeliverytime',
    label: 'Est Delivery Time',
    placeholder: 'Est Delivery Time',
    type: 'text',
    component: 'estdeliverytime',
    options: [],
  },
  {
    id: 'longitude',
    label: 'Longitude',
    placeholder: 'Longitude',
    type: 'text',
    component: 'longitude',
    options: [],
  },
  {
    id: 'latitude',
    label: 'Latitude',
    placeholder: 'Latitude',
    type: 'text',
    component: 'latitude',
    options: [],
  },

  {
    id: 'typeofpackage',
    label: "Select Package",
    placeholder: 'Type of Package',
    type: '',
    component: 'typeofpackage',
    options: typeOfPackage,
  }, 
  {
    id: 'modeoftransport',
    label: "Mode of Transport",
    placeholder: 'Select Mode Of Transport',
    type: '',
    component: 'modeoftransport',
    options: ModeOfTransport,
  },
  {
    id: 'modeofpayment',
    label: "Mode of Payment",
    placeholder: 'Select Mode Of Payment',
    type: '',
    component: 'modeofpayment',
    options: ModeOfPayment,
  },
  {
    id: 'totalcharges',
    label: 'Total Charges',
    placeholder: 'Total Charges',
    type: 'text',
    component: 'totalcharges',
    options: [],
  },
    
  ]
  
  export const initialBlogFormData = {
    title : '',
    description : '',
    image : '',
  }