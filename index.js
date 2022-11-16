function getDistance(distanceTraveled, traveledPercent) {
	const onePercent = distanceTraveled / traveledPercent;
	const totalDistance = onePercent * 100;
	return 'distance between village and capital: ' + totalDistance + 'm';
}

module.exports = getDistance;