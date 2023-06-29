export const metadata = {
  title: "Om Londhe | Projects",
  description: "Project showcase for Om Londhe's portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
