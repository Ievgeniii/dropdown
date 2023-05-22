import { dispatchCustomEvent, EVENT_NAME } from './customEvent';

test('dispatch should emit event with correct data', () => {
  const listener = jest.fn();

  document.addEventListener(EVENT_NAME, listener);

  const el = document.createElement('div');
  document.body.append(el);

  dispatchCustomEvent(el, 42);

  expect(listener).toHaveBeenCalledWith(
    expect.objectContaining({
      detail: {
        optionIndex: 42
      }
    })
  );
});
