import { BookingCreateNestedManyWithoutToursInput } from "./BookingCreateNestedManyWithoutToursInput";

export type TourCreateInput = {
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  bookings?: BookingCreateNestedManyWithoutToursInput;
  startDate?: Date | null;
  price?: number | null;
};
