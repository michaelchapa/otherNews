import Window from './Window';

const outlets = [
    {
        title: 'The New Yorker',
        url: 'https://www.newyorker.com/news',
        feed: 'https://www.newyorker.com/feed/news',
        lean: 'FL'
    },
    {
        title: 'New York Times - US News',
        url: 'https://www.nytimes.com/section/us',
        feed: 'https://rss.nytimes.com/services/xml/rss/nyt/US.xml',
        lean: 'FL'
    },
    {
        title: 'Daily Beast',
        url: 'https://thedailybeast.com',
        feed: 'https://www.thedailybeast.com/rss',
        lean: 'FL'
    },
    {
        title: 'The Atlantic',
        url: 'https://www.theatlantic.com/',
        feed: 'https://www.theatlantic.com/feed/all/',
        lean: 'L'
    },
    {
        title: 'CNN',
        url: 'https://www.cnn.com/',
        feed: 'http://rss.cnn.com/rss/cnn_topstories.rss',
        lean: 'L'
    }, 
    {
        title: 'The Economist',
        url: 'https://economist.com',
        feed: 'https://www.economist.com/united-states/rss.xml',
        lean: 'L'
    },
    {
        title: 'AP News - Top News',
        url: 'https://apnews.com/hub/ap-top-news',
        feed: 'https://rsshub.app/apnews/topics/apf-topnews',
        lean: 'C'
    },
    {
        title: 'BBC News - US & Canada',
        url: 'https://www.bbc.com/news/world/us_and_canada',
        feed: 'http://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml?edition=int#',
        lean: 'C'
    },
    {
        title: 'The Hill - Most Popular',
        url: 'https://thehill.com/',
        feed: 'https://thehill.com/rss/syndicator/19110',
        lean: 'C'
    },
    {
        title: 'Wall Street Journal',
        url: 'https://wsj.com', 
        feed: 'https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml',
        lean: 'C'
    },
    {
        title: 'Fox News - National',
        url: 'https://foxnews.com',
        feed: 'http://feeds.foxnews.com/foxnews/national',
        lean: 'R'
    },
    {
        title: 'Newsmax',
        url: 'https://newsmax.com',
        feed: 'https://www.newsmax.com/rss/Newsfront/16',
        lean: 'R'
    }, 
    {
        title: 'The American Conservative',
        url: 'https://www.theamericanconservative.com/',
        feed: 'https://www.theamericanconservative.com/articles/feed/',
        lean: 'R'
    },
    {
        title: 'National Review',
        url: 'https://www.nationalreview.com/',
        feed: 'https://www.nationalreview.com/feed/',
        lean: 'FR'
    }, 
    {
        title: 'OAN',
        url: 'https://oann.com', 
        feed: 'https://www.oann.com/category/newsroom/feed/',
        lean: 'FR'
    },
    {
        title: 'New York Post - Opinion',
        url: 'https://nypost.com/opinion',
        feed: 'https://nypost.com/opinion/feed/',
        lean: 'FR'
    }
]; 

function determineBackgroundColor(outletLean){
    if(outletLean === "FL")
        return "rgba(0, 26, 255, 0.3)";
    else if(outletLean === "L")
        return "rgba(130, 195, 255, 0.3)";
    else if(outletLean === "C")
        return "rgba(240, 240, 240, 0.7)";
    else if(outletLean === "R")
        return "rgba(255, 130, 138, 0.3)";
    else if(outletLean === "FR")
        return "rgba(255, 0, 16, 0.3)";
}

export default function WindowGenerator(){
    const windows = outlets.map(outlet => {
        return(<Window key = {outlet.title} outletTitle = {outlet.title} 
            outletURL = {outlet.url} feedURL = {outlet.feed} outletColor = {determineBackgroundColor(outlet.lean)} />);
    });

    return (
        <div className = "WindowGenerator">
            {windows}
        </div>
    );
    
}