import restaurants from "./restaurants";
const hour: number = new Date().getHours();
const dollarSigns = "$$";
const deliveryTimeMax = "90";
const maxDistance = 10;
let result: string;

const priceBracket: number = dollarSigns.length;
let restaurantList: string[] = Array();
const filteredRestaurants = restaurants.filter((restaurant: any) => {
  if (Number(restaurant.priceBracket) > priceBracket) {
    return false;
  }

  if (restaurant.deliveryTimeMinutes > Number(deliveryTimeMax)) {
    return false;
  }

  if (Number(restaurant.distance) > maxDistance) {
    return false;
  }
  if (
    Number(restaurant.openHour) > hour ||
    Number(restaurant.closeHour) < hour
  ) {
    return false;
  }
  restaurantList.push("\n" + restaurant.name);
  return restaurant;
});

if (filteredRestaurants.length === 0) {
  result = "There are no restaurants available right now.";
} else {
  result = `We found ${filteredRestaurants.length} restaurant/s, the list of restaurant as shown ${restaurantList}`;
}

console.log(result);
