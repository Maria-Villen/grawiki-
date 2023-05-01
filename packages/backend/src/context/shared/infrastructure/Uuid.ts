import { v4 as uuidv4, validate } from 'uuid';
import { IUuid } from '../domain/IUuid';

export class Uuid implements IUuid {
  
  generate(): string {
    return uuidv4();
  }

  validate(uuid: string): boolean {
    return validate(uuid);
  }
}