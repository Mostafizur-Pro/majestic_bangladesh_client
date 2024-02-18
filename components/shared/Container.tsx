const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="px-6 lg:px-8 mx-auto grid max-w-7xl">{children}</div>;
};

export default Container;
