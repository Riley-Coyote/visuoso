import { ParticleField } from "@nexus/particle-engine";
import { useNexus } from "@nexus/store";
import MessengerHTML from "@nexus/ui/static/MessengerHTML";

export default function MessengerPage() {
  const { activeLayer } = useNexus();
  return (
    <>
      <ParticleField />
      <MessengerHTML activeLayer={activeLayer}/>
    </>
  );
}
