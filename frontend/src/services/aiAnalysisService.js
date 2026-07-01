export async function analyzeFloorPlan(file) {
  // Simulate AI processing
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return {
    projectName: file?.name || "Unknown Project",

    rooms: {
      bedrooms: 3,
      bathrooms: 2,
      kitchen: 1,
      livingRoom: 1,
      diningRoom: 1,
    },

    area: {
      builtUp: 1825,
      unit: "sqft",
    },

    vastu: {
      score: 88,
      recommendations: [
        "Move main entrance 2 feet east",
        "Kitchen location is good",
      ],
    },

    confidence: 97,
  };
}