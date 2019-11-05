import React from 'react';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { getNews } from '../../actions/actionsCreaters'
import { connect } from 'react-redux';
import News from '../News/News'

class NewsPage extends React.Component {
  componentDidMount() {
    this.props.getNews()
  }

  render() {
    const { newsData } = this.props;
    const { news } = this.props.newsData
    // console.log(news)
    console.log(this.state)
    return (

      <React.Fragment>
        <HeaderMenu profile={true} />

        {news.length > 0 &&
          <div className="news-wrap">
            {news.map(el => <News key={el.id} data={el} />)}
          </div>}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  const { newsListState } = state
  return { newsData: newsListState }
}

const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    getNews: () => dispatch(getNews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage)