import { Customer } from "../customer/Customer";
import { Tour } from "../tour/Tour";

export type Booking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  bookingDate: Date | null;
  customer?: Customer | null;
  tour?: Tour | null;
};
