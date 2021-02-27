import ISubscriber from "./ISubscriber";

interface ILoadingManager {
  setView(view: ISubscriber): void;
  isLoading(): boolean;
  makeLoadingHappen(): void;
}

export default ILoadingManager;
