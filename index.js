function getDistance(distanceTraveled, traveledPercent) {
	return 'distance between village and capital: ' + distanceTraveled / traveledPercent * 100 + 'm';
}

module.exports = getDistance;