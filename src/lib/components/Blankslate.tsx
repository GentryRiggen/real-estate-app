type Props = {
  children: string;
};

export default function Blankslate({ children }: Props) {
  return (
    <div className="flex flex-col w-full items-center p-8">
      <p data-testid="blankslate" className="text-foreground text-2xl">
        {children}
      </p>
    </div>
  );
}
