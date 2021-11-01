import React from 'react'
import ReactDOM from "react-dom";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import projects from '../../../../constants/projects';

class MyGallery extends React.Component {
  render( project ) {
    const defaultImage = 'https://via.placeholder.com/850x600'

    const images = [
      {
        original: projects[0].Images.img1.original,
        thumbnail: projects[0].Images.img1.thumbnail
      },
      {
        original: projects[0].Images.img2.original,
        thumbnail: projects[0].Images.img2.thumbnail
      },
      {
        original: projects[0].Images.img3.original,
        thumbnail: projects[0].Images.img3.thumbnail
      },
      {
        original: projects[0].Images.img4.original,
        thumbnail: projects[0].Images.img4.thumbnail
      },
      {
        original: projects[0].Images.img5.original,
        thumbnail: projects[0].Images.img5.thumbnail
      }
    ];

    const someComponent = props => {
      // console.log(props.someProps.objectKey)
      return <div>{/* {props.someProps.objectKey} */}</div>;
    };

    return (
      <ImageGallery
        key={projects.Id}
        items={images}
        defaultImage={defaultImage}
        showBullets={true}
        showIndex={false}
        showThumbnails={true}
        lazyLoad={true}
        showPlayButton={false}
        renderCustomControls={someComponent} 
      />
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<MyGallery />, rootElement);

function ProjectImage({ data }) {
    return (
        <>
            <MyGallery key={data.Id} data={data}/>
        </>
    )
}

export default ProjectImage
