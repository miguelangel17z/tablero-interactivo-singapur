import PasswordGate from "@/components/PasswordGate";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <PasswordGate>
      <Dashboard />
    </PasswordGate>
  );
}
