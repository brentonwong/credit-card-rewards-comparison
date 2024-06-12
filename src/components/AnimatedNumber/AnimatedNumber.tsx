import { animated, useSpring } from "@react-spring/web";
import { FC } from "react";

export const AnimatedNumber: FC<{
  value: number;
  className?: string;
}> = ({ className, value }) => {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: value },
    delay: 500,
  });
  return (
    <animated.div className={className}>
      {number.to((n) => n.toFixed(0))}
    </animated.div>
  );
};
