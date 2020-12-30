export class Move {
  constructor(
    public toId?: string,
    public to: string = '',
    public amount: number = 100,
    public at: string = ''
  ) {}

}
