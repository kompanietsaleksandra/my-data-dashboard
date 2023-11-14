import Link from 'next/link';
import { MotionStyle} from 'framer-motion';
import { Container, Title, Button } from '@/styles/HomeStyles';
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

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

export default function Home() {
    return (
        <PageTransitionWrapper
            style={pageStyle}
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
            transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
        >
            <Container>
                <Title>Data USA API Dashboard</Title>
                    <Link href="/summary" passHref>
                        <Button>View Summary</Button>
                    </Link>
            </Container>
        </PageTransitionWrapper>

    );
}
