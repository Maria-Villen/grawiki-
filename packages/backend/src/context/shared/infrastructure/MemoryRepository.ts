import { EntityBase } from "../domain/EntityBase";
import { IRepository } from "../domain/IRepository";


export class MemoryRepository<T extends EntityBase> implements IRepository<T> {

    protected entities: T[] = [];

    async create(entity: T): Promise<void> {
        this.entities.push(entity);
    }

    async update(entity: T): Promise<void> {
        const index = this.entities.findIndex(e => e.id === entity.id);
        if (index !== -1) {
            this.entities[index] = entity;
        } else {
            throw new Error(`Entity with id ${entity.id} not found`);
        }
    }

    async delete(entity: T): Promise<void> {
        const index = this.entities.findIndex(e => e.id === entity.id);
        if (index !== -1) {
            this.entities.splice(index, 1);
        } else {
            throw new Error(`Entity with id ${entity.id} not found`);
        }
    }

    async getAll(): Promise<T[]> {
        return this.entities;
    }

    async getById(id: string): Promise<T | null> {
        const entity = this.entities.find(e => e.id === id);
        return entity || null;
    }

}
