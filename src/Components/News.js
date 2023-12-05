import React, { Component } from 'react' //rce
import NewsItems from './NewsItems'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
//   articals=[
//     {
//       "source": {
//           "id": null,
//           "name": "Yahoo Entertainment"
//       },
//       "author": "Yahoo Sports Staff",
//       "title": "NFL Thanksgiving Day: 49ers run away from Seahawks in Thanksgiving romp - Yahoo Sports",
//       "description": "The 49ers didn't play with their food on Thanksgiving.",
//       "url": "https://sports.yahoo.com/nfl-thanksgiving-day-packers-vs-lions-score-highlights-news-inactives-and-live-updates-commanders-vs-cowboys-seahawks-vs-49ers-161041447.html",
//       "urlToImage": "https://s.yimg.com/ny/api/res/1.2/bOJ2rBad5yXOq9nx1OVP.g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-11/5c307d40-8a81-11ee-b73b-ba2c076a5f22",
//       "publishedAt": "2023-11-24T04:23:00Z",
//       "content": "The San Francisco 49ers completely dominated the Seattle Seahawks in the first half, and never really let the game get close beyond that.\r\nSan Francisco marched into Seattle and picked up a 31-13 win… [+689 chars]"
//   },
//   {
//       "source": {
//           "id": "cnn",
//           "name": "CNN"
//       },
//       "author": "John Miller, Elizabeth Wolfe",
//       "title": "Investigators believe a married couple was killed in vehicle that exploded at US-Canada bridge, sources say. Here’s what we know - CNN",
//       "description": "Investigators believe a New York husband and wife were the two people killed in a car that crashed and exploded at a US-Canada border crossing near Niagara Falls, law enforcement sources said, and the FBI sees no link to terrorism.",
//       "url": "https://www.cnn.com/2023/11/23/us/us-canada-border-rainbow-bridge-explosion-thursday/index.html",
//       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231122134141-02-niagara-falls-explosion-112223.jpg?c=16x9&q=w_800,c_fill",
//       "publishedAt": "2023-11-24T02:47:00Z",
//       "content": "Investigators believe a New York husbandand wifewere the two people killed in a car that crashed and exploded at a US-Canada border crossing near Niagara Falls, law enforcement sources said, and the … [+4449 chars]"
//   },
//   {
//       "source": {
//           "id": "cbs-news",
//           "name": "CBS News"
//       },
//       "author": "Holly Williams, Imtiaz Tyab, Tucker Reals",
//       "title": "Israel-Hamas war rages with cease-fire delayed, Israeli hostage and Palestinian prisoner families left to hope - CBS News",
//       "description": "Under the agreement reached in Qatar, Hamas is incentivized to release captives that Israel accuses it of seizing during its rampage across southern Israel.",
//       "url": "https://www.cbsnews.com/news/israel-hamas-war-cease-fire-delayed-release-hostages-palestinian-prisoners/",
//       "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/11/23/9b327f71-345e-4377-ba9c-2c3907f09b6f/thumbnail/1200x630/3d8412d7cc5f42cf75cddbfec121e71e/israel-hostages-1797517206.jpg?v=5659e73acd91751548aa89950cf015b0",
//       "publishedAt": "2023-11-24T02:37:00Z",
//       "content": "Jerusalem — Israel's military continued pummeling the Gaza Strip on Thursday after a four-day cease-fire intended to see the militant group Hamas free dozens of Israeli hostages in exchange for the r… [+6105 chars]"
//   },
//   {
//       "source": {
//           "id": "cbs-news",
//           "name": "CBS News"
//       },
//       "author": "Tim McNicholas, Dave Carlin",
//       "title": "New York City Mayor Eric Adams denies sexual assault accusation filed by former colleague - CBS New York",
//       "description": "The mayor spoke with CBS New York at the Bowery Mission, saying, \"The accusation absolutely did not happen.\"",
//       "url": "https://www.cbsnews.com/newyork/news/new-york-city-mayor-eric-adams-accused-in-lawsuit-of-sexually-assaulting-colleague-in-1993/",
//       "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/11/23/60180085-f87f-4de4-942a-a0045489a9e0/thumbnail/1200x630/1436db5d34add3e7df3c49f2e655e419/bowery-mission-thanksgiving-mayor-dc-hi-res-still.jpg?v=5659e73acd91751548aa89950cf015b0",
//       "publishedAt": "2023-11-24T02:29:00Z",
//       "content": "NEW YORK -- Mayor Eric Adams is denying a woman's claim that he sexually assaulted her 30 years ago.\r\nThe claim stems from a lawsuit filed Wednesday night.\r\nA woman says Adams sexually assaulted her … [+1664 chars]"
//   },
//   {
//       "source": {
//           "id": "engadget",
//           "name": "Engadget"
//       },
//       "author": "Igor Bonifacic",
//       "title": "Apple Black Friday deals include up to 25 percent off USB-C chargers, MagSafe accessories and more - Engadget",
//       "description": "If you recently treated yourself to an iPhone 15 or Mac, Amazon’s Black Friday sale has Apple accessories you can purchase to complete your setup.",
//       "url": "https://www.engadget.com/apple-black-friday-deals-include-up-to-25-percent-off-usb-c-chargers-magsafe-accessories-and-more-015305089.html",
//       "urlToImage": "https://s.yimg.com/ny/api/res/1.2/s6r2nDXmHqvT3uz_j1oSBQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-11/6f0948f0-8a6a-11ee-b577-274dcaab8784",
//       "publishedAt": "2023-11-24T01:53:00Z",
//       "content": "If you recently treated yourself to an iPhone 15 or new Mac computer, Amazons Black Friday sale has Apple accessories you can buy to complete your setup. The highlight of the promotion\r\n are the comp… [+2046 chars]"
//   },
//   {
//       "source": {
//           "id": null,
//           "name": "Sky Sports"
//       },
//       "author": "Sky Sports",
//       "title": "Washington Commanders 10-45 Dallas Cowboys: DaRon Bland breaks pick-six record as hosts rout NFC East rivals - Sky Sports",
//       "description": "DaRon Bland broke the pick-six season record to cap a 45-10 Thanksgiving win for the Cowboys over the Commanders.",
//       "url": "https://www.skysports.com/nfl/news/12118/13014111/washington-commanders-10-45-dallas-cowboys-daron-bland-breaks-pick-six-record-as-hosts-rout-nfc-east-rivals",
//       "urlToImage": "https://e0.365dm.com/23/11/1600x900/skysports-dallas-cowboys-daron-bland_6370138.jpg",
//       "publishedAt": "2023-11-24T01:19:51Z",
//       "content": "Please use Chrome browser for a more accessible video player\r\nHighlights of the Washington Commanders against the Dallas Cowboys in Week 12 of the NFL season.\r\nHighlights of the Washington Commanders… [+7134 chars]"
//   },
//   {
//       "source": {
//           "id": "espn",
//           "name": "ESPN"
//       },
//       "author": "Todd Archer, John Keim",
//       "title": "Dak Prescott throws four TDs as Cowboys crush Commanders - ESPN - ESPN",
//       "description": "Dallas kept its chase of the Philadelphia Eagles alive with their 45-10 victory over Washington.",
//       "url": "https://www.espn.com/nfl/story/_/id/38966360/dak-prescott-throws-four-tds-cowboys-crush-commanders",
//       "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1123%2Fr1257098_1296x729_16%2D9.jpg",
//       "publishedAt": "2023-11-24T00:46:00Z",
//       "content": "Nov 23, 2023, 07:46 PM ET\r\nARLINGTON, Texas -- The home success just keeps on coming for the Dallas Cowboys, although the timing of this one was a little different than the previous four home games.\r… [+4417 chars]"
//   },
//   {
//       "source": {
//           "id": "the-washington-post",
//           "name": "The Washington Post"
//       },
//       "author": "Anne Branigin",
//       "title": "'Scream' actress Melissa Barrera defends Israel-Gaza posts - The Washington Post",
//       "description": "The Mexican actress was dropped from the next “Scream” movie this week for social media posts that the production company called antisemitic.",
//       "url": "https://www.washingtonpost.com/entertainment/2023/11/23/melissa-barrera-israel-gaza-comments/",
//       "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/E65DJ6CULMEKMLSSCEYW5QLKN4.jpg&w=1440",
//       "publishedAt": "2023-11-24T00:09:09Z",
//       "content": "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nMelissa Barrera condemned antisemitism and Islamophobia in her first public remarks since producers fired her from Scream VII earlier … [+4064 chars]"
//   },
//   {
//       "source": {
//           "id": "the-hill",
//           "name": "The Hill"
//       },
//       "author": "Steff Danielle Thomas",
//       "title": "Biden in Thanksgiving message calls for unity above politics: ‘Stop the rancor’ - The Hill",
//       "description": "President Biden called into the Macy’s Thanksgiving Day Parade on Thursday, calling on Americans to “come together” and put unity above politics over the holiday weekend — and beyond. “On this Thanksgiving, Al, we have to come together,” the president told NB…",
//       "url": "https://thehill.com/homenews/administration/4325086-biden-thanksgiving-message-unity-above-politics/",
//       "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/11/AP23324801083129-e1700534277323.jpg?w=1280",
//       "publishedAt": "2023-11-23T23:41:00Z",
//       "content": "Skip to content\r\nPresident Biden called into the Macy’s Thanksgiving Day Parade on Thursday, calling on Americans to “come together” and put unity above politics over the holiday weekend — and beyond… [+2120 chars]"
//   },
//   {
//       "source": {
//           "id": "fox-news",
//           "name": "Fox News"
//       },
//       "author": "Bradford Betz",
//       "title": "Illinois virus outbreak linked to dollar burrito event for Northwestern University students - Fox News",
//       "description": "The Evanston Health and Human Services Department is investigating the spread of the norovirus linked to a $1-burrito event for Northwestern students.",
//       "url": "https://www.foxnews.com/health/illinois-virus-outbreak-linked-dollar-burrito-event-northwestern-university-students",
//       "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/11/norovirus1CDC.jpg",
//       "publishedAt": "2023-11-23T23:24:00Z",
//       "content": "The Evanston Health and Human Services Department is investigating a norovirus outbreak linked to a $1-burrito event for Northwestern University students. \r\nThe \"$1 Burrito event\" for Northwestern Un… [+1812 chars]"
//   },
//   {
//       "source": {
//           "id": null,
//           "name": "Sports Illustrated"
//       },
//       "author": "Joey Linn",
//       "title": "Steph Curry Reveals Message to Scott Foster After Chris Paul Ejection - Sports Illustrated",
//       "description": "Golden State Warriors star Steph Curry had words for Scott Foster",
//       "url": "https://www.si.com/nba/warriors/news/steph-curry-reveals-message-to-scott-foster-after-chris-paul-ejection",
//       "urlToImage": "https://www.si.com/.image/t_share/MjAyNDI1OTAwOTU5MDE1OTQ4/usatsi_21957741.jpg",
//       "publishedAt": "2023-11-23T22:57:16Z",
//       "content": "NBA referee Scott Foster has a long history with Golden State Warriors guard Chris Paul. Ejecting Paul from Wednesday night's game vs. the Phoenix Suns after two quick technical fouls, Foster added a… [+1346 chars]"
//   },
//   {
//       "source": {
//           "id": null,
//           "name": "Kstp.com"
//       },
//       "author": "Emily Baude",
//       "title": "Mysterious respiratory illness spreading among dogs across the country, no cases reported in Minnesota - KSTP",
//       "description": "There's no test for this new illness. Vets don't know how it's spread, whether it's direct contact or through the air.",
//       "url": "https://kstp.com/kstp-news/local-news/mysterious-respiratory-illness-spreading-among-dogs-across-the-country-no-cases-reported-in-minnesota/",
//       "urlToImage": "https://kstp.com/wp-content/uploads/2023/11/AHS-DOG-ADOPTION_PKG_00.00.28.22.jpg",
//       "publishedAt": "2023-11-23T22:48:04Z",
//       "content": "A mysterious respiratory illness is spreading among dogs across the country.\r\nThere are no cases reported in Minnesota, but the disease has turned deadly in rare cases.\r\nSymptoms include coughing, sn… [+622 chars]"
//   },
//   {
//       "source": {
//           "id": null,
//           "name": "SpaceNews"
//       },
//       "author": "Jeff Foust",
//       "title": "Ariane 6 completes long-duration static-fire test - SpaceNews",
//       "description": "ESA conducted a long-duration firing of an Ariane 6 prototype Nov. 23, one of the final tests before it sets a date for the rocket’s first launch.",
//       "url": "https://spacenews.com/ariane-6-completes-long-duration-static-fire-test/",
//       "urlToImage": "https://spacenews.com/wp-content/uploads/2023/11/a6-staticfire-2311.jpg",
//       "publishedAt": "2023-11-23T22:34:35Z",
//       "content": "WASHINGTON The European Space Agency conducted a long-duration firing of an Ariane 6 prototype Nov. 23, one of the final tests before the agency is ready to set a date for the rockets inaugural launc… [+2314 chars]"
//   },
//   {
//       "source": {
//           "id": "the-hill",
//           "name": "The Hill"
//       },
//       "author": "Olafimihan Oshin",
//       "title": "WHO asks for information about spike in respiratory illnesses in China - The Hill",
//       "description": "The World Health Organization (WHO) has requested information from China about an increase in respiratory illnesses in children.  In a Thursday news release, the health agency said Chinese health officials reported an increase in respiratory illnesses and rep…",
//       "url": "https://thehill.com/policy/healthcare/4325039-who-asks-for-information-about-spike-in-respiratory-illnesses-in-china/",
//       "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/11/WHO_WorldHealthOrganization.jpeg?w=1280",
//       "publishedAt": "2023-11-23T22:23:00Z",
//       "content": "Skip to content\r\nThe World Health Organization (WHO) has requested information from China about an increase in respiratory illnesses in children. \r\nIn a Thursday news release, the health agency said … [+2103 chars]"
//   },
//   {
//       "source": {
//           "id": "usa-today",
//           "name": "USA Today"
//       },
//       "author": "Eduardo Cuevas",
//       "title": "Macy's Thanksgiving Day Parade blocked by pro-Palestinian protesters - USA TODAY",
//       "description": "Local and online news outlets published videos showing people who appeared to glue their hands to the street in Midtown Manhattan.",
//       "url": "https://www.usatoday.com/story/news/nation/2023/11/23/macys-thanksgiving-day-parade-pro-palestinian-protesters/71687502007/",
//       "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/23/USAT/71686407007-afp-afp-344-m-24-r.jpg?crop=5262,2960,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
//       "publishedAt": "2023-11-23T22:18:45Z",
//       "content": "NEW YORK Video footage from several news organizations showed demonstrators blocking the Macys Thanksgiving Day Parade in New York to protest the treatment of Palestinians by Israel in the ongoing wa… [+1954 chars]"
//   },
//   {
//       "source": {
//           "id": null,
//           "name": "CNBC"
//       },
//       "author": "Spencer Kimball",
//       "title": "Oil and gas industry needs to let go of carbon capture as solution to climate change, IEA says - CNBC",
//       "description": "The oil and gas industry faces a reckoning over its role in the clean energy transition, according to an International Energy Agency report.",
//       "url": "https://www.cnbc.com/2023/11/23/oil-and-gas-industry-needs-to-let-go-of-carbon-capture-as-solution-to-climate-change-iea-says.html",
//       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107300579-1694678993177-gettyimages-1661646361-AUSTRALIA_CCS.jpeg?v=1700774742&w=1920&h=1080",
//       "publishedAt": "2023-11-23T21:38:09Z",
//       "content": "The oil and gas industry needs to let go of the \"illusion\" that carbon capture technology is a solution to climate change and invest more in clean energy, the head of the International Energy Agency … [+2706 chars]"
//   },
//   {
//       "source": {
//           "id": "fox-news",
//           "name": "Fox News"
//       },
//       "author": "Bradford Betz",
//       "title": "Rioters clash with police, torch car after knife attack in Dublin - Fox News",
//       "description": "Riots erupted in Dublin, Ireland, Thursday evening after a knife attack outside a school. Five people, including three children, were injured and hospitalized.",
//       "url": "https://www.foxnews.com/world/rioters-clash-police-torch-car-knife-attack-dublin",
//       "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/11/2023-11-23T190325Z_862408836_RC26J4A5VIJ8_RTRMADP_3_IRELAND-STABBING.jpg",
//       "publishedAt": "2023-11-23T21:24:00Z",
//       "content": "Protesters and rioters clashed with police officers and a police vehicle was set ablaze in Dublin, Ireland, Thursday evening after a knife attack that injured five, including three children.\r\nAccordi… [+3955 chars]"
//   },
//   {
//       "source": {
//           "id": null,
//           "name": "BBC News"
//       },
//       "author": null,
//       "title": "Suella Braverman hits out after record migration figures - BBC.com",
//       "description": "Ex-home secretary says government must \"act now\", after last year's net migration was estimated at 745,000.",
//       "url": "https://www.bbc.com/news/uk-politics-67511343",
//       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/F96A/production/_131805836_gettyimages-1258838283.jpg",
//       "publishedAt": "2023-11-23T20:36:00Z",
//       "content": "By Becky MortonPolitical reporter\r\nSuella Braverman has said the pressure on public services from migration is \"unsustainable\", after figures estimated record levels last year. \r\nThe former home secr… [+5382 chars]"
//   },
//   {
//       "source": {
//           "id": null,
//           "name": "New York Post"
//       },
//       "author": "Associated Press",
//       "title": "500 German police raid properties of Hamas supporters throughout the country - New York Post ",
//       "description": "Hundreds of police officers searched the properties of Hamas members and followers in Germany on Thursday morning following a formal ban on any activity by or in support of the militant group.",
//       "url": "https://nypost.com/2023/11/23/news/german-police-raid-properties-of-hamas-supporters-in-berlin-and-across-the-country/",
//       "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/11/berlin-germany-raid-hamas-syndication-comp.jpg?quality=75&strip=all&1700750692&w=1024",
//       "publishedAt": "2023-11-23T20:03:00Z",
//       "content": "Hundreds of police officers searched the properties of Hamas members and followers in Germany on Thursday morning following a formal ban on any activity by or in support of the terrorist group.\r\nThe … [+3598 chars]"
//   },
//   {
//       "source": {
//           "id": "al-jazeera-english",
//           "name": "Al Jazeera English"
//       },
//       "author": "Al Jazeera",
//       "title": "Most Finland-Russia border crossings to close - Al Jazeera English",
//       "description": "Finland will close almost all of its border crossings with Russia over a surge in migrants attempting to enter",
//       "url": "https://www.aljazeera.com/program/newsfeed/2023/11/23/most-finland-russia-border-crossings-to-close",
//       "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/11/2023-11-23T094957Z_1755495525_RC2XI4A4S74T_RTRMADP_3_MIGRATION-FINLAND-1700768987.jpg?resize=1920%2C1440",
//       "publishedAt": "2023-11-23T19:52:27Z",
//       "content": "NewsFeed\r\nFinland will close all but one of its border crossings with Russia over an increase in the number of migrants attempting to enter the country. Finland accuses Russia of facilitating the tra… [+87 chars]"
//   }
// ]
static defaultProps = {
  category: 'general',
  pagesize:8
}
static propTypes={
  category: PropTypes.string,
  pagesize: PropTypes.number
}
articals=[]
capitalizeFirstLetter=(string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}
constructor(props){
  super(props);
  console.log("This is From Constructor");
  this.state={
    articals: this.articals,
    loading: false,
    page:1,
   // totalResults:this.totalResults
  }
  document.title=`News Donkey - ${this.capitalizeFirstLetter(this.props.category)}`;
}

async componentDidMount(){
  this.props.SetPrograss(0);
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.NewsAPI}&pagesize=${this.props.pagesize}&page=${this.state.page}`;
    this.setState({loading:true})
    //console.log(url);
    this.props.SetPrograss(30);
    let data= await fetch(url);
    let parsedata=await data.json();
    this.props.SetPrograss(70);
    console.log(parsedata);
    this.setState({articals:parsedata.articles,totalResults:parsedata.totalResults,loading:false})
    this.props.SetPrograss(100);
    // this.Fetchdata(1);
}
// NextPage =async ()=>{
//   //   let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=97552d6312dd4cd3bd21a913d6b6317d&pagesize=${this.props.pagesize}&page=${this.state.page+1}`;
//   //   this.setState({loading:true})
//   //   //console.log(url);
//   //   let data= await fetch(url);
//   //   let parsedata=await data.json();
//   //   console.log(parsedata);
//   //   this.setState({
//   //   page:this.state.page+1,
//   //   articals:parsedata.articles,
//   //   loading:false
//   //  // totalResults:parsedata.totalResults
//   // })
//   this.setState({
//       page:this.state.page+1
//     })
//     console.log(this.state.page +1>Math.ceil(this.state.totalResults/this.props.pagesize));
//     let Page=this.state.page+1
//    this.Fetchdata(Page);
// }
// PreviousPage=async()=>{
//   // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=97552d6312dd4cd3bd21a913d6b6317d&pagesize=${this.props.pagesize}&page=${this.state.page-1}`;
//   // this.setState({loading:true})  
//   // //console.log(url);
//   //   let data= await fetch(url);
//   //   let parsedata=await data.json();
//   //   console.log(parsedata);
//   //   this.setState({
//   //   page:this.state.page-1,
//   //    articals:parsedata.articles,
//   //    loading:false
//   // })
//   // console.log(this.state.page);
//   this.setState({
//       page:this.state.page-1,
//     })
//   let Page=this.state.page-1;
//   this.Fetchdata(Page);
// }

//  async Fetchdata(Page){
//     let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=97552d6312dd4cd3bd21a913d6b6317d&pagesize=${this.props.pagesize}&page=${Page}`;
//     let data= await fetch(url);
//     let parsedata=await data.json();
//     console.log(parsedata);
//     this.setState({articals:parsedata.articles , totalResults:parsedata.totalResults , loading:false})
//     console.log(this.state.totalResults);
//     console.log(url);
// }

fetchMoreData = async() => {
   let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.NewsAPI}&pagesize=${this.props.pagesize}&page=${this.state.page+1}`;
   // this.setState({loading:true})
    let data= await fetch(url);
    let parsedata=await data.json();
    console.log(parsedata);
    this.setState({
    page:this.state.page+1,
    articals:this.state.articals.concat(parsedata.articles),
   // loading:false
   // totalResults:parsedata.totalResults
  })
};
  render() {
    return ( 
      <div>
        <div className="container mt-4">
          <h2 className='text-center' style={{margin: "35px 0px"}}>NewsDonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
          {/* {this.state.loading && <Loading/>} */}
          <InfiniteScroll
            dataLength={this.state.articals.length}
            next={this.fetchMoreData}
           // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
          //  inverse={true} //
            hasMore={this.state.articals.length!==this.state.totalResults}
            loader={<Loading/>}
            scrollableTarget="scrollableDiv"
          > 
          <div className="container">
          <div className="row">
            {this.state.articals.map((element)=>{
              return <div className="col-md-4 mb-3 d-flex align-items-stretch" key={element.url}>
                <NewsItems title={element.title?element.title.slice(0,45):"No Title"} description={element.description?element.description.slice(0,80):"No Description"} 
                Image={element.urlToImage?element.urlToImage:"https://thumbs.dreamstime.com/z/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg?w=992"} Url={element.url}
                date={element.publishedAt} Author={element.author} Source={element.source.name}/>
              </div>
            })}
          </div>

            {/* <div className="container d-flex justify-content-between">
              <button type="button" disabled={this.state.page<=1} onClick={this.PreviousPage} className="btn btn-primary btn-sm">&larr; Previous</button>
              <button type="button" disabled={this.state.page +1>Math.ceil(this.state.totalResults/this.props.pagesize)} onClick={this.NextPage} className="btn btn-primary btn-sm">Next &rarr;</button>  
            </div> */}
            {/* <div className="col-md-4">
              <NewsItems title="Aarsh" description="htt"/>
            </div>
            <div className="col-md-4">
              <NewsItems title="Aarsh" description="htt"/>
            </div> */}
          </div>
          </InfiniteScroll>

        </div>
      </div>
    )
  }
}

export default News
