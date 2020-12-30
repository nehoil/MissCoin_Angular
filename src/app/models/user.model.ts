import { Move } from "./move.model";

export class User {
  constructor(
    public _id?: string,
    public name: string = '',
    public coins: number = 100,
    public email: string = '',
    public moves: any = ''
  ) {}

  setId?() {
    var txt = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    this._id = txt;
  }
}
