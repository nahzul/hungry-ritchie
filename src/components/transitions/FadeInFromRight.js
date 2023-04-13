import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const FadeInFromRight = ({ children }) => {
  const [show, setShow] = useState(true);

  const animation = useSpring({
    from: { opacity: 0, transform: 'translateX(100px)' },
    to: { opacity: show ? 1 : 0, transform: show ? 'translateX(0)' : 'translateX(100px)' },
    config: { duration: 500 },
    onRest: () => setShow(true)
  });

  return <animated.div style={animation}>{children}</animated.div>;
};

export default FadeInFromRight;
