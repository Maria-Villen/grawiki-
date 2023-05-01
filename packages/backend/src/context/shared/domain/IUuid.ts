export interface IUuid {
    generate(): string;
    validate(uuid: string): boolean;
  }
  