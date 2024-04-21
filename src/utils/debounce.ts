export const debounce = (callback: (...arg: any) => void, timer: number) => {
  let timeOutId: NodeJS.Timeout;

  return (...arg: any[]) => {
    clearTimeout(timeOutId);

    timeOutId = setTimeout(() => {
      callback(...arg);
    }, timer);
  };
};
