import { StringValueObject } from "../../shared/domain/StringValueObject";


export class UserNickname extends StringValueObject {
    constructor(value: string) {
      super(value);
      this.ensureLengthIsAtLeast6Characters(value);
    }
  
    private ensureLengthIsAtLeast6Characters(value: string) {
      if (value.length < 8) {
        throw new Error("El nickname debe tener al menos 6 caracteres.");
      }
    }
  }