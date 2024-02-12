const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="bg-yellow-500 w-[90%] mx-auto">{children}</div>;
};

export default Container;
