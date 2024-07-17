import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";

export type BookingCreateInput = {
  bookingDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  tour?: TourWhereUniqueInput | null;
};
