import { ToPersianNumberPipe } from "./to-persian-number.pipe";

describe('ToPersianNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new ToPersianNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
