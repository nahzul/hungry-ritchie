import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const FadeInFromTop = ({ duration, children }) => {
  const [show, setShow] = useState(true);

  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: show ? 1 : 0, transform: show ? 'translateY(0)' : 'translateY(-50px)' },
    config: { duration: duration},
    onRest: () => setShow(true)
  });

  return <animated.div style={animation}>{children}</animated.div>;
};

export default FadeInFromTop;
