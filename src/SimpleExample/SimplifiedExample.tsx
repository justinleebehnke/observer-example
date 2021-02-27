import { Component, ReactElement } from "react";
import ILoadingManager from "./ILoadingManager";
import ISubscriber from "./ISubscriber";

type Props = {
  presenter: ILoadingManager;
};

class SimplifiedExample extends Component<Props> implements ISubscriber {
  componentDidMount(): void {
    const { presenter } = this.props;
    presenter.setView(this);
  }

  render(): ReactElement {
    if (this.props.presenter.isLoading()) {
      return (
        <div className="scorecard">
          <p>LOADING</p>
        </div>
      );
    }

    return (
      <div className="scorecard">
        <button
          type="submit"
          onClick={() => this.props.presenter.makeLoadingHappen()}
        >
          START LOADING
        </button>
      </div>
    );
  }

  update = (): void => {
    this.setState({});
  };
}

export default SimplifiedExample;
