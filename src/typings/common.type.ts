export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
export type HtmlElementProps<T> = React.DetailedHTMLProps<
  React.HTMLAttributes<T>,
  T
>;
