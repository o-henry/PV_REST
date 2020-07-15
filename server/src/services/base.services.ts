import { Service } from "typedi";
import { Repository, getConnection } from "typeorm";

export type ObjectType<T> = { new (): T } | Function;

@Service()
export abstract class BaseService<T extends any> {
  protected repository: Repository<T> | null;
  private repo: ObjectType<T>;

  constructor(repo: ObjectType<T>) {
    this.repository = getConnection().getRepository(repo);
    this.repo = repo;
  }
}
