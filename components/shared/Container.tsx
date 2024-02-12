const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="w-[80%] mx-auto">{children}</div>;
};

export default Container;
