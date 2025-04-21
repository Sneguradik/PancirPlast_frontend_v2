import {API_BACKEND} from "./Consts";
import {IContactForm} from "./Entities";

export async function sendApplication(form:IContactForm):Promise<boolean> {
  const req = await fetch(API_BACKEND.backend+"/contact_application/add",{
    method: 'POST',
    credentials: 'include',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  });

  return req.ok;
}