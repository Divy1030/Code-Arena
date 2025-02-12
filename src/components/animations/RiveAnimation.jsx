import { useRive } from 'rive-react';

const RiveAnimation = () => {
  const { RiveComponent } = useRive({
    src: '/animation/technology10.riv',
    stateMachines: 'State Machine 1',  // Ensure this path is correct and the file is accessible
    autoplay: true,                    // Automatically play on load
  });

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <RiveComponent style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default RiveAnimation;