/**
 * A type for React functional components (`FC`) where the `children` prop is
 * explicitly marked as `readonly`. This ensures that the `children` prop
 * cannot be modified within the component, providing immutability for the children.
 */
export type ReadonlyChildrenFC<P = unknown> = React.FC<
  {
    readonly children: React.ReactNode;
  } & P
>;
