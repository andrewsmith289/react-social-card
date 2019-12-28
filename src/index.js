import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faComment,
  faHeart,
  faRetweet,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEnvelope, faComment, faHeart, faRetweet);

class SocialCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { site, author, article, social } = this.props.data.data[0];
    console.log(this.props.data.data);
    return (
      <article>
        <header>
          <HeaderBrief
            siteLogo={site.image}
            siteName={site.name}
            siteTwitter={site.twitter}
            articleDate={article.date}
            articleTitle={article.title}
            authorTwitter={author.twitter}
          />
        </header>
        <section>
          <ArticleDetails
            siteLogo={site.image}
            articleTitle={article.title}
            articleSummary={article.summary}
            authorName={author.name}
            authorImage={author.image}
            siteDomain={site.domain}
          />
        </section>
        <SocialActions />
      </article>
    );
  }
}

class HeaderBrief extends React.Component {
  render() {
    return (
      <div className="header-brief">
        <SiteLogo image={this.props.siteLogo} />
        <div className="main-content">
          <p>
            <SiteInfo
              name={this.props.siteName}
              twitter={this.props.siteTwitter}
            />
            <ArticleDate date={this.props.articleDate} />
          </p>
          <p>{this.props.articleTitle}</p>

          <p>&#123; author: {this.props.authorTwitter} &#125;</p>
        </div>
      </div>
    );
  }
}

function SiteInfo(props) {
  return (
    <>
      {props.name}
      <span className="site-twitter"> {props.twitter}</span>
    </>
  );
}

function ArticleDate(props) {
  return <span className="article-date">{props.date}</span>;
}

class ArticleDetails extends React.Component {
  render() {
    return (
      <>
        <IntroHeader
          siteLogo={this.props.siteLogo}
          articleTitle={this.props.articleTitle}
          authorName={this.props.authorName}
          authorImage={this.props.authorImage}
        />
        <ArticleSummary
          articleTitle={this.props.articleTitle}
          articleSummary={this.props.articleSummary}
          siteDomain={this.props.siteDomain}
        />
      </>
    );
  }
}

class IntroHeader extends React.Component {
  render() {
    return (
      <>
        <SiteLogo image={this.props.siteLogo} />
        <h1>{this.props.articleTitle}</h1>
        <AuthorBox
          name={this.props.authorName}
          image={this.props.authorImage}
        />
      </>
    );
  }
}

class SiteLogo extends React.Component {
  render() {
    return (
      <span className="site-logo">
        <img src={this.props.image} alt="Website Logo" />
      </span>
    );
  }
}

class AuthorBox extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt={this.props.name} />
      </div>
    );
  }
}

class ArticleSummary extends React.Component {
  render() {
    return (
      <div className="article-sumary">
        <h2>{this.props.articleTitle}</h2>
        <p>{this.props.articleSummary}</p>
        <p>{this.props.siteDomain}</p>
      </div>
    );
  }
}

class SocialActions extends React.Component {
  render() {
    return (
      <div class="social-actions">
        <CommentsWidget />
        <RetweetWidget />
        <LikeWidget />
        <EmailWidget />
      </div>
    );
  }
}

class CommentsWidget extends React.Component {
  render() {
    return (
      <div class="comments-widget">
        <img src="comment-32.png" alt="Comments" />
      </div>
    );
  }
}

class RetweetWidget extends React.Component {
  render() {
    return (
      <div class="retweet-widget">
        <FontAwesomeIcon icon="retweet" size="2x" />
      </div>
    );
  }
}

class LikeWidget extends React.Component {
  render() {
    return (
      <div class="like-widget">
        <FontAwesomeIcon icon="heart" size="2x" />
      </div>
    );
  }
}

class EmailWidget extends React.Component {
  render() {
    return (
      <div className="email-widget">
        <FontAwesomeIcon icon="envelope" size="2x" />
      </div>
    );
  }
}

const DATA = {
  data: [
    {
      site: {
        name: 'The Practical Dev',
        domain: 'dev.to',
        twitter: '@ThePracticalDev',
        image: 'path/to/img',
      },
      author: {
        name: 'Dave Ceddia',
        twitter: '@dceddia',
        image: 'path/to/img',
      },
      article: {
        title: 'Learning React? Start Small.',
        summary:
          "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.",
        date: 'Sep 10',
      },
      social: {
        comments: 2,
        shares: 47,
        likes: 190,
      },
    },
  ],
};

// =================================================================
ReactDOM.render(<SocialCard data={DATA} />, document.getElementById('root'));
