import { motion } from "framer-motion";
import { ComponentProps } from "react";

interface MotionDivProps extends ComponentProps<typeof motion.div> {
  visible: boolean;
}

const MotionDiv = (props: MotionDivProps) => {
  const { visible, children, ...rest } = props;

  return (
    <motion.div
      {...rest}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={{
        hidden: {
          height: 0,
          opacity: 0,
          transition: {
            height: { duration: 0.2, ease: "easeInOut" },
            opacity: { duration: 0.2, ease: "easeInOut" },
          },
        },
        visible: {
          height: "auto",
          opacity: 1,
          transition: {
            height: { duration: 0.2, ease: "easeInOut" },
            opacity: { duration: 0.2, ease: "easeInOut" },
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
