import { Booking } from "../booking/Booking";

export type Tour = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  endDate: Date | null;
  name: string | null;
  bookings?: Array<Booking>;
  startDate: Date | null;
  price: number | null;
};
