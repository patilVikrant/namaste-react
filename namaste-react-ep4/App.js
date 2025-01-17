import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *   - RestaurantCard
 *     - Img
 *     - Name of Res, Cuisine, Star Rating, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://dvm9jp3urcf0o.cloudfront.net/logo-ideas/business-logo-ideas/Pro/food-delivery-business.png" alt="" />
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
}

const resArray = [
  {
    info: {
      id: "393840",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Chikka Lakshmaiah Layout",
      areaName: "Adugodi",
      costForTwo: "₹250 for two",
      cuisines: [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      avgRating: 4.3,
      parentId: "61955",
      avgRatingString: "4.3",
      totalRatingsString: "5.3K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-01-14 02:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
            description: "Delivery!"
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
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-b825cd51-6be7-4e8e-ab4b-6e42ac01ec41"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/chinese-wok-chikka-lakshmaiah-layout-adugodi-rest393840",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    info: {
      id: "23678",
      name: "McDonald's",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/edc568f6-6813-4f2d-a670-911788f1f04f_23678.jpg",
      locality: "5th Block",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      avgRating: 4.5,
      parentId: "630",
      avgRatingString: "4.5",
      totalRatingsString: "63K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-01-14 02:55:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!"
          },
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!"
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
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png"
                }
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-b825cd51-6be7-4e8e-ab4b-6e42ac01ec41"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    info: {
      id: "506324",
      name: "Louis Burger",
      cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
      locality: "6Th Block, Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹600 for two",
      cuisines: [
        "Burgers",
        "American",
        "Fast Food"
      ],
      avgRating: 4.3,
      parentId: "22485",
      avgRatingString: "4.3",
      totalRatingsString: "5.6K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-01-14 04:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet"
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
                  description: "Gourmet",
                  imageId: "newg.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-b825cd51-6be7-4e8e-ab4b-6e42ac01ec41"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/louis-burger-6th-block-koramangala-rest506324",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    info: {
      id: "59593",
      name: "Al Daaz",
      cloudinaryImageId: "9d9ccb333db8f94351e3842664d09309",
      locality: "HSR Layout",
      areaName: "HSR Layout",
      costForTwo: "₹400 for two",
      cuisines: [
        "Arabian",
        "Mughlai",
        "Chinese",
        "Desserts",
        "American",
        "Indian",
        "Pizzas"
      ],
      avgRating: 4.5,
      parentId: "21640",
      avgRatingString: "4.5",
      totalRatingsString: "65K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-01-14 01:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "24K+"
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-b825cd51-6be7-4e8e-ab4b-6e42ac01ec41"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/al-daaz-hsr-layout-rest59593",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    info: {
      id: "65797",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      avgRating: 4.5,
      parentId: "371281",
      avgRatingString: "4.5",
      totalRatingsString: "54K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-01-14 04:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
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
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "4.6K+"
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-b825cd51-6be7-4e8e-ab4b-6e42ac01ec41"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-koramangala-rest65797",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    info: {
      id: "56713",
      name: "C. K. Mega Hot Food",
      cloudinaryImageId: "slkxcjg7fezj9tzzspmh",
      locality: "BTM Layout",
      areaName: "BTM Layout",
      costForTwo: "₹350 for two",
      cuisines: [
        "Chinese",
        "Pan-Asian",
        "Seafood",
        "Thai",
        "Oriental",
        "Fast Food",
        "Nepalese"
      ],
      avgRating: 4.2,
      parentId: "21499",
      avgRatingString: "4.2",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-01-14 03:00:00",
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available"
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.8",
          ratingCount: "563"
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-b825cd51-6be7-4e8e-ab4b-6e42ac01ec41"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/c-k-mega-hot-food-btm-layout-rest56713",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    info: {
      id: "337335",
      name: "Kannur food kitchen",
      cloudinaryImageId: "a27weqanhnszqiuzsoik",
      locality: "1st  Stage",
      areaName: "BTM Layout",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kerala",
        "Biryani",
        "Beverages"
      ],
      avgRating: 4.1,
      parentId: "114756",
      avgRatingString: "4.1",
      totalRatingsString: "21K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-01-14 04:00:00",
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available"
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-b825cd51-6be7-4e8e-ab4b-6e42ac01ec41"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kannur-food-kitchen-1st-stage-btm-layout-rest337335",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    info: {
      id: "348811",
      name: "The Cubano Sandwich Co.",
      cloudinaryImageId: "10099994d51aaaa5bd92b253af10fcf4",
      locality: "6th Sector",
      areaName: "HSR Layout",
      costForTwo: "₹300 for two",
      cuisines: [
        "American",
        "Salads",
        "Beverages",
        "Continental",
        "Mexican"
      ],
      avgRating: 4.4,
      parentId: "231098",
      avgRatingString: "4.4",
      totalRatingsString: "4.3K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-01-20 00:00:00",
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available"
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-b825cd51-6be7-4e8e-ab4b-6e42ac01ec41"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/the-cubano-sandwich-co-6th-sector-hsr-layout-rest348811",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]

const resObj = {
    info: {
      id: "25620",
      name: "KFC",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/fc1726b6-290d-463d-9baa-d1c34c0542fc_25620.JPG",
      locality: "Intermediate Ring Road",
      areaName: "Ejipura",
      costForTwo: "₹400 for two",
      cuisines: [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "32K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-01-13 23:59:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
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
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-8e7c61a9-3cd9-409a-80d4-8c72d7b6a076"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kfc-intermediate-ring-road-ejipura-rest25620",
      type: "WEBLINK"
    }
  }


const RestaurantCard = (props) => {
    const {resData} = props;
    console.log(resData);
    
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla: {deliveryTime}} = resData?.info
    
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* Restaurant Card */}
                {resArray.map(resObj => <RestaurantCard key={resObj.info.id} resData={resObj} />)}

            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/fc1726b6-290d-463d-9baa-d1c34c0542fc_25620.JPG
// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/11/21/cdad749f-165b-4aaa-b6b9-1c6f966494b0_a8628830-65ec-43e0-8455-9f4a2ae41001.jpg