import React from 'react'

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import projects from '../../../../constants/projects';

class MyGallery extends React.Component {
  render() {
    const defaultImage = 'https://via.placeholder.com/850x600'

    console.log(this.props, 'my gallery log')




    return (
      <ImageGallery
        key={projects.Id}
        items={this.props.images}
        defaultImage={defaultImage}
        showBullets={true}
        showIndex={false}
        showThumbnails={true}
        lazyLoad={true}
        showPlayButton={false}
      />
    );
  }
}

function ProjectImage({ index }) {
  console.log(index, 'project image debug')
  const images = [
    {
      original: projects[index].Images.img1.original,
      thumbnail: projects[index].Images.img1.thumbnail
    },
    {
      original: projects[index].Images.img2.original,
      thumbnail: projects[index].Images.img2.thumbnail
    },
    {
      original: projects[index].Images.img3.original,
      thumbnail: projects[index].Images.img3.thumbnail
    },
    {
      original: projects[index].Images.img4.original,
      thumbnail: projects[index].Images.img4.thumbnail
    },
    {
      original: projects[index].Images.img5.original,
      thumbnail: projects[index].Images.img5.thumbnail
    }
  ];
  return (
    <>
      <MyGallery index={index} images={images} />
    </>
  )
}

export default ProjectImage
