export class Blog {
  constructor( private _id:number,
  private _title: string,
  private _description: string,
  private _category: string) {
  }

  public get id() {return this._id; }
  public set id(val) { this._id = val;}
  public get title() { return this._title};
  public get description() { return this._description};
  public  get category() { return this._category};
}
