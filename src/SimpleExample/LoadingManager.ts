import ISubscriber from "./ISubscriber";

class LoadingManager {
  private view: ISubscriber | undefined;
  private _isLoading: boolean;

  constructor() {
    this._isLoading = false;
  }

  setView(view: ISubscriber): void {
    this.view = view;
  }

  isLoading(): boolean {
    return this._isLoading;
  }

  private stopLoading(): void {
    this._isLoading = false;
    this.updateView();
  }

  private updateView(): void {
    if (this.view) {
      this.view.update();
    }
  }

  makeLoadingHappen(): void {
    this._isLoading = true;
    this.updateView();
    setTimeout(() => {
      this.stopLoading();
    }, 2000);
  }
}

export default LoadingManager;
