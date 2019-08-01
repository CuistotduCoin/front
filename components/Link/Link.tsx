import MuiLink from "@material-ui/core/Link";
import cx from "classnames";
import { withRouter } from "next/router";
import React from "react";
import NextLink from "./NextLink";

interface ILinkProps {
  activeClassName?: string;
  as?: string;
  className?: string;
  href?: string;
  onClick?: any;
  prefetch?: boolean;
  router: any;
  target?: string;
  rel?: string;
  other?: any;
  naked?: boolean;
  passHref?: any;
}

export class Link extends React.Component<ILinkProps, {}> {
  public static defaultProps: Partial<ILinkProps> = {
    activeClassName: "active"
  };

  public render() {
    const {
      activeClassName,
      router,
      className: classNameProps,
      target,
      rel,
      naked,
      passHref,
      ...other
    } = this.props;

    const className = cx(classNameProps, {
      [activeClassName]: router.pathname === this.props.href && activeClassName
    });

    if (naked) {
      return (
        <NextLink
          className={className}
          {...other}
          target={target}
          rel={rel}
          passHref={passHref}
        />
      );
    }

    return (
      <MuiLink
        component={NextLink}
        className={className}
        {...other}
        target={target}
        rel={rel}
        passHref={passHref}
        underline="none"
      />
    );
  }
}

export default withRouter(Link);
