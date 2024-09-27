import { AppleStyleDock } from "@/widgets/navbar/Dock";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <AppleStyleDock />
    </>
  );
}
