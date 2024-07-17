import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TourWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  bookings?: BookingListRelationFilter;
  startDate?: DateTimeNullableFilter;
  price?: FloatNullableFilter;
};
