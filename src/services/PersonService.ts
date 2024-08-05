import { AppDataSource } from "../data-source";
import { Person } from "../entities/Person.js";

export class PersonService {
  public async SavePerson(updatedPerson: Person): Promise<Person> {
    const person = await AppDataSource.getRepository(Person)
      .createQueryBuilder("person")
      .where("person.id = :id", { id: updatedPerson.id })
      .getOne();

    return person;
  }
}
