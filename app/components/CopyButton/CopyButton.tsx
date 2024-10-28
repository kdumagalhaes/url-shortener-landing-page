interface CopyButton {
  clickHandler: () => void;
  isCopied: boolean;
}
export function CopyButton({ clickHandler, isCopied }: CopyButton) {
  return (
    <button onClick={clickHandler}>{isCopied ? "Copied!" : "Copy"}</button>
  );
}
