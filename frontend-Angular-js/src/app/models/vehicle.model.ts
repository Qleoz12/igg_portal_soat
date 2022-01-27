export interface VehicleWrapper {
    vehicle: Vehicle;
    PolicySelected: Policy;
  }
  
  interface Vehicle {
    id: number;
    brand: string;
    class: string;
    line: string;
    plate: string;
    model: string;
    policies: Policy[];
    owner: Owner;
  }
  
  interface Owner {
    id: number;
    email: string;
    address: string;
    id_document: string;
    phone: string;
    city: number;
    person: Person;
    editable: boolean;
  }
  
  interface Person {
    id: number;
    business_name: string;
    id_number: string;
  }
  
  export interface Policy {
    id: number;
    soat_code: number;
    description: string;
    amount: number;
    amount_discount: number;
    valid_from: string;
    valid_until: string;
    pje_descuento_ley: number;
    imp_descuento_ley: number;
    cod_causal: string;
    descripcion_causal: string;
  }