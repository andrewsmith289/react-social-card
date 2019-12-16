import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
      <>
        <SiteLogo image={this.props.siteLogo} />
        <h2>{this.props.siteName}</h2>
        <h3>
          {this.props.siteTwitter} &#9679; {this.props.articleDate}
        </h3>
        <h4>{this.props.articleTitle}</h4>
        <h4>&#123; author: {this.props.authorTwitter} &#125;</h4>
      </>
    );
  }
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
      <>
        <img src={this.props.image} alt="Website Logo" />
      </>
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
      <>
        SocialActions
        <CommentsWidget />
        <ShareWidget />
        <LikeWidget />
        <EmailWidget />
      </>
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

class ShareWidget extends React.Component {
  render() {
    return (
      <div class="share-widget">
        <img src="share-32.png" alt="Share" />
      </div>
    );
  }
}

class LikeWidget extends React.Component {
  render() {
    return (
      <div class="like-widget">
        <img src="like-empty-32.png" alt="Like" />
      </div>
    );
  }
}

class EmailWidget extends React.Component {
  render() {
    return (
      <div className="email-widget">
        <img src="email-32.png" alt="Email Article" />
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
