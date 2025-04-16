const { render, screen } = require("@testing-library/react")
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../../components/mocks/resCardMock.json"
import "@testing-library/jest-dom"


it("Should render RestaurantCard component with props data", () => {

    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("KFC");

    expect(name).toBeInTheDocument();

})

// it("should render RestaurantCard component with promoted label", () => {
    
// })


































// {
//     "id": "25620",
//     "name": "KFC",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/fc1726b6-290d-463d-9baa-d1c34c0542fc_25620.JPG",
//     "locality": "Intermediate Ring Road",
//     "areaName": "Ejipura",
//     "costForTwo": "₹400 for two",
//     "cuisines": [
//         "Burgers",
//         "Fast Food",
//         "Rolls & Wraps"
//     ],
//     "avgRating": 4.3,
//     "parentId": "547",
//     "avgRatingString": "4.3",
//     "totalRatingsString": "32K+",
//     "sla": {
//         "deliveryTime": 23,
//         "lastMileTravel": 0.9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20-25 mins",
//         "lastMileTravelString": "0.9 km",
//         "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//         "nextCloseTime": "2025-04-08 23:59:00",
//         "opened": true
//     },
//     "badges": {
//         "imageBadges": [
//             {
//                 "imageId": "bolt/bolt%206.png",
//                 "description": "bolt!"
//             }
//         ]
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//         "entityBadges": {
//             "imageBased": {
//                 "badgeObject": [
//                     {
//                         "attributes": {
//                             "description": "bolt!",
//                             "imageId": "bolt/bolt%206.png"
//                         }
//                     }
//                 ]
//             },
//             "textBased": {},
//             "textExtendedBadges": {}
//         }
//     },
//     "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹59"
//     },
//     "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//             "lottie": {},
//             "video": {}
//         }
//     },
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {},
//     "externalRatings": {
//         "aggregatedRating": {
//             "rating": "--"
//         }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
// }