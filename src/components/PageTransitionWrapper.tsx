import {motion, MotionStyle} from 'framer-motion';

const pageTransition = {
    in: {
        opacity: 1,
        x: 0,
        scale: 1,
        rotate: 0
    },
    out: {
        opacity: 0,
        x: "100%",
        scale: 0.8,
        rotate: 90
    }
};

const pageStyle: MotionStyle = {
    position: "absolute",
    width: "100%"
};


const PageTransitionWrapper = ({ children }) => (
    <motion.div
        style={pageStyle}
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    >
        {children}
    </motion.div>
);

export default PageTransitionWrapper;
