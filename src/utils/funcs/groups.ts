import { usePersistentPersonsStore } from "../../state/stores/usePersistentPersonsStore";
import { groups } from "../data/groups";

export const getAvailableGroupsFromPersons = () => {
  const persons = usePersistentPersonsStore.getState().persons;
  const uniqueGroups = persons.map(person => person.group).filter((group, index, self) => self.indexOf(group) === index);
  return uniqueGroups.map(groupId => groups[groupId as keyof typeof groups]);
}