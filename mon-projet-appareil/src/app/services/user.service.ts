import {User} from '../model/user.model';

export class UserService {
  user:User[] = [
    {
      firstName:'Mawatta',
      lastName:'Camara',
      email:'mawatta.camara@gmail.com',
      preference:'Café au lait',
      hobbies:['voyage','cuisine','sport']
    }
  ];

  addUser(newUser:User){
    this.user.push(newUser);
  }
}
