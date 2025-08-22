

export interface Option {
    label: string;
    value: string;
}
export interface FormControlItem {
    id: string;
    label: string;
    placeholder: string;
    type: string;
    component: string;
    options: Option[],
}
export interface BlogFormData {
    title : string;
    description: string;
    image : string;
  }
  export type Reciept = {
    id: string; 
    shippername: string;
    typeofpackage: string;
    recievername: string;
    createdAt: Date; 
    shipperaddress: string;
    recieveraddress: string;
    waybilnumber: string;
    weight: string;
    shipperphonumb: string;
    recieverphonumb: string;
    quantity: string;
    shipperemail: string;
    recieveremail: string;
    itemdescription: string;
    totalcharges: string; 
    modeoftransport: string;
    modeofpayment: string;
    departuredate: string; 
    estdeliverytime: string; 
    longitude: string;
    latitude: string;
  };
  export type OrderTimeline = {
  id: string;        
  orderId: string;   
  text: string;
  createDate: string; 
};

  export interface Order {
  id: string;
  userId: string;
  status: string;
  deliveryStatus: string;
  createDate: Date;
  progress: number;
  recieptId?: string | null;
  reciept?: Reciept | null;
  timeline?: OrderTimeline[]; 
}

  