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
     return (
      <div>
        <p>I call toFixed on each of the props to show that typescript understands that the value is not undefined.</p>
        <table>
          <tbody>
            <tr>
              <td>Required Attribute</td>
              <td>{this.props.reqiredNumber.toFixed(0)}</td>
            </tr>
            <tr>
              <td>Optional Attribute</td>
              <td>{typeof this.props.optionalNumber === 'undefined' ? 0 : this.props.optionalNumber.toFixed(0)}</td>
            </tr>
            <tr>
              <td>Optional Attribute with Default</td>
              <td>{this.props.optionalNumberWithDefault.toFixed(0)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  public test1(): JSX.Element {
    return <Counter reqiredNumber={2} />;
  }

  public test2(): JSX.Element {
    return <Counter reqiredNumber={2} optionalNumberWithDefault={4} />;
  }

  public test3(): JSX.Element {
    return <Counter reqiredNumber={2} optionalNumber={3} optionalNumberWithDefault={4} />;
  }

  public test4(): JSX.Element {
    return <Counter reqiredNumber={2} optionalNumber={3} />;
  }

}