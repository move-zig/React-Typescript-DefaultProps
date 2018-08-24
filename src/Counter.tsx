import * as React from 'react';

interface IDefaultProps {
  /** optional attribute -- no typeguard or non-null assertion operator required */
  optionalNumberWithDefault: number;
}

type IProps = {
  /** required attribute */
  reqiredNumber: number;
  /** optional attribute -- typeguard or non-null assertion operator will be needed */
  optionalNumber?: number;
} & IDefaultProps

export default class Counter extends React.Component<IProps> {

  /** now we get to declare our type here */
  public static defaultProps: IDefaultProps = {
    optionalNumberWithDefault: 100,
  };

  public render() {
    const a = this.props.reqiredNumber * this.props.reqiredNumber;

    let b: number;
    if (typeof this.props.optionalNumber === 'undefined') {
      b = 0;
    } else {
      b = this.props.optionalNumber * this.props.optionalNumber;
    }

    const c = this.props.optionalNumberWithDefault * this.props.optionalNumberWithDefault;

    return (
      <table>
        <tbody>
          <tr><td>a</td><td>{a}</td></tr>
          <tr><td>b</td><td>{b}</td></tr>
          <tr><td>c</td><td>{c}</td></tr>
        </tbody>
      </table>
    );
  }

}