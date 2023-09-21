export const getAirQualityIndexes = (components) => {
  const getAirQualityIndex = (pollutant, value) => {
    const ranges = {
      so2: [[0, 20], [20, 80], [80, 250], [250, 350], [350, Infinity]],
      no2: [[0, 40], [40, 70], [70, 150], [150, 200], [200, Infinity]],
      pm10: [[0, 20], [20, 50], [50, 100], [100, 200], [200, Infinity]],
      pm2_5: [[0, 10], [10, 25], [25, 50], [50, 75], [75, Infinity]],
      o3: [[0, 60], [60, 100], [100, 140], [140, 180], [180, Infinity]],
      co: [[0, 4400], [4400, 9400], [9400, 12400], [12400, 15400], [15400, Infinity]],
      no: [[0, 20], [20, 40], [40, 100], [100, 200], [200, Infinity]], // Penambahan untuk NO
    };

    const labels = [
      'Baik',
      'Cukup',
      'Sedang',
      'Buruk',
      'Sangat Buruk'
    ];

    // Periksa apakah `pollutant` terdefinisi dan ada dalam objek `ranges`
    if (pollutant && ranges[pollutant]) {
      for (let i = 0; i < ranges[pollutant].length; i++) {
        if (value < ranges[pollutant][i][1]) {
          return {
            index: i + 1,
            label: labels[i],
            range: ranges[pollutant][i],
          };
        }
      }
    }
    // Mengembalikan nilai default jika `pollutant` tidak terdefinisi atau tidak ada dalam objek `ranges`
    return {
      index: 0,
      label: 'Unknown',
      range: [0, Infinity],
    };
  };

  const map = {
    so2: 'SO₂ (Sulfur Dioksida)',
    no2: 'NO₂ (Dinitrogen Dioksida)',
    pm10: 'PM₁₀ (Partikel Mater ≤ 10 µm)',
    pm2_5: 'PM₂.₅ (Partikel Mater ≤ 2.5 µm)',
    o3: 'O₃ (Ozon)',
    co: 'CO (Karbon Monoksida)',
    no: 'NO (Nitrogen Monoksida)', // Penambahan untuk NO
  };

  // Mengembalikan hasil dalam bentuk array objek
  return Object.entries(components).map(([pollutant, value]) => {
    const { index, label, range } = getAirQualityIndex(pollutant, value);
    return {
      pollutant: map[pollutant],
      description: map[pollutant],
      value,
      index,
      label,
      range,
      fullDescription: `Kualitas udara ${label.toLowerCase()} untuk ${map[pollutant]}: ${range[0]} - ${range[1]} µg/m³`,
    };
  });
};
