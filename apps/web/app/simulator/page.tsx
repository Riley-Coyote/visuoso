import { ParticleField } from "@nexus/particle-engine";
import { useNexus } from "@nexus/store";
import SimulatorHTML from "@nexus/ui/static/SimulatorHTML";

export default function SimulatorPage() {
  const { activeLayer } = useNexus();
  return (
    <>
      <ParticleField />
      <SimulatorHTML activeLayer={activeLayer}/>
    </>
  );
}
