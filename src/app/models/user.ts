import {IAddress} from "./address";
import {ICompany} from "./company";

export interface IUser{
  id: number,
  name: string,
  username: string,
  email: string,
  address: IAddress,
  phone: string,
  website: string,
  company: ICompany
}
