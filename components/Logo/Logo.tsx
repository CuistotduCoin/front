import React from "react";

interface ILogoProps {
  className?: any;
  height?: number;
  width?: number;
}

export class Logo extends React.Component<ILogoProps, {}> {
  public static defaultProps: Partial<ILogoProps> = {
    height: 45,
    width: 45
  };

  public render() {
    const { height, width, className } = this.props;

    return (
      <img
        src="https://static.cuistotducoin.com/logo.svg"
        alt="Logo de Cuistot du coin"
        height={height}
        width={width}
        className={className}
      />
    );
  }
}

export default Logo as any;
