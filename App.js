const React = require('react');
const ReactDOM = require('react-dom/client');

const Header = () => (
  <div className='header'>
    <img className='logo-contain' src='https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018'></img>
    <div className='navigation'>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>

  </div>
)
const resobj = [{
  "info": {
    "id": "150591",
    "name": "Satkar Restaurant",
    "cloudinaryImageId": "rvxp5xbniat84r6efku2",
    "locality": "Sinchai Colony",
    "areaName": "Satkar Chowk",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "North Indian",
      "South Indian",
      "Indian",
      "Salads",
      "Desserts"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "21553",
    "avgRatingString": "4.4",
    "totalRatingsString": "2.8K+",
    "sla": {
      "deliveryTime": 50,
      "lastMileTravel": 13.4,
      "serviceability": "SERVICEABLE",
      "slaString": "45-50 mins",
      "lastMileTravelString": "13.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-05-19 22:45:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
              }
            }
          ]
        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹49"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
},
{
  "info": {
    "id": "151515",
    "name": "Gupta Bhojnalay",
    "cloudinaryImageId": "jo9pdipf4elcuch8g55q",
    "locality": "fulwara chowk",
    "areaName": "Chhindwara Locality",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Fast Food",
      "Indian",
      "Beverages"
    ],
    "avgRating": 4,
    "veg": true,
    "parentId": "91635",
    "avgRatingString": "4.0",
    "totalRatingsString": "447",
    "sla": {
      "deliveryTime": 48,
      "lastMileTravel": 10.8,
      "serviceability": "SERVICEABLE",
      "slaString": "45-50 mins",
      "lastMileTravelString": "10.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-05-19 22:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹100 OFF",
      "subHeader": "ABOVE ₹999",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
},
{
  "info": {
    "id": "151518",
    "name": "Bakery World",
    "cloudinaryImageId": "mt2aggiscfl3yviatwng",
    "locality": "Parasia Road",
    "areaName": "Parasia Road",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Bakery",
      "Ice Cream",
      "Snacks",
      "Beverages"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "40363",
    "avgRatingString": "4.4",
    "totalRatingsString": "265",
    "sla": {
      "deliveryTime": 52,
      "lastMileTravel": 14.1,
      "serviceability": "SERVICEABLE",
      "slaString": "50-55 mins",
      "lastMileTravelString": "14.1 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-05-19 22:30:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {

    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
},
{
  "info": {
    "id": "1003414",
    "name": "Pizza Hut",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/6513abee-f904-4a0e-9b49-90d1cc29551c_1003414.jpg",
    "locality": "Chhindwara",
    "areaName": "Parasia Road",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Pizzas"
    ],
    "avgRating": 4.1,
    "parentId": "721",
    "avgRatingString": "4.1",
    "totalRatingsString": "85",
    "sla": {
      "deliveryTime": 58,
      "lastMileTravel": 13.1,
      "serviceability": "SERVICEABLE",
      "slaString": "55-60 mins",
      "lastMileTravelString": "13.1 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-05-19 23:00:00",
      "opened": true
    },
    "badges": {

    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {

        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹59"
    },
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
},
{
  "info": {
    "id": "382152",
    "name": "Shriji Namkeen",
    "cloudinaryImageId": "wa8ek94fp9d97ru1tcyn",
    "locality": "Palika Market",
    "areaName": "Chhindwara City",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Snacks",
      "Beverages",
      "Desserts"
    ],
    "avgRating": 3.3,
    "parentId": "187168",
    "avgRatingString": "3.3",
    "totalRatingsString": "54",
    "sla": {
      "deliveryTime": 52,
      "lastMileTravel": 10.7,
      "serviceability": "SERVICEABLE",
      "slaString": "50-55 mins",
      "lastMileTravelString": "10.7 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-05-19 22:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {

    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
},
{
  "info": {
    "id": "1505987",
    "name": "Satkar Restaurant",
    "cloudinaryImageId": "rvxp5xbniat84r6efku2",
    "locality": "Sinchai Colony",
    "areaName": "Satkar Chowk",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "North Indian",
      "South Indian",
      "Indian",
      "Salads",
      "Desserts"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "21553",
    "avgRatingString": "4.4",
    "totalRatingsString": "2.8K+",
    "sla": {
      "deliveryTime": 50,
      "lastMileTravel": 13.4,
      "serviceability": "SERVICEABLE",
      "slaString": "45-50 mins",
      "lastMileTravelString": "13.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-05-19 22:45:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
              }
            }
          ]
        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹49"
    },
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
},
{
  "info": {
    "id": "830418",
    "name": "Indian Coffee House",
    "cloudinaryImageId": "2469fa88ee9b0b5d1366ba88f2a7fa7f",
    "locality": "Chhindwara City",
    "areaName": "Khajri Chowk",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "South Indian",
      "Chinese",
      "Fast Food",
      "Beverages"
    ],
    "avgRating": 4.6,
    "veg": true,
    "parentId": "106448",
    "avgRatingString": "4.6",
    "totalRatingsString": "184",
    "sla": {
      "deliveryTime": 51,
      "lastMileTravel": 13.1,
      "serviceability": "SERVICEABLE",
      "slaString": "50-55 mins",
      "lastMileTravelString": "13.1 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-05-19 22:30:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {

    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
              }
            }
          ]
        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
},
{
  "info": {
    "id": "1003415",
    "name": "Pastas By Pizza Hut",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/f249ac91-2d8f-472b-b60c-4a7ea4ed9f86_1003415.jpg",
    "locality": "Chhindwara",
    "areaName": "Parasia Road",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Pastas"
    ],
    "avgRating": 3.5,
    "parentId": "306806",
    "avgRatingString": "3.5",
    "totalRatingsString": "5",
    "sla": {
      "deliveryTime": 56,
      "lastMileTravel": 13.1,
      "serviceability": "SERVICEABLE",
      "slaString": "55-60 mins",
      "lastMileTravelString": "13.1 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-05-19 23:00:00",
      "opened": true
    },
    "badges": {

    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {

    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {

        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
},
{
  "info": {
    "id": "1515190",
    "name": "Gupta Bhojnalay",
    "cloudinaryImageId": "jo9pdipf4elcuch8g55q",
    "locality": "fulwara chowk",
    "areaName": "Chhindwara Locality",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Fast Food",
      "Indian",
      "Beverages"
    ],
    "avgRating": 4,
    "veg": true,
    "parentId": "91635",
    "avgRatingString": "4.0",
    "totalRatingsString": "447",
    "sla": {
      "deliveryTime": 48,
      "lastMileTravel": 10.8,
      "serviceability": "SERVICEABLE",
      "slaString": "45-50 mins",
      "lastMileTravelString": "10.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-05-19 22:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹100 OFF",
      "subHeader": "ABOVE ₹999",
      "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
},

  ,];


const RestaurentCard = (props) => {
  const { resdata } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, rating } = resdata.info;
  return (
    <div className='res-card'>
      <img className='res-logo' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId}></img>
      <div>{name}</div>
      <div>{cuisines.join(" , ")}</div>
      <div>{avgRating}</div>
      <div>{rating}</div>

    </div>
  )
}

const Body = () => (
  <div className='body'>
    <div className='search-container'>
      <input></input>
      <button>Search</button>
    </div>
    <div className='res-container'>
      {resobj.map((data) => {
        return <RestaurentCard key={data.info.id} resdata={data} ></RestaurentCard>

      })}

    </div>
  </div>
)

const AppLayout = () => (
  <div className='app'>
    <Header></Header>
    <Body></Body>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout></AppLayout>)