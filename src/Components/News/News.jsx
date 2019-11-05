import React from 'react';

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgLoading: true
    }
  }

  onImgLoad = (event) => {
    this.setState({ imgLoading: false })
    event.target.style = 'none';
  }

  render() {
    const { data } = this.props;

    return (
      <div className='news'>
        <div className="news__img">
          {this.state.imgLoading && <p>Идет загрузка изображения...</p>}

          <img src={data.image} alt="news-img" onLoad={this.onImgLoad} style={hidden} />
        </div>
        <div className="news__content">
          <h3 className="news__title">{data.title}</h3>
          <p className="news__text">{data.content}</p>
        </div>
      </div>
    )
  }
}

const hidden = {
  visibility: 'hidden'
}
