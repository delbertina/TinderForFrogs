export interface FrogDetailsProps {
    className?: string;
    children?: React.ReactNode
}

const FrogDetails = (props: FrogDetailsProps) => {
    return <div className={props.className}>{props.children}</div>
}

export default FrogDetails