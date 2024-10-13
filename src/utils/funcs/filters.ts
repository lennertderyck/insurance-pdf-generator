import dayjs from "dayjs";
import { Event } from "../../types/identities";

export const shouldBeArchived = (event: Event) => {
  return [
    event.archived === null && dayjs().diff(dayjs(event.period.end), 'month') > 2,
    event.archived === true,
  ].some(Boolean);
}