let value3 = Math.floor(Math.random() * 10);

function generateRandomInRange(min, max, n) {
  data = []
  min = Math.ceil(min);
  max = Math.floor(max);

  for (i=1;i<=n;i++) {
    var dataToPush = ((Math.random() * (max - min + 1)) + min).toFixed(2)
    data.push(parseFloat(dataToPush))
  }

  return data
}

var dataChart2 = [{
  // daily
  "daily": [{
    "label": ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "08:00", "10:00",
      "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    "data": [
    // karawang 1
    {
      "plant":"karawang1", 
      "carbon":[{
        "manufacturing":generateRandomInRange(10,50,24),
        "building":generateRandomInRange(10,50,24),
        "utility":generateRandomInRange(10,50,24),
        "digital":generateRandomInRange(10,50,24),
      }]
    },

    // karawang 2
    {
      "plant":"karawang2", 
      "carbon":[{
        "manufacturing":generateRandomInRange(10,50,24),
        "building":generateRandomInRange(10,50,24),
        "utility":generateRandomInRange(10,50,24),
        "digital":generateRandomInRange(10,50,24),
      }]
    },
    
    // karawang 3
    {
      "plant":"karawang3", 
      "carbon":[{
        "manufacturing":generateRandomInRange(10,50,24),
        "building":generateRandomInRange(10,50,24),
        "utility":generateRandomInRange(10,50,24),
        "digital":generateRandomInRange(10,50,24),
      }]
    },

    // sunter 1
    {
      "plant":"sunter1", 
      "carbon":[{
        "manufacturing":generateRandomInRange(10,50,24),
        "building":generateRandomInRange(10,50,24),
        "utility":generateRandomInRange(10,50,24),
        "digital":generateRandomInRange(10,50,24),
      }]
    },

    // sunter 2
    {
      "plant":"sunter2", 
      "carbon":[{
        "manufacturing":generateRandomInRange(10,50,24),
        "building":generateRandomInRange(10,50,24),
        "utility":generateRandomInRange(10,50,24),
        "digital":generateRandomInRange(10,50,24),
      }]
    }
    ]
  }],

  // monthly
  "monthly": [
    {
      "label": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, /*11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30*/],
      "data": [  
        // karawang 1
        {
          "plant":"karawang1", 
          "carbon":[{
            "manufacturing":generateRandomInRange(100, 200, 10),
            "building":generateRandomInRange(100, 200, 10),
            "utility":generateRandomInRange(100, 200, 10),
            "digital":generateRandomInRange(100, 200, 10),
          }]
        },

        // karawang 2
        {
          
          "plant":"karawang2", 
          "carbon":[{
            "manufacturing":generateRandomInRange(100, 200, 10),
            "building":generateRandomInRange(100, 200, 10),
            "utility":generateRandomInRange(100, 200, 10),
            "digital":generateRandomInRange(100, 200, 10),
          }]
        },
        
        // karawang 3
        {
          "plant":"karawang3", 
          "carbon":[{
            "manufacturing":generateRandomInRange(100, 200, 10),
            "building":generateRandomInRange(100, 200, 10),
            "utility":generateRandomInRange(100, 200, 10),
            "digital":generateRandomInRange(100, 200, 10),
          }]
        },

        // sunter 1
        {
          "plant":"sunter1", 
          "carbon":[{
            "manufacturing":generateRandomInRange(100, 200, 10),
            "building":generateRandomInRange(100, 200, 10),
            "utility":generateRandomInRange(100, 200, 10),
            "digital":generateRandomInRange(100, 200, 10),
          }]
        },

        // sunter 2
        {
          "plant":"sunter2", 
          "carbon":[{
            "manufacturing":generateRandomInRange(100, 200, 10),
            "building":generateRandomInRange(100, 200, 10),
            "utility":generateRandomInRange(100, 200, 10),
            "digital":generateRandomInRange(100, 200, 10),
          }]
        }
      ]
    }
  ],

  // yearly
  "yearly": [{
    "label": ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct',/*'Nov','Dec'*/],
    "data": [
      // karawang 1
      {
        "plant":"karawang1", 
        "carbon":[{
          "manufacturing":generateRandomInRange(1000, 3000, 10),
          "building":generateRandomInRange(1000, 3000, 10),
          "utility":generateRandomInRange(1000, 3000, 10),
          "digital":generateRandomInRange(1000, 3000, 10),
        }]
      },

      // karawang 2
      {
        "plant":"karawang2", 
        "carbon":[{
          "manufacturing":generateRandomInRange(1000, 3000, 10),
          "building":generateRandomInRange(1000, 3000, 10),
          "utility":generateRandomInRange(1000, 3000, 10),
          "digital":generateRandomInRange(1000, 3000, 10),
        }]
      },
      
      // karawang 3
      {
        "plant":"karawang3", 
        "carbon":[{
          "manufacturing":generateRandomInRange(1000, 3000, 12),
          "building":generateRandomInRange(1000, 3000, 12),
          "utility":generateRandomInRange(1000, 3000, 12),
          "digital":generateRandomInRange(1000, 3000, 12),
        }]
      },

      // sunter 1
      {
        "plant":"sunter1", 
        "carbon":[{
          "manufacturing":generateRandomInRange(1000, 3000, 12),
          "building":generateRandomInRange(1000, 3000, 12),
          "utility":generateRandomInRange(1000, 3000, 12),
          "digital":generateRandomInRange(1000, 3000, 12),
        }]
      },

      // sunter 2
      {
        "plant":"sunter2", 
        "carbon":[{
          "manufacturing":generateRandomInRange(1000, 3000, 12),
          "building":generateRandomInRange(1000, 3000, 12),
          "utility":generateRandomInRange(1000, 3000, 12),
          "digital":generateRandomInRange(1000, 3000, 12),
        }]
      }

    ]
  }],
}]

var dataChart3 = [
  // karawang1
  {
    "plant":"karawang1", 
    "carbon":[
      {
        "type": "manufacturing",
        "value": parseFloat(generateRandomInRange(1000.30,3000.30,1))
      },
      {
        "type": "building",
        "value": parseFloat(generateRandomInRange(1000.30,3000.30,1))
      },
      {
        "type": "utility",
        "value": parseFloat(generateRandomInRange(1000.30,3000.30,1))
      },
      {
        "type": "digital",
        "value": parseFloat(generateRandomInRange(1000.30,3000.30,1))
      },
    ]
  },

  // karawang 2
  {
    "plant":"karawang2", 
    "carbon":[
      {
        "type": "manufacturing",
        "value": parseInt(generateRandomInRange(1000,3000,1))
      },
      {
        "type": "building",
        "value": parseInt(generateRandomInRange(1000,3000,1))
      },
      {
        "type": "utility",
        "value": parseInt(generateRandomInRange(1000,3000,1))
      },
      {
        "type": "digital",
        "value": parseInt(generateRandomInRange(1000,3000,1))
      },
    ]
  },
  
  // karawang 3
  {
    "plant":"karawang3", 
    "carbon":[
      {
        "type": "manufacturing",
        "value": parseInt(generateRandomInRange(1000,3000,1))
      },
      {
        "type": "building",
        "value": parseInt(generateRandomInRange(1000,3000,1))
      },
      {
        "type": "utility",
        "value": parseInt(generateRandomInRange(1000,3000,1))
      },
      {
        "type": "digital",
        "value": parseInt(generateRandomInRange(1000,3000,1))
      },
    ]
  },

  // sunter 1
  {
    "plant":"sunter1", 
    "carbon":[
      {
        "type": "manufacturing",
        "value": parseInt(generateRandomInRange(1000,3000,1))
      },
      {
        "type": "building",
        "value": parseInt(generateRandomInRange(1000,3000,1))
      },
      {
        "type": "utility",
        "value": parseInt(generateRandomInRange(1000,3000,1))
      },
      {
        "type": "digital",
        "value": parseInt(generateRandomInRange(1000,3000,1))
      },
    ]
  },

  // sunter 2
  {
    "plant":"sunter2", 
    "carbon":[
      {
        "type": "manufacturing",
        "value": parseInt(generateRandomInRange(1000,3000,1))
      },
      {
        "type": "building",
        "value": parseInt(generateRandomInRange(1000,3000,1))
      },
      {
        "type": "utility",
        "value": parseInt(generateRandomInRange(1000,3000,1))
      },
      {
        "type": "digital",
        "value": parseInt(generateRandomInRange(1000,3000,1))
      },
    ]
  }
]

