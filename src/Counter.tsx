import * as React from 'react';

interface IDefaultProps {
  optionalNumberWithDefault: number; // no typeguard or non-null assertion operator required
}

type IProps = {
  reqiredNumber: number;
  optionalNumber?: number; // typeguard or non-null assertion operator will be needed
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
        <Counter reqiredNumber={2} />
        <Counter reqiredNumber={2} optionalNumberWithDefault={4} />
        <Counter reqiredNumber={2} optionalNumber={3} optionalNumberWithDefault={4} />
        <Counter reqiredNumber={2} optionalNumber={3} />
      </div>
    );
  }

  /**
   * Creating variables of type IProps doesn't work the same way though
   */
  public test2() {
    const a: IProps = { reqiredNumber: 0 };
    const b: IProps = { reqiredNumber: 0, optionalNumberWithDefault: 0 };
    const c: IProps = { reqiredNumber: 0, optionalNumber: 0, optionalNumberWithDefault: 0 };
    const d: IProps = { reqiredNumber: 0, optionalNumber: 0 };
    return { a, b, c, d };
  }

  /**
   * We can declare type IProps = { ... } & Partial<DefaultProps>, but then we're back to using non-null assertion operators
   */
  public test3() {
    type IProps2 = { requiredNumber: number, optionalNumber?: number } & Partial<IDefaultProps>;
    const x: IProps2 = { requiredNumber: 0 };
    return x;
  }

}