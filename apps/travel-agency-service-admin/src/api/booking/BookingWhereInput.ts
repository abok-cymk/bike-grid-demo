import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";

export type BookingWhereInput = {
  id?: StringFilter;
  bookingDate?: DateTimeNullableFilter;
  customer?: CustomerWhereUniqueInput;
  tour?: TourWhereUniqueInput;
};
