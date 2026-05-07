export type Category = "all" | "watches" | "dresses" | "pants" | "tops";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: Exclude<Category, "all">;
  color: string;
  accent: string;
  badge?: string;
  description: string;
  details: string[];
  image: string;
  sizes: string[];
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export interface CheckoutData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  county: string;
  postalCode: string;
  delivery: "standard" | "express" | "sameday";
  paymentMethod: "card" | "mpesa";
  cardNumber: string;
  cardName: string;
  cardExpiry: string;
  cardCvv: string;
  mpesaPhone: string;
}
