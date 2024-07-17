import { BookingUpdateManyWithoutToursInput } from "./BookingUpdateManyWithoutToursInput";

export type TourUpdateInput = {
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  bookings?: BookingUpdateManyWithoutToursInput;
  startDate?: Date | null;
  price?: number | null;
};
