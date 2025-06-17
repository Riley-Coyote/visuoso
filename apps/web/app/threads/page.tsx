import { ParticleField } from "@nexus/particle-engine";
import { useNexus } from "@nexus/store";
import ThreadsHTML from "@nexus/ui/static/ThreadsHTML";

export default function ThreadsPage() {
  const { activeLayer } = useNexus();
  return (
    <>
      <ParticleField />
      <ThreadsHTML activeLayer={activeLayer}/>
    </>
  );
}
