import "@nexus/ui/globals.css";
import { NyraDock } from "@nexus/ui/NyraDock";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[color:var(--bg-primary)]">
        {children}
        <NyraDock /> {/* floating \ud83e\udd16 accessible everywhere */}
      </body>
    </html>
  );
}
