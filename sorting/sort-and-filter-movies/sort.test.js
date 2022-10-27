const Movies = require('./movies.js');
const { sortYear, sortTitle, inGenre } = require('./sort.js');

describe('Testing all sort methods', () => {
  it('Movies sorted by year', () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual(
      [
        'The Cotton Club',
        'Crocodile Dundee',
        'Beetlejuice',
        'The Shawshank Redemption',
        'Memento',
        'City of God',
        'Ratatouille',
        'Stardust',
        'Valkyrie',
        'The Intouchables',
      ]
    );
  });

  it('Movies sorted alphabetically by title', () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual(
      [
        'Beetlejuice',
        'City of God',
        'The Cotton Club',
        'Crocodile Dundee',
        'The Intouchables',
        'Memento',
        'Ratatouille',
        'The Shawshank Redemption',
        'Stardust',
        'Valkyrie',
      ]
    );
  });

  it('Movies sorted by genre tags', () => {
    const movies = (inGenre(Movies, 'Thriller'));
    expect(movies.map((m) => m.title)).toEqual(
      [
        'Memento',
        'Valkyrie',
      ]
    );
  });
});
