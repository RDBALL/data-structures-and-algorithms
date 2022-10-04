'use strict';

const { AnimalShelter } = require('../stacks-and-queues/stack-and-queue');

describe('Testing AnimalShelter class', () => {
  let animalShelterTest = new AnimalShelter();
  let shelterAnimal1 = { name: 'RobDog', species: 'dog' };
  let shelterAnimal2 = { name: 'RobCat', species: 'cat' };
  let shelterAnimal3 = { name: 'BobDog', species: 'dog' };

  test('Enqueuing one animal', () => {

    animalShelterTest.enqueue(shelterAnimal1);

    expect(animalShelterTest.front.value).toEqual(shelterAnimal1);
  });

  test('Enqueuing multiple animals', () => {

    animalShelterTest.enqueue(shelterAnimal2);
    animalShelterTest.enqueue(shelterAnimal3);

    expect(animalShelterTest.front.value).toEqual(shelterAnimal1);
  });

  test('First animal will be dequeued in an optimal case', () => {

    expect(animalShelterTest.dequeue('dog')).toEqual(shelterAnimal1);
  });

  test('Dog at the back of the queue can be dequeued', () => {

    expect(animalShelterTest.dequeue('dog')).toEqual(shelterAnimal3);
  });

  test('Dequeue will fail if no more of the species are available', () => {

    expect(() => animalShelterTest.dequeue('dog')).toThrow();
  });

  test('Can dequeue last animal (which is a cat)', () => {

    expect(animalShelterTest.dequeue('cat')).toEqual(shelterAnimal2);
  });

  test('Cannot dequeue either cats or dogs because AnimalShelter is empty', () => {

    expect(() => animalShelterTest.dequeue('dog')).toThrow();
    expect(() => animalShelterTest.dequeue('cat')).toThrow();
  });

  test('Dequeue returns null if argument is neither \'cat\' or \'dog\'', () => {

    expect(animalShelterTest.dequeue('duck')).toBe(null);
  });
});