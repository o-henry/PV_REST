export interface IProps {
  /**
   * @children : prop text
   * @style : 조건부 CSS 위한 props
   */

  children?: any;
  style?: string;
}

export interface IText extends IProps {}

export interface ICount extends IProps {}

export interface IButton extends IProps {
  /**
   * @onclick : click events
   */

  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
