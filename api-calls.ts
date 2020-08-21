import axios from 'axios'

export type User = {name:string, id:number, isAdmin:boolean}

export async function getProfile():Promise<User>{
  const {data} = await axios.get<User>('/api/profile')
  return data;
}