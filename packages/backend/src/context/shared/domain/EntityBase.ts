import { IUuid } from "./IUuid";

export abstract class EntityBase {
	id: string;
	createdAt: Date;
	createdBy: string;
	modifiedAt?: Date;
	modifiedBy?: string;

	constructor(id: IUuid, createdBy: string) {
		this.id = id.generate();
		this.createdAt = new Date();
		this.createdBy = createdBy;
	}
}