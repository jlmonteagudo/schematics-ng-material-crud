export class Sort {

  constructor(public property, public direction) {}

  URLparam(): string {
    const param = (this.direction === 'desc') ? '-' : '';
    return param.concat(this.property);
  }
}
