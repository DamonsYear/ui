"use client";

import StyledComponentsRegistry from "../lib/Registry";
import { ToastProvider } from "@damons-ui/toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <ToastProvider>{children}</ToastProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
