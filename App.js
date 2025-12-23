import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -logo
 *  -Nav Items
 * 
 * Body
 *  -Search
 *  -RestaurantConatiner
 *    -Restaurant Card
 *      -Img
 *      -Name of Res, Star Rating, Cuisine, delivery time
 * 
 * Footer
 *  -Copyright
 *  -Liks
 *  -Address
 *  -Contact
 * 
 * 
 * 
 */

const Header=()=>{
  return (
    <div className="header">
      <div>
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgzqh3tDPjBuOY_esVKm6lbu9VKMvmBoiFQ&s"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

const RestuarantCard=(props)=>{
  const {resData} = props;
  const {name,cuisines,avgRating,sla:{slaString}} = resData.card.card.info;
  return(
    <div className="res-card">
      <img alt="res-logo" className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.card.card.info.cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{(cuisines).join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{slaString}</h4>
    </div>
  )
};
const resObj = [{
  card: {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "792489",
        name: "Suchali's Artisan Bakehouse",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/5/c23a348a-2d65-47da-8c80-82305c48ddb6_792489.JPG",
        locality: "5 Th Block",
        areaName: "Koramangala",
        costForTwo: "₹600 for two",
        cuisines: [
          "Bakery",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4.4,
        parentId: "196351",
        avgRatingString: "4.4",
        totalRatingsString: "137",
        promoted: true,
        adTrackingId: "cid=37ee7985-fe44-4d8b-be36-e51193354d48~p=4~adgrpid=37ee7985-fe44-4d8b-be36-e51193354d48#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=792489~plpr=COLLECTION~eid=f47e233d-438a-4c3d-8b6a-808e218c446f~srvts=1766468980198~collid=80471",
        sla: {
          deliveryTime: 12,
          lastMileTravel: 0.8,
          serviceability: "SERVICEABLE",
          slaString: "10-15 mins",
          lastMileTravelString: "0.8 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-12-23 23:00:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "android/static-assets/icons/big_rx.png",
              description: "bolt!"
            },
            {
              imageId: "newg.png",
              description: "Gourmet"
            }
          ]
        },
        isOpen: true,
        aggregatedDiscountInfoV2: { },
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: { },
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                  imageId: "android/static-assets/icons/big_rx.png",
                  description: "bolt!"
                  }
                },
                {
                  attributes: {
                    imageId: "newg.png",
                    description: "Gourmet"
                  }
                }
              ]
            },
            textExtendedBadges: { }
          }
        },
        orderabilityCommunication: {
          title: { },
          subTitle: { },
          message: { },
          customIcon: { },
          commsStyling: { }
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: { },
            video: { }
          }
        },
        reviewsSummary: { },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: { },
        externalRatings: {
          aggregatedRating: {}
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        campaignId: "37ee7985-fe44-4d8b-be36-e51193354d48"
      }
    }
  }
},{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "776753",
name: "Blue Tokai Coffee Roasters",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/5/55626cf3-8bc9-4fa1-a68e-b4317ef6dbb1_776753.JPG",
locality: "1St Cross Rd",
areaName: "Koramangala",
costForTwo: "₹600 for two",
cuisines: [
"Cafe",
"Coffee",
"Beverages"
],
avgRating: 4.8,
parentId: "2682",
avgRatingString: "4.8",
totalRatingsString: "422",
sla: {
deliveryTime: 11,
lastMileTravel: 0.8,
serviceability: "SERVICEABLE",
slaString: "10-15 mins",
lastMileTravelString: "0.8 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-23 23:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
},
{
imageId: "newg.png",
description: "Gourmet"
}
]
},
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
}
},
{
attributes: {
description: "Gourmet",
imageId: "newg.png"
}
}
]
},
textExtendedBadges: { },
textBased: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=776753&source=collection&query=pancakes",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget"
}
}
},{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "408386",
name: "NOTO Ice Cream and Desserts",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/12/b9c7760c-64d9-4320-863d-fc38a0133f60_408386.jpg",
locality: "Ejipura",
areaName: "Koramangla",
costForTwo: "₹250 for two",
cuisines: [
"Ice Cream",
"Desserts",
"Healthy Food"
],
avgRating: 4.6,
veg: true,
parentId: "492773",
avgRatingString: "4.6",
totalRatingsString: "1.4K+",
promoted: true,
adTrackingId: "cid=f5caa90b-97ab-4aae-8af8-a83dac3b82d3~p=6~adgrpid=f5caa90b-97ab-4aae-8af8-a83dac3b82d3#ag2~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=408386~plpr=COLLECTION~eid=b72cedad-98c2-4de5-b086-1178b046c4bf~srvts=1766468980198~collid=80471",
sla: {
deliveryTime: 15,
lastMileTravel: 1.4,
serviceability: "SERVICEABLE",
slaString: "15-20 mins",
lastMileTravelString: "1.4 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-24 02:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: {
badgeObject: [
{
attributes: {
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
}
}
]
},
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹69",
logoCtx: {}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "f5caa90b-97ab-4aae-8af8-a83dac3b82d3"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=408386&source=collection&query=pancakes",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget"
}
}
},{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "38634",
name: "Third Wave Coffee",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/15/77b98331-896e-46e2-9ba2-bebd8b03103e_38634.JPG",
locality: "Koramangala",
areaName: "Koramangala",
costForTwo: "₹400 for two",
cuisines: [
"Beverages",
"Bakery",
"Continental"
],
avgRating: 4.6,
parentId: "274773",
avgRatingString: "4.6",
totalRatingsString: "7.1K+",
sla: {
deliveryTime: 11,
lastMileTravel: 0.7,
serviceability: "SERVICEABLE",
slaString: "10-15 mins",
lastMileTravelString: "0.7 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-24 03:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
},
{
imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
description: "Delivery!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: {
badgeObject: [
{
attributes: {
description: "bolt!",
imageId: "android/static-assets/icons/big_rx.png"
}
},
{
attributes: {
imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
description: "Delivery!"
}
}
]
},
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "20% OFF",
subHeader: "ABOVE ₹1200",
discountTag: "FLAT DEAL",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.4",
ratingCount: "4.8K+"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=38634&source=collection&query=pancakes",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget"
}
}
},{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "932557",
name: "Balanced Bites",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/17/ba05ef48-05f4-4998-a472-21451f97b522_932557.ss.jpg",
locality: "1st Main Road",
areaName: "Koramangala",
costForTwo: "₹500 for two",
cuisines: [
"Healthy Food",
"Indian",
"Continental"
],
avgRating: 4.4,
parentId: "556704",
avgRatingString: "4.4",
totalRatingsString: "1.8K+",
promoted: true,
adTrackingId: "cid=abfc7edb-a3fd-408c-b3c2-0e7e06787071~p=8~adgrpid=abfc7edb-a3fd-408c-b3c2-0e7e06787071#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=932557~plpr=COLLECTION~eid=ce36cb54-2290-4a86-8d52-23802075f428~srvts=1766468980198~collid=80471",
sla: {
deliveryTime: 24,
lastMileTravel: 0.8,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "0.8 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-23 23:30:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "High%20Protein/rx%20tag%205.png",
description: "High Protein"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: {
badgeObject: [
{
attributes: {
imageId: "High%20Protein/rx%20tag%205.png",
description: "High Protein"
}
}
]
},
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹69",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "abfc7edb-a3fd-408c-b3c2-0e7e06787071"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=932557&source=collection&query=pancakes",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget"
}
}
},{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "387468",
name: "The Breakfast Nook",
cloudinaryImageId: "3a26aa967dc44e104627a4b8a8117454",
locality: "6th Sector",
areaName: "HSR Layout",
costForTwo: "₹300 for two",
cuisines: [
"American",
"Continental",
"Healthy Food",
"Beverages"
],
avgRating: 4.5,
parentId: "257216",
avgRatingString: "4.5",
totalRatingsString: "6.4K+",
sla: {
deliveryTime: 33,
lastMileTravel: 2.9,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "2.9 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-30 00:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textExtendedBadges: { },
textBased: { },
imageBased: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹59",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=387468&source=collection&query=pancakes",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget"
}
}
},{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "168880",
name: "Chainaama",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/31/60f829ab-bae4-43f7-9b40-04ac4b44d209_168880.JPG",
locality: "2nd stage",
areaName: "Indiranagar",
costForTwo: "₹100 for two",
cuisines: [
"Snacks",
"Bakery",
"Beverages"
],
avgRating: 4.1,
parentId: "57267",
avgRatingString: "4.1",
totalRatingsString: "1.2K+",
promoted: true,
adTrackingId: "cid=3872779b-525e-43d7-9536-afb1989398c6~p=9~adgrpid=3872779b-525e-43d7-9536-afb1989398c6#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=168880~plpr=COLLECTION~eid=ff73fa81-5757-46c9-a043-e0bd9156b7d6~srvts=1766468980198~collid=80471",
sla: {
deliveryTime: 46,
lastMileTravel: 4.6,
serviceability: "SERVICEABLE",
slaString: "45-50 mins",
lastMileTravelString: "4.6 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-23 23:59:00",
opened: true
},
badges: { },
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: { },
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "3872779b-525e-43d7-9536-afb1989398c6"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=168880&source=collection&query=pancakes",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget"
}
}
},{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "699557",
name: "Maverick & Farmer Coffee",
cloudinaryImageId: "f8ee2226fc13a12d1f2dff8b45349759",
locality: "Koramangala",
areaName: "Koramangala",
costForTwo: "₹800 for two",
cuisines: [
"Beverages",
"American",
"Cafe",
"Snacks",
"Fast Food",
"sandwich",
"Burgers"
],
avgRating: 4.5,
parentId: "278877",
avgRatingString: "4.5",
totalRatingsString: "658",
sla: {
deliveryTime: 22,
lastMileTravel: 0.5,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "0.5 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-23 22:30:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "bolt!",
imageId: "android/static-assets/icons/big_rx.png"
}
}
]
},
textExtendedBadges: { },
textBased: { }
}
},
aggregatedDiscountInfoV3: {
header: "₹200 OFF",
subHeader: "ABOVE ₹799",
discountTag: "FLAT DEAL",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.5",
ratingCount: "820"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=699557&source=collection&query=pancakes",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget"
}
}
},{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "186263",
name: "Banoffee",
cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/10/12/c81435f1-2b76-456f-8247-87ebbd7d3bb4_cb62359e-4fa8-4320-998e-5014d2fbda1c.jpg",
locality: "HSR Layout",
areaName: "HSR Layout",
costForTwo: "₹600 for two",
cuisines: [
"Cafe",
"Continental",
"Italian"
],
avgRating: 4.3,
parentId: "41516",
avgRatingString: "4.3",
totalRatingsString: "3.3K+",
promoted: true,
adTrackingId: "cid=01cd16d8-9ccc-4d8a-9a49-1978600f042d~p=10~adgrpid=01cd16d8-9ccc-4d8a-9a49-1978600f042d#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=186263~plpr=COLLECTION~eid=7e3fdbaf-be6b-4c73-8f93-28021f6fd992~srvts=1766468980198~collid=80471",
sla: {
deliveryTime: 41,
lastMileTravel: 3.8,
serviceability: "SERVICEABLE",
slaString: "40-45 mins",
lastMileTravelString: "3.8 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-23 23:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "20% OFF",
subHeader: "UPTO ₹50",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.1",
ratingCount: "1.8K+"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "01cd16d8-9ccc-4d8a-9a49-1978600f042d"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=186263&source=collection&query=pancakes",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget"
}
}
},{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "243755",
name: "154 Breakfast Club",
cloudinaryImageId: "ehywgny1yvqy65lvas24",
locality: "Koramangala ",
areaName: "Koramangala",
costForTwo: "₹1000 for two",
cuisines: [
"American",
"Continental"
],
avgRating: 4.5,
parentId: "22889",
avgRatingString: "4.5",
totalRatingsString: "2.3K+",
sla: {
deliveryTime: 23,
lastMileTravel: 0.3,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "0.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-23 21:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
}
]
},
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: {
badgeObject: [
{
attributes: {
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
}
}
]
},
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.2",
ratingCount: "5.1K+"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=243755&source=collection&query=pancakes",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget"
}
}
},{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "1007255",
name: "F Cafe By Ftv",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/30/2b470907-f804-412a-9775-66ed836eef45_1007255.jpg",
locality: "Indiranagar",
areaName: "Indiranagar",
costForTwo: "₹2000 for two",
cuisines: [
"Beverages",
"Fast Food",
"Burgers",
"Snacks",
"Desserts"
],
avgRating: 4,
parentId: "587036",
avgRatingString: "4.0",
totalRatingsString: "38",
promoted: true,
adTrackingId: "cid=35e104d4-5568-4d90-9977-b869286689d9~p=11~adgrpid=35e104d4-5568-4d90-9977-b869286689d9#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1007255~plpr=COLLECTION~eid=098fbc61-68e6-4710-9d0d-d2ff6018e6f2~srvts=1766468980198~collid=80471",
sla: {
deliveryTime: 37,
lastMileTravel: 3,
serviceability: "SERVICEABLE",
slaString: "35-40 mins",
lastMileTravelString: "3.0 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-23 23:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "₹200 OFF",
subHeader: "ABOVE ₹699",
discountTag: "FLAT DEAL",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "35e104d4-5568-4d90-9977-b869286689d9"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=1007255&source=collection&query=pancakes",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget"
}
}
},{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "6842",
name: "Cafe Terra",
cloudinaryImageId: "msewkdmtsm4somayrt0j",
locality: "Koramangala",
areaName: "Koramangala",
costForTwo: "₹245 for two",
cuisines: [
"Continental"
],
avgRating: 4.8,
parentId: "195",
avgRatingString: "4.8",
totalRatingsString: "14K+",
sla: {
deliveryTime: 21,
lastMileTravel: 0.2,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "0.2 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-23 21:30:00",
opened: true
},
badges: { },
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textExtendedBadges: { },
textBased: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.3",
ratingCount: "3.1K+"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=6842&source=collection&query=pancakes",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget"
}
}
},{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "168884",
name: "Uncle Peter's Pancakes",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/9/c2b4a088-9530-4f06-a905-e1a6ba31fb72_168884.JPG",
locality: "Indiranagar",
areaName: "Indiranagar",
costForTwo: "₹300 for two",
cuisines: [
"Waffle",
"Desserts",
"American",
"Continental",
"Beverages"
],
avgRating: 4.1,
parentId: "11863",
avgRatingString: "4.1",
totalRatingsString: "5.6K+",
promoted: true,
adTrackingId: "cid=ac9b6625-a59b-4f0f-a33b-9b235dde552c~p=13~adgrpid=ac9b6625-a59b-4f0f-a33b-9b235dde552c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=168884~plpr=COLLECTION~eid=ec6cf90c-2fcd-4a29-8941-af806439b6db~srvts=1766468980198~collid=80471",
sla: {
deliveryTime: 52,
lastMileTravel: 4.6,
serviceability: "SERVICEABLE",
slaString: "50-60 mins",
lastMileTravelString: "4.6 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-23 23:59:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textExtendedBadges: { },
textBased: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹129",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.7",
ratingCount: "2.6K+"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "ac9b6625-a59b-4f0f-a33b-9b235dde552c"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=168884&source=collection&query=pancakes",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget"
}
}
}]

const Body=()=>{
  return(
    <div className="body" >
      <div className="search">Search</div>
      <div className="res-container">
        {
          resObj.map((restaurant)=>(
            <RestuarantCard key={restaurant.card.card.info.id} resData = {restaurant}/>
          )
        )};
      </div>
    </div>
  );
};



const AppLayout=()=>{
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);