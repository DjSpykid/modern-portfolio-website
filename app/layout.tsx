// import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// import "./globals.css";
// import { ThemeProvider } from "./provider";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Daniel's Portfolio",
//   description: "A Modern Portfolio Web App",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <link rel="icon" href="/myLogo.jpg" sizes="any" />
//       </head>
//       <body className={inter.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="dark"
//           enableSystem
//           disableTransitionOnChange
//         >
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }




import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Daniel Portfolio</title>
        <meta name="description" content="A Modern Portfolio Web App" />
        <link rel="icon" href="/myLogo.jpg" sizes="any" />
      </head>
      <body className={inter.className}>
        {/* Uncomment the next line if ThemeProvider is working correctly */}
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        > */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
