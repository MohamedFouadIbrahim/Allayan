import React, { useState } from 'react';
import Animated from 'react-native-reanimated';
import DrawerAnimationContext from './Context';

const DrawerAnimationProvider = (props: any) => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  console.log('updated')
  return (
    <DrawerAnimationContext.Provider
      value={{
        progress: progress,
        setProgress: (newProgress: any) => setProgress(newProgress)
      }}
    >
      {props.children}
    </DrawerAnimationContext.Provider>
  );
};

export { DrawerAnimationProvider };
export default DrawerAnimationProvider;