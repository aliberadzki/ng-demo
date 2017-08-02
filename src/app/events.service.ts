import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Event } from './event';

@Injectable()
export class EventsService {

  constructor() { }

  getEvents() {
    let subject = new Subject();
    setTimeout(
      () => {
        subject.next(EVENTS); subject.complete();
      },
      100);
    return subject;
  }

  getEvent(id: number) {
    return EVENTS.find(event => event.id === id);
  }

  addEvent(event: Event) {
    EVENTS.push(event);
  }
}

const EVENTS: Event[] = [
  {
    id:1,
    name:"Spring data JPA workshop",
    points: 5,
    date: new Date('2017-07-01T00:00:00'),
    description: "Praesent tortor mauris, bibendum in ultricies non, vestibulum id nisl. Praesent vestibulum nisl eget dictum interdum. Morbi eget enim sapien. Praesent ultrices eros suscipit, bibendum sem a, vulputate arcu. Pellentesque sit amet velit fringilla, bibendum sapien at, aliquam tortor. Aenean imperdiet, nibh eu volutpat suscipit, eros velit ultrices eros, vitae aliquet ex quam in leo. Morbi molestie, nisi ut tempor lobortis, urna magna suscipit massa, volutpat accumsan magna tellus at mauris. Vestibulum ac condimentum nisi. Duis varius ligula ac felis vehicula scelerisque. Nulla maximus enim et rutrum aliquet. Cras in tempus purus..",
    isFavorite: false,
    author: "Mariusz Paszczak",
    tags: ["Java", "Spring"]
  },
  {
    id:2,
    name:"Angular workshop",
    points:4,
    date: new Date('2017-08-03T00:00:00'),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque, lectus in tempor iaculis, nisl odio consectetur enim, dignissim sodales dolor ligula a enim. Nunc in libero eget enim faucibus aliquam. Integer sit amet eleifend mi. Vivamus efficitur fermentum lobortis. Aenean fermentum, enim sit amet fringilla bibendum, nisl lorem pretium erat, eu volutpat nisi nunc in orci. Sed mauris tortor, maximus quis egestas non, maximus vel nisi. Maecenas aliquet ut quam in faucibus. Ut congue justo orci, quis dignissim nisi semper et..",
    isFavorite: true,
    author: "Andrzej Trąba",
    tags: ["JS", "Front-end"]
  },
  {
    id:3,
    name:"JUnit training",
    points:0,
    date: new Date('2017-09-08T00:00:00'),
    description: "Praesent tortor mauris, bibendum in ultricies non, vestibulum id nisl. Praesent vestibulum nisl eget dictum interdum. Morbi eget enim sapien. Praesent ultrices eros suscipit, bibendum sem a, vulputate arcu. Pellentesque sit amet velit fringilla, bibendum sapien at, aliquam tortor. Aenean imperdiet, nibh eu volutpat suscipit, eros velit ultrices eros, vitae aliquet ex quam in leo. Morbi molestie, nisi ut tempor lobortis, urna magna suscipit massa, volutpat accumsan magna tellus at mauris. Vestibulum ac condimentum nisi. Duis varius ligula ac felis vehicula scelerisque. Nulla maximus enim et rutrum aliquet. Cras in tempus purus..",
    isFavorite: false,
    author: "Patryk Taki",
    tags: ["Java", "Testy"]
  },
  {
    id:4,
    name:"CQRS i Event Sourcing",
    points:0,
    date: new Date('2017-10-08T00:00:00'),
    description: "Praesent tortor mauris, bibendum in ultricies non, vestibulum id nisl. Praesent vestibulum nisl eget dictum interdum. Morbi eget enim sapien. Praesent ultrices eros suscipit, bibendum sem a, vulputate arcu. Pellentesque sit amet velit fringilla, bibendum sapien at, aliquam tortor. Aenean imperdiet, nibh eu volutpat suscipit, eros velit ultrices eros, vitae aliquet ex quam in leo. Morbi molestie, nisi ut tempor lobortis, urna magna suscipit massa, volutpat accumsan magna tellus at mauris. Vestibulum ac condimentum nisi. Duis varius ligula ac felis vehicula scelerisque. Nulla maximus enim et rutrum aliquet. Cras in tempus purus..",
    isFavorite: false,
    author: "Jarosław Kurczakowski",
    tags: ["Skalowalność", "Architektura"]
  }
];
