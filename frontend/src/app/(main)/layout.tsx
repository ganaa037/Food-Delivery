import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Header sign={true} className="" />
      {children}
      <Footer />
    </div>
  );
}
