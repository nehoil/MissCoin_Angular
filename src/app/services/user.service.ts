import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs';
import { User } from '../models/user.model';
import { storageService } from './storage.service';

var loggedInUser: User = JSON.parse(localStorage.getItem('user_db')) 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //mock the server
  private _user$ = new BehaviorSubject<User>(loggedInUser)
  public user$ = this._user$.asObservable()

  constructor() {


  }
  public getLoggedInUser(): Observable<User> {
    const user = this._user$.getValue()
    return user ? of(user) : throwError(`User is not connected!`)
  }


 STORAGE_KEY = 'user_db'

  addMove(contact, amount){    
    const { _id: toId, name: to } = contact
    const move = {
      toId,
      to,
      amount,
      at: new Date()
    }
    var user = this._user$.getValue()    
    user.moves.push(move)
    user.coins -= amount
    this._user$.next({...user})
    storageService.store(this.STORAGE_KEY, loggedInUser)
    
    return move
  }
  
  getMovesById(id) {
   return this._user$.getValue().moves.filter(move => move.toId === id)
  }
  
  
  signup(name) {
    const user = {
      _id: this.makeId(5),
      name,
      email: 'somemail@gmail.com',
      coins: 100,
      moves: []
    }
    this._user$.next(user)
    storageService.store(this.STORAGE_KEY, this._user$.getValue())
  }
  
  getEmptyUser() {
    return { _id: this.makeId(5), name: '', coins: 100, moves: [] }
  }
  
  getUser() {
    return loggedInUser
  }

  makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
  }

  // public loadContacts(filterBy = null): void {

  //   let contacts = this._contacts$.getValue();
  //   if (filterBy && filterBy.term) {
  //     contacts = this._filter(contacts, filterBy.term)
  //   }
  //   this._contacts$.next(this._sort(contacts))
  // }

//   public getContactById(id: string): Observable<Contact> {
//     //mock the server work
//     const contact = this._contacts$.getValue().find(contact => contact._id === id)

//     //return an observable
//     return contact ? of(contact) : throwError(`Contact id ${id} not found!`)
//   }

//   public deleteContact(id: string) {
//     //mock the server work
//     const contacts = this._contacts$.getValue().filter(contact => contact._id !== id)

//     // change the observable data in the service - let all the subscribers know
//     this._contacts$.next(contacts)
//   }

//   public saveContact(contact: Contact) {
//     return contact._id ? this._updateContact(contact) : this._addContact(contact)
//   }

//   private _updateContact(contact: Contact) {
//     //mock the server work
//     const contacts = this._contacts$.getValue().map(c => contact._id === c._id ? contact : c)
//     // change the observable data in the service - let all the subscribers know
//     this._contacts$.next(this._sort(contacts))
//   }

//   private _addContact(contact: Contact) {
//     //mock the server work
//     const newContact = new Contact(undefined, contact.name, contact.email, contact.phone);
//     newContact.setId();
//     const contacts = [...this._contacts$.getValue(), newContact]
//     this._contacts$.next(this._sort(contacts))
//   }

//   private _sort(contacts: Contact[]): Contact[] {
//     return contacts.sort((a, b) => {
//       if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
//         return -1;
//       }
//       if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
//         return 1;
//       }

//       return 0;
//     })
//   }

//   private _filter(contacts, term) {
//     term = term.toLocaleLowerCase()
//     return contacts.filter(contact => {
//       return contact.name.toLocaleLowerCase().includes(term) ||
//         contact.phone.toLocaleLowerCase().includes(term) ||
//         contact.email.toLocaleLowerCase().includes(term)
//     })
//   }
}