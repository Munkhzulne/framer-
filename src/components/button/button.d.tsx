export interface ButtonType {
    type?: 'primary' | 'secondary' | 'small' | 'error';
    role?: 'primary' | 'secondary' | 'error';
    backgroundHoverColor?;

    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    onClick?: () => any;
    loading?: boolean;
    disabled?: boolean;
}
