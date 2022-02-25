import { Music } from './music.model';

describe('Music', () => {
  it('has a languageName of "TypeScript"', () => {
    const music: Music = {
      data: []
    };
    expect(music).toBeTruthy();
});
});
