import { Booking } from "../booking/Booking";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  email: string | null;
  bookings?: Array<Booking>;
};
