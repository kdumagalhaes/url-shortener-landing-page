interface CopyButton {
  clickHandler: () => void;
}
export function CopyButton({ clickHandler }: CopyButton) {
  return <button onClick={clickHandler}>Copy</button>;
}
