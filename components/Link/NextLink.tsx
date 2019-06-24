import Link from 'next/link';
import React from 'react';

interface INextLinkProps {
    as?: string,
    href?: string,
    prefetch?: boolean,
    target?: string,
    className?: string,
    rel?: string,
    passHref?: any,
    other?: any
}

export class NextLink extends React.Component<INextLinkProps, {}> {

    public render() {
        const { as, href, prefetch, target, rel, passHref, ...other } = this.props;

        return (
            <Link href={href} prefetch={prefetch} as={as} passHref={passHref}>
                <a {...other} target={target} rel={rel} />
            </Link >
        );
    }
}

export default NextLink;