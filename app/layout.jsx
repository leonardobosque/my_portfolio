import "./globals.css";

export const metadata = {
  title: "Portfolio — Leonardo Henrique Bosque",
  description:
    "Portfolio de desenvolvedor fullstack — construindo produtos do banco de dados até a interface.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
