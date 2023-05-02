type Class<T> = new (...args: any[]) => T;

export class ServiceCollection {
  private registry = new Map<string, {
    clazz: Class<any>,
    instance: any,
    dependencies: string[],
  }>();
  
  register<T>(name: string, clazz: Class<T>, dependencies: string[] = []): void {
    this.registry.set(name, {
      clazz,
      instance: null,
      dependencies,
    });
  }
  
  resolve<T>(name: string): T {
    const registration = this.registry.get(name);
    if (!registration) {
      throw new Error(`Dependency could not be resolved ${name}`);
    }
  
    if (!registration.instance) {
      const dependencies = this.resolveDependencies(registration.clazz);
      registration.instance = new registration.clazz(...dependencies);
    }
  
    return registration.instance;
  }
  
  private resolveDependencies(clazz: Class<any>): any[] {
    const dependencies: any[] = [];
  
    const paramNames = this.getParamNames(clazz);
  
    paramNames.forEach((paramName: string) => {
      const dependencyName = `${paramName.charAt(0).toUpperCase()}${paramName.slice(1)}`;
      const dependency = this.resolve(dependencyName);
      dependencies.push(dependency);
    });
  
    return dependencies;
  }
  
  private getParamNames(clazz: Class<any>): string[] {
    const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    const ARGUMENT_NAMES = /([^\s,]+)/g;
  
    const constructorString = clazz.toString().replace(STRIP_COMMENTS, '');
    const constructorParams = constructorString.slice(constructorString.indexOf('(') + 1, constructorString.indexOf(')')).match(ARGUMENT_NAMES);
      
    return constructorParams || [];
  }
}
