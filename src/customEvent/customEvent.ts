export const EVENT_NAME = 'dropdown-change';

declare global {
  interface DocumentEventMap {
    [EVENT_NAME]: CustomEvent;
  }
}

export const dispatchCustomEvent = (el: HTMLElement | null, optionIndex: number): void => {
  const event = new CustomEvent(EVENT_NAME, {
    bubbles: true,
    cancelable: true,
    composed: true,
    detail: {
      optionIndex
    }
  });

  el?.dispatchEvent(event);
}

