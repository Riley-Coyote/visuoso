"use client";
import { useNexus } from "@nexus/store";

export function NyraDock() {
  const { nyraOpen, set } = useNexus();
  return (
    <div style={{ position: "fixed", bottom: 20, right: 20 }}>
      <button onClick={() => set("nyraOpen", !nyraOpen)}>NYRA</button>
      {nyraOpen && <div>NYRA Dashboard</div>}
    </div>
  );
}
