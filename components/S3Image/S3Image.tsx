import Storage from "@aws-amplify/storage";
import React from 'react';

interface IS3ImageProps {
  component: any;
  urlProp?: string;
  imageKey?: string;
  identityId: string;
  path: string;
  title?: string;
  alt?: string;
  className?: string;
  onClick?: any;
}

interface IS3ImageState {
  imageSrc?: any;
}

class S3Image extends React.Component<
  IS3ImageProps,
  IS3ImageState
> {
  public static defaultProps: Partial<IS3ImageProps> = {
    urlProp: 'src',
  };

  constructor(props) {
    super(props);
    this.loadImage = this.loadImage.bind(this);
    this.state = {};
  }

  public componentDidMount() {
    this.loadImage();
  }

  public componentDidUpdate(prevProps) {
    if (prevProps.imageKey !== this.props.imageKey) {
      this.loadImage();
    }
  }

  public loadImage() {
    const { imageKey, identityId, path } = this.props;
    if (imageKey && identityId) {
      Storage.get(`${path}/${imageKey}`, { identityId })
        .then(result => this.setState({ imageSrc: result }))
        .catch(err => console.error(err));
    }
  }

  public render() {
    const { component, imageKey, identityId, path, urlProp, ...props } = this.props;

    if (this.state.imageSrc) {
      return React.createElement(component, {
        ...props,
        // @ts-ignore
        [urlProp]: this.state.imageSrc,
      });
    }

    return null;
  }
}

export default S3Image;
