import { StringValueObject } from "../../shared/domain/StringValueObject";


export class UserPassword extends StringValueObject {
    constructor(value: string) {
      super(value);
      this.ensureLengthIsAtLeast8Characters(value);
    }
  
    private ensureLengthIsAtLeast8Characters(value: string) {
      if (value.length < 8) {
        throw new Error("La contraseña debe tener al menos 8 caracteres.");
      }
    }
  }