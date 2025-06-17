import { ParticleField } from "@nexus/particle-engine";
import { useNexus } from "@nexus/store";
import ConstellationHTML from "@nexus/ui/static/ConstellationHTML";

export default function ConstellationPage() {
  const { activeLayer } = useNexus();
  return (
    <>
      <ParticleField />
      <ConstellationHTML activeLayer={activeLayer}/>
    </>
  );
}
