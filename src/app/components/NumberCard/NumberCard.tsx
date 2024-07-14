import classNames from 'classnames';
import styles from './numberCard.module.scss'

interface NumberCardProps {
    className?: string;
    value: number;
}

export const NumberCard = ({ value, className }: NumberCardProps) => {
    return <div className={classNames(className, styles.numberCard)}>{value}</div>;
};
