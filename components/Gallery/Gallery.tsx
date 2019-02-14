import React from "react";
import Lightbox from 'react-images';
import RGallery from "react-photo-gallery";

export interface IGalleryProps {
  classes?: any;
  photos: any;
}

interface IGalleryState {
  currentImage: number;
  lightboxIsOpen: boolean;
}

export class Gallery extends React.Component<IGalleryProps, IGalleryState> {
  constructor(props: IGalleryProps) {
    super(props);
    this.state = { currentImage: 0, lightboxIsOpen: false };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  public openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  public closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  public gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  public gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  public render() {
    const { photos } = this.props;

    return (
      <div>
        <RGallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          backdropClosesModal={true}
          imageCountSeparator="/"
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

export default Gallery as any;
