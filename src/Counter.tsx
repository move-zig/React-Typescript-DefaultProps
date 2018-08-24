import * as React from 'react';

interface IDefaultProps {
  optionalNumberWithDefault: number; // no typeguard or non-null assertion operator required
}

type IProps = {
  requiredNumber: number;
  optionalNumber?: number; // typeguard or non-null assertion operator will be needed
} & IDefaultProps

export default class Counter extends React.Component<IProps> {

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
              <td>{this.props.requiredNumber.toFixed(0)}</td>
            </tr>
            <tr>
              <td>Optional Attribute</td>
              <td>{typeof this.props.optionalNumber === 'undefined' ? 'not supplied' : this.props.optionalNumber.toFixed(0)}</td>
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

  /**
   * We can create this component with all the expected combinations of parameters
   */
  public test1(): JSX.Element {
    return (
      <div>
        <Counter requiredNumber={2} />
        <Counter requiredNumber={2} optionalNumberWithDefault={4} />
        <Counter requiredNumber={2} optionalNumber={3} optionalNumberWithDefault={4} />
        <Counter requiredNumber={2} optionalNumber={3} />
      </div>
    );
  }

}