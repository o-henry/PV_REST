export interface IText {
  /**
   * @style : 조건부 렌더링을 위한 props
   * @children : inner text
   */

  style?: string;
  children: string;
}

export interface IButton {
  /**
   * @style : 조건부 렌더링을 위한 props
   * @children : inner text
   * @onclick : click events
   */

  style?: string;
  children?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
