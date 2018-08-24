import * as React from 'react';

interface IRequiredProps {
  reqiredNumber: number;
}

interface IDefaultProps {
  optionalNumber: number;
}

type IProps = IRequiredProps & IDefaultProps

export default class Counter extends React.Component<IProps> {

  public static defaultProps: IDefaultProps = {
    optionalNumber: 100,
  };

  public render() {
    const initialSum = this.props.reqiredNumber + this.props.optionalNumber;
    return (
      <div>
        <p>Initial sum passed by attributes is {initialSum}.</p>
      </div>
    );
  }

}