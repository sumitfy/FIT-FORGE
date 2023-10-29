require("dotenv").config();
const express = require("express");
const absM = require("./models/abs");
const chestM = require("./models/chest");
const bicepM = require("./models/biceps");
const tricepsM = require("./models/triceps");
const shoulderM = require("./models/shoulder");
const forearmM = require("./models/forearm");
const calfM = require("./models/calves");
const hamestringM = require("./models/legs(hamstrings)");
const quadM = require("./models/legs(quardri)");
const trapsM = require("./models/traps");
const glutesM = require("./models/glutes");
const obliquesM = require("./models/obliques");
const mongoose = require("mongoose");
const hbs = require("hbs");
const backM = require("./models/back");
const latsM = require("./models/lats");
const lowerBackM = require("./models/lower_back");
const app = express();

app.set("view engine", "hbs");
app.set("views", "views");
app.use("/static", express.static("public"));
hbs.registerPartials("views/partials");
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, resp) => {
  resp.render("index");
});

app.get("/abs", async (req, resp) => {
  try {
    const data = await absM.find();
    resp.render("abs", { data: data });
  } catch (err) {
    console.error(err);
    resp.status(500).send("Error fetching data from MongoDB");
  }
});

app.get("/chest", async (req, resp) => {
  try {
    const data = await chestM.find();
    resp.render("abs", { data: data });
  } catch (err) {
    console.error(err);
    resp.status(500).send("Error fetching data from MongoDB");
  }
});

app.get("/biceps", async (req, resp) => {
  try {
    const data = await bicepM.find();
    resp.render("abs", { data: data });
  } catch (err) {
    console.error(err);
    resp.status(500).send("Error fetching data from MongoDB");
  }
});

app.get("/triceps", async (req, resp) => {
  try {
    const data = await tricepsM.find();
    resp.render("abs", { data: data });
  } catch (err) {
    console.error(err);
    resp.status(500).send("Error fetching data from MongoDB");
  }
});

app.get("/calf", async (req, resp) => {
  try {
    const data = await calfM.find();
    resp.render("abs", { data: data });
  } catch (err) {
    console.error(err);
    resp.status(500).send("Error fetching data from MongoDB");
  }
});

app.get("/trap", async (req, resp) => {
  try {
    const data = await trapsM.find();
    resp.render("abs", { data: data });
  } catch (err) {
    console.error(err);
    resp.status(500).send("Error fetching data from MongoDB");
  }
});

app.get("/forearm", async (req, resp) => {
  try {
    const data = await forearmM.find();

    resp.render("abs", { data: data });
  } catch (err) {
    console.error(err);
    resp.status(500).send("Error fetching data from MongoDB");
  }
});
app.get("/quadriceps", async (req, resp) => {
  try {
    const data = await quadM.find();
    resp.render("abs", { data: data });
  } catch (err) {
    console.error(err);
    resp.status(500).send("Error fetching data from MongoDB");
  }
});
app.get("/shoulder", async (req, resp) => {
  try {
    const data = await shoulderM.find();
    resp.render("abs", { data: data });
  } catch (err) {
    console.error(err);
    resp.status(500).send("Error fetching data from MongoDB");
  }
});
app.get("/hamstrings", async (req, resp) => {
  try {
    const data = await hamestringM.find();
    resp.render("abs", { data: data });
  } catch (err) {
    console.error(err);
    resp.status(500).send("Error fetching data from MongoDB");
  }
});
app.get("/glutes", async (req, resp) => {
  try {
    const data = await glutesM.find();
    resp.render("abs", { data: data });
  } catch (err) {
    console.error(err);
    resp.status(500).send("Error fetching data from MongoDB");
  }
});
app.get("/back", async (req, resp) => {
  try {
    const data = await backM.find();
    resp.render("abs", { data: data });
  } catch (err) {
    console.error(err);
    resp.status(500).send("Error fetching data from MongoDB");
  }
});
app.get("/lowerback", async (req, resp) => {
  try {
    const data = await lowerBackM.find();
    resp.render("abs", { data: data });
  } catch (err) {
    console.error(err);
    resp.status(500).send("Error fetching data from MongoDB");
  }
});
app.get("/lats", async (req, resp) => {
  try {
    const data = await latsM.find();
    resp.render("abs", { data: data });
  } catch (err) {
    console.error(err);
    resp.status(500).send("Error fetching data from MongoDB");
  }
});
app.get("/obliques", async (req, resp) => {
  try {
    const data = await obliquesM.find();
    resp.render("abs", { data: data });
  } catch (err) {
    console.error(err);
    resp.status(500).send("Error fetching data from MongoDB");
  }
});
// const chestdata = ([
//     {
//         E_mainDesc:"Now that we'’\'re aware of the benefits of the abs workout for men and women, let’s look at the six easy exercises to begin your workout journey. These exercises have been selected such that even a beginner can efficiently perform them.  Notably, we are starting with basics, and you can perform these workouts even at your home. It is advisable to perform them for 30-45 seconds with a break of 20 seconds in between. ",
//         E_name:"Flat Dumbbell Bench Press",
//         E_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEoKzFPPxsKZbFSzlqxnc7Z3ZKmf_hwFs0g&usqp=CAU",
//         E_desc:"This exercise is a great way to target the entire chest, including the upper, middle, and lower chest muscles. To do this exercise correctly, make sure to keep your back flat on the bench and your core engaged. Lower the dumbbells down to your chest until they are just above your nipples, then press them back up to the starting position.",
//         step1:"Lie on a flat bench with your feet flat on the floor and your hands shoulder-width apart on a dumbbell in each hand.",
//         step2:"Lower the dumbbells down to your chest, keeping your elbows close to your sides.",
//         step3:"Press the dumbbells back up to the starting position.",
//         step4:"Repeat for 10-12 repetitions.",
//         step5:"Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc:"Now that we'’\'re aware of the benefits of the abs workout for men and women, let’s look at the six easy exercises to begin your workout journey. These exercises have been selected such that even a beginner can efficiently perform them.  Notably, we are starting with basics, and you can perform these workouts even at your home. It is advisable to perform them for 30-45 seconds with a break of 20 seconds in between. ",
//         E_name:"Incline Dumbbell Bench Press ",
//         E_url:"https://cdn2.iconfinder.com/data/icons/exercise-bike/500/vab955_2_boy_exercise_bike_isometric_cartoon_family_woman-512.png",
//         E_desc:" This exercise targets the upper chest muscles more specifically. To do this exercise, simply lie on an incline bench and follow the same steps as the flat dumbbell bench press.",
//         step1:"Lie on an incline bench with your feet flat on the floor and your hands shoulder-width apart on a dumbbell in each hand.",
//         step2:"Lower the dumbbells down to your chest, keeping your elbows close to your sides.",
//         step3:"Press the dumbbells back up to the starting position.",
//         step4:"Repeat for 10-12 repetitions.",
//         step5:"Rest for 1-2 minutes and then repeat. "
//     },
//     {
//         E_mainDesc:"Now that we'’\'re aware of the benefits of the abs workout for men and women, let’s look at the six easy exercises to begin your workout journey. These exercises have been selected such that even a beginner can efficiently perform them.  Notably, we are starting with basics, and you can perform these workouts even at your home. It is advisable to perform them for 30-45 seconds with a break of 20 seconds in between. ",
//         E_name:"Decline Dumbbell Bench Press",
//         E_url:"https://media1.popsugar-assets.com/files/thumbor/_3iB-ysNgbvnK5uVJLQTrbOkB1w/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/11/10/068/n/1922729/9ee1c5a5de084716_flutter/i/Leg-Flutters.jpg",
//         E_desc:"This exercise targets the lower chest muscles more specifically. To do this exercise, simply lie on a decline bench and follow the same steps as the flat dumbbell bench press.",
//         step1:"Lie on a decline bench with your feet flat on the floor and your hands shoulder-width apart on a dumbbell in each hand.",
//         step2:"Lower the dumbbells down to your chest, keeping your elbows close to your sides.",
//         step3:"Press the dumbbells back up to the starting position.",
//         step4:"Repeat for 10-12 repetitions.",
//         step5:"Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc:"Now that we'’\'re aware of the benefits of the abs workout for men and women, let’s look at the six easy exercises to begin your workout journey. These exercises have been selected such that even a beginner can efficiently perform them.  Notably, we are starting with basics, and you can perform these workouts even at your home. It is advisable to perform them for 30-45 seconds with a break of 20 seconds in between. ",
//         E_name:" Push-Up",
//         E_url:"https://cdn2.vectorstock.com/i/1000x1000/46/91/leg-raises-tabata-exercises-vector-21694691.jpg",
//         E_desc:"The push-up is a classic chest exercise that can be done anywhere. To do a push-up, start in a plank position with your hands shoulder-width apart and your body in a straight line from your head to your heels. Lower your body down until your chest touches the ground, then push back up to the starting position. If you are a beginner, you can start with your knees on the ground.",
//         step1:"Start in a plank position with your hands shoulder-width apart and your body in a straight line from your head to your heels.",
//         step2:"Lower your body down until your chest touches the ground, keeping your core engaged.",
//         step3:"Push back up to the starting position.",
//         step4:"Repeat for 10-12 repetitions.",
//         step5:"Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc:"Now that we'’\'re aware of the benefits of the abs workout for men and women, let’s look at the six easy exercises to begin your workout journey. These exercises have been selected such that even a beginner can efficiently perform them.  Notably, we are starting with basics, and you can perform these workouts even at your home. It is advisable to perform them for 30-45 seconds with a break of 20 seconds in between. ",
//         E_name:"Chest Fly",
//         E_url:"https://cdn2.vectorstock.com/i/1000x1000/46/91/leg-raises-tabata-exercises-vector-21694691.jpg",
//         E_desc:" The chest fly is a great exercise for targeting the inner chest muscles. To do this exercise, sit on a cable machine with your back straight and your feet flat on the floor. Grab a handle in each hand and extend your arms out to the sides, palms facing each other. Pull the handles towards your chest, keeping your elbows slightly bent. Slowly return to the starting position.",
//         step1:"Sit on a cable machine with your back straight and your feet flat on the floor.",
//         step2:"Grab a handle in each hand and extend your arms out to the sides, palms facing each other.",
//         step3:"Pull the handles towards your chest, keeping your elbows slightly bent.",
//         step4:"Slowly return to the starting position.",
//         step5:"Repeat for 10-12 repetitions , take rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc:"Now that we'’\'re aware of the benefits of the abs workout for men and women, let’s look at the six easy exercises to begin your workout journey. These exercises have been selected such that even a beginner can efficiently perform them.  Notably, we are starting with basics, and you can perform these workouts even at your home. It is advisable to perform them for 30-45 seconds with a break of 20 seconds in between. ",
//         E_name:"Cable Crossover",
//         E_url:"https://cdn2.vectorstock.com/i/1000x1000/46/91/leg-raises-tabata-exercises-vector-21694691.jpg",
//         E_desc:"The cable crossover is a great exercise for targeting the entire chest muscles. To do this exercise, stand in the middle of two cable machines with a handle in each hand. Extend your arms out to the sides, palms facing each other. Pull the handles towards each other, crossing your forearms in front of your chest. Slowly return to the starting position.",
//         step1:"Stand in the middle of two cable machines with a handle in each hand.",
//         step2:"Extend your arms out to the sides, palms facing each other.",
//         step3:"Pull the handles towards each other, crossing your forearms in front of your chest.",
//         step4:"Slowly return to the starting position.",
//         step5:"Repeat for 10-12 repetitions , take rest for 1-2 minutes and then repeat."
//     },
// ])

// const bicepsdata = ([
//     {
//         E_mainDesc: "Now that we're aware of the benefits of biceps workout for men and women, let’s look at ten easy biceps exercises to begin your workout journey. These exercises have been selected so that even beginners can efficiently perform them. Notably, we are starting with basics, and you can perform these workouts even at your home. It is advisable to perform them for 30-45 seconds with a break of 20 seconds in between.",
//         E_name: "Standing Dumbbell Curls",
//         E_url: "https://example.com/standing-dumbbell-curls-image.jpg",
//         E_desc: "Standing dumbbell curls are an excellent exercise to target your biceps. Stand with your feet shoulder-width apart, hold a dumbbell in each hand, and curl your arms to lift the weights towards your shoulders.",
//         step1: "Stand with your feet shoulder-width apart and hold a dumbbell in each hand with your arms fully extended.",
//         step2: "Curl the dumbbells toward your shoulders while keeping your elbows close to your sides.",
//         step3: "Lower the dumbbells back down to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "Build your biceps with this effective exercise. Hammer curls are a variation of traditional bicep curls that target the brachialis muscle. Hold a dumbbell in each hand with a neutral grip (palms facing your torso) and curl the weights up alternately.",
//         E_name: "Hammer Curls",
//         E_url: "https://example.com/hammer-curls-image.jpg",
//         E_desc: "Hold a dumbbell in each hand with a neutral grip, stand with your feet shoulder-width apart, and curl the weights alternately towards your shoulders.",
//         step1: "Hold a dumbbell in each hand with a neutral grip, arms fully extended.",
//         step2: "Curl one dumbbell towards your shoulder while keeping the other arm extended.",
//         step3: "Lower the lifted dumbbell back down.",
//         step4: "Repeat with the other arm. Alternate arms for 10-12 repetitions per side.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "Concentration curls are an isolation exercise that targets the biceps. Sit on a bench with your legs apart, hold a dumbbell with one hand, and curl it towards your shoulder while keeping your upper arm stationary. This exercise allows you to focus on each arm individually.",
//         E_name: "Concentration Curls",
//         E_url: "https://example.com/concentration-curls-image.jpg",
//         E_desc: "Sit on a bench with your legs apart, hold a dumbbell with one hand, and curl it towards your shoulder while keeping your upper arm stationary.",
//         step1: "Sit on a bench with your legs apart, holding a dumbbell in one hand.",
//         step2: "Rest your elbow on the inside of your thigh and curl the dumbbell towards your shoulder.",
//         step3: "Lower the dumbbell back down and repeat for 10-12 repetitions on each arm.",
//         step4: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The preacher curl is another great biceps isolation exercise. Use a preacher bench or an incline bench with a preacher curl attachment. Hold a barbell with an underhand grip and curl it towards your shoulders while keeping your upper arms supported on the bench.",
//         E_name: "Preacher Curl",
//         E_url: "https://example.com/preacher-curl-image.jpg",
//         E_desc: "Use a preacher bench or an incline bench with a preacher curl attachment. Hold a barbell with an underhand grip and curl it towards your shoulders while keeping your upper arms supported on the bench.",
//         step1: "Set up on a preacher bench or an incline bench with a preacher curl attachment.",
//         step2: "Hold a barbell with an underhand grip and curl it towards your shoulders.",
//         step3: "Keep your upper arms supported on the bench and repeat for 10-12 repetitions.",
//         step4: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "Barbell curls are a classic biceps exercise that can help you build strength and size in your biceps. Hold a barbell with an underhand grip, stand with your feet shoulder-width apart, and curl the barbell towards your shoulders.",
//         E_name: "Barbell Curls",
//         E_url: "https://example.com/barbell-curls-image.jpg",
//         E_desc: "Hold a barbell with an underhand grip, stand with your feet shoulder-width apart, and curl the barbell towards your shoulders.",
//         step1: "Stand with your feet shoulder-width apart and hold a barbell with an underhand grip, arms fully extended.",
//         step2: "Curl the barbell towards your shoulders while keeping your elbows close to your sides.",
//         step3: "Lower the barbell back down to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The cable bicep curl is an effective exercise that provides constant tension on the biceps. Stand in front of a cable machine with a straight bar attachment, hold the bar with an underhand grip, and curl it towards your shoulders.",
//         E_name: "Cable Bicep Curl",
//         E_url: "https://example.com/cable-bicep-curl-image.jpg",
//         E_desc: "Stand in front of a cable machine with a straight bar attachment, hold the bar with an underhand grip, and curl it towards your shoulders.",
//         step1: "Stand in front of a cable machine with a straight bar attachment.",
//         step2: "Hold the bar with an underhand grip and curl it towards your shoulders.",
//         step3: "Keep your elbows close to your sides and repeat for 10-12 repetitions.",
//         step4: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The chin-up is a bodyweight exercise that targets the biceps and back muscles. Hang from a pull-up bar with your palms facing you and your hands shoulder-width apart. Pull your body up until your chin is above the bar and then lower it back down.",
//         E_name: "Chin-Ups",
//         E_url: "https://example.com/chin-ups-image.jpg",
//         E_desc: "Hang from a pull-up bar with your palms facing you and your hands shoulder-width apart. Pull your body up until your chin is above the bar and then lower it back down.",
//         step1: "Hang from a pull-up bar with your palms facing you and your hands shoulder-width apart.",
//         step2: "Pull your body up until your chin is above the bar.",
//         step3: "Lower your body back down to the starting position and repeat for 10-12 repetitions.",
//         step4: "Rest for 1-2 minutes and then repeat."
//     },
// ]);

// const tricepsdata = ([
//     {
//         E_mainDesc: "Now that we're aware of the benefits of triceps workouts, let’s look at seven easy triceps exercises to begin your workout journey. These exercises have been selected so that even beginners can efficiently perform them. Notably, we are starting with basics, and you can perform these workouts even at your home. It is advisable to perform them for 30-45 seconds with a break of 20 seconds in between.",
//         E_name: "Tricep Dips",
//         E_url: "https://example.com/tricep-dips-image.jpg",
//         E_desc: "Tricep dips are a great bodyweight exercise to target your triceps. Use parallel bars or the edge of a stable surface to perform this exercise.",
//         step1: "Place your hands on parallel bars or the edge of a stable surface with your palms facing down and your arms fully extended.",
//         step2: "Lower your body by bending your elbows until your upper arms are parallel to the ground.",
//         step3: "Push your body back up to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The tricep pushdown is a popular exercise that targets the triceps using a cable machine. Attach a rope handle to the high pulley of the cable machine and perform this exercise.",
//         E_name: "Tricep Pushdown",
//         E_url: "https://example.com/tricep-pushdown-image.jpg",
//         E_desc: "Attach a rope handle to the high pulley of a cable machine and stand facing the machine. Hold the rope with both hands and perform the pushdown motion.",
//         step1: "Attach a rope handle to the high pulley of a cable machine.",
//         step2: "Stand facing the machine and hold the rope with both hands.",
//         step3: "Extend your arms down, pushing the rope handle towards your thighs.",
//         step4: "Return to the starting position by bending your elbows.",
//         step5: "Repeat for 10-12 repetitions.",
//         step6: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "Close-grip bench press is a compound exercise that primarily targets the triceps. It's performed on a bench press with a narrow hand placement.",
//         E_name: "Close-Grip Bench Press",
//         E_url: "https://example.com/close-grip-bench-press-image.jpg",
//         E_desc: "Lie on a bench press with your hands positioned closer together than in a regular bench press. This variation places more emphasis on the triceps.",
//         step1: "Lie on a bench press with your hands positioned close together on the barbell.",
//         step2: "Lower the barbell to your chest by bending your elbows.",
//         step3: "Press the barbell back up to the starting position by extending your arms.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         // Add more triceps exercises here following the same format
//     },
//     {
//         E_mainDesc: "The skull crusher, also known as the lying tricep extension, is a triceps isolation exercise. Lie on a bench with a barbell or dumbbells, and extend your arms overhead.",
//         E_name: "Skull Crusher (Lying Tricep Extension)",
//         E_url: "https://example.com/skull-crusher-image.jpg",
//         E_desc: "Lie on a bench with your arms extended overhead, holding a barbell or dumbbells. Lower the weight toward your forehead and then extend your arms back up.",
//         step1: "Lie on a bench with your arms extended overhead, holding a barbell or dumbbells.",
//         step2: "Lower the weight toward your forehead by bending your elbows.",
//         step3: "Extend your arms back up to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "Tricep kickbacks are an effective isolation exercise for the triceps. Hold a dumbbell in one hand and perform the kickback motion to target the triceps.",
//         E_name: "Tricep Kickbacks",
//         E_url: "https://example.com/tricep-kickbacks-image.jpg",
//         E_desc: "Hold a dumbbell in one hand and lean forward slightly. Extend your arm backward, focusing on contracting the triceps at the top of the motion.",
//         step1: "Hold a dumbbell in one hand and lean forward slightly with your opposite knee and hand on a bench or stable surface.",
//         step2: "Extend your arm backward, focusing on contracting the triceps at the top of the motion.",
//         step3: "Return to the starting position and repeat for 10-12 repetitions on each arm.",
//         step4: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The diamond push-up is a variation of the traditional push-up that places more emphasis on the triceps. Perform this exercise with your hands close together, forming a diamond shape with your thumbs and index fingers.",
//         E_name: "Diamond Push-Ups",
//         E_url: "https://example.com/diamond-push-ups-image.jpg",
//         E_desc: "Perform push-ups with your hands close together, forming a diamond shape with your thumbs and index fingers. This variation targets the triceps more effectively.",
//         step1: "Assume a push-up position with your hands close together, forming a diamond shape with your thumbs and index fingers.",
//         step2: "Lower your body down by bending your elbows.",
//         step3: "Push your body back up to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
// ]);

// const shoulderData = ([
//     {
//         E_mainDesc: "Now that we're aware of the benefits of shoulder workouts, let’s look at six effective shoulder exercises to begin your workout journey. These exercises have been selected so that even beginners can efficiently perform them. Notably, we are starting with basics, and you can perform these workouts even at your home. It is advisable to perform them for 30-45 seconds with a break of 20 seconds in between.",
//         E_name: "Dumbbell Shoulder Press",
//         E_url: "https://example.com/dumbbell-shoulder-press-image.jpg",
//         E_desc: "The dumbbell shoulder press is a compound exercise that targets the front and middle deltoids. Sit on a bench with back support, hold a dumbbell in each hand at shoulder height, and press them overhead.",
//         step1: "Sit on a bench with back support, holding a dumbbell in each hand at shoulder height.",
//         step2: "Press the dumbbells overhead until your arms are fully extended.",
//         step3: "Lower the dumbbells back to shoulder height.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "Lateral raises are a great exercise for targeting the side deltoids. Hold a dumbbell in each hand at your sides, and lift them out to the sides until they are at shoulder level.",
//         E_name: "Lateral Raises",
//         E_url: "https://example.com/lateral-raises-image.jpg",
//         E_desc: "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at your sides. Lift the dumbbells out to the sides until they are at shoulder level.",
//         step1: "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at your sides.",
//         step2: "Lift the dumbbells out to the sides until they are at shoulder level.",
//         step3: "Lower the dumbbells back down to your sides.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The upright row is an exercise that targets the traps and front deltoids. Hold a barbell or dumbbells with an overhand grip, and lift them up to your chin by raising your elbows.",
//         E_name: "Upright Row",
//         E_url: "https://example.com/upright-row-image.jpg",
//         E_desc: "Hold a barbell or dumbbells with an overhand grip, and lift them up to your chin by raising your elbows. Keep the weights close to your body throughout the movement.",
//         step1: "Hold a barbell or dumbbells with an overhand grip, arms fully extended.",
//         step2: "Lift the weights up to your chin by raising your elbows.",
//         step3: "Lower the weights back down to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The face pull is an excellent exercise for the rear deltoids and upper traps. Attach a rope handle to a cable machine and pull the rope towards your face, squeezing your shoulder blades together.",
//         E_name: "Face Pull",
//         E_url: "https://example.com/face-pull-image.jpg",
//         E_desc: "Attach a rope handle to a cable machine at chest height. Pull the rope towards your face while squeezing your shoulder blades together.",
//         step1: "Attach a rope handle to a cable machine at chest height.",
//         step2: "Pull the rope towards your face by squeezing your shoulder blades together.",
//         step3: "Slowly release the rope and return to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The seated dumbbell shrug targets the upper traps. Sit on a bench with back support, hold a dumbbell in each hand at your sides, and shrug your shoulders towards your ears.",
//         E_name: "Seated Dumbbell Shrug",
//         E_url: "https://example.com/seated-dumbbell-shrug-image.jpg",
//         E_desc: "Sit on a bench with back support, holding a dumbbell in each hand at your sides. Shrug your shoulders towards your ears and squeeze your traps at the top of the movement.",
//         step1: "Sit on a bench with back support, holding a dumbbell in each hand at your sides.",
//         step2: "Shrug your shoulders towards your ears, squeezing your traps at the top.",
//         step3: "Lower your shoulders back down to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The bent-over lateral raise is an exercise for the rear deltoids. Bend at the hips, hold a dumbbell in each hand with your palms facing your body, and lift the weights out to the sides.",
//         E_name: "Bent-Over Lateral Raise",
//         E_url: "https://example.com/bent-over-lateral-raise-image.jpg",
//         E_desc: "Bend at the hips to create a slight forward lean, holding a dumbbell in each hand with your palms facing your body. Lift the dumbbells out to the sides to target the rear deltoids.",
//         step1: "Bend at the hips to create a slight forward lean, holding a dumbbell in each hand with your palms facing your body.",
//         step2: "Lift the dumbbells out to the sides to target the rear deltoids.",
//         step3: "Lower the dumbbells back down to your sides.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
// ]);

// const forearmData = ([
//     {
//         E_mainDesc: "Now that we're aware of the benefits of forearm workouts, let’s look at six effective forearm exercises to begin your workout journey. These exercises have been selected so that even beginners can efficiently perform them. Notably, we are starting with basics, and you can perform these workouts even at your home. It is advisable to perform them for 30-45 seconds with a break of 20 seconds in between.",
//         E_name: "Wrist Curls",
//         E_url: "https://example.com/wrist-curls-image.jpg",
//         E_desc: "Wrist curls are an excellent exercise for targeting the forearm flexors. Sit on a bench, hold a dumbbell in each hand with your palms facing up, and curl your wrists upward.",
//         step1: "Sit on a bench with your feet flat on the floor.",
//         step2: "Hold a dumbbell in each hand with your palms facing up.",
//         step3: "Curl your wrists upward, lifting the dumbbells as high as you can.",
//         step4: "Lower the dumbbells back down to the starting position.",
//         step5: "Repeat for 10-12 repetitions.",
//         step6: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "Reverse wrist curls target the forearm extensors. Sit on a bench, hold a dumbbell in each hand with your palms facing down, and curl your wrists downward.",
//         E_name: "Reverse Wrist Curls",
//         E_url: "https://example.com/reverse-wrist-curls-image.jpg",
//         E_desc: "Sit on a bench with your feet flat on the floor. Hold a dumbbell in each hand with your palms facing down and curl your wrists downward.",
//         step1: "Sit on a bench with your feet flat on the floor.",
//         step2: "Hold a dumbbell in each hand with your palms facing down.",
//         step3: "Curl your wrists downward, lowering the dumbbells as far as you can.",
//         step4: "Return to the starting position by raising your wrists.",
//         step5: "Repeat for 10-12 repetitions.",
//         step6: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The plate pinch is a grip strength exercise that can also improve forearm strength. Hold two weight plates together, pinching them between your fingers and thumb, and lift them off a flat surface.",
//         E_name: "Plate Pinch",
//         E_url: "https://example.com/plate-pinch-image.jpg",
//         E_desc: "Hold two weight plates together, pinching them between your fingers and thumb. Lift them off a flat surface and hold for a few seconds before lowering them.",
//         step1: "Select two weight plates of your desired weight.",
//         step2: "Hold the weight plates together, pinching them between your fingers and thumb.",
//         step3: "Lift the weight plates off a flat surface and hold for a few seconds.",
//         step4: "Lower the weight plates back down to the starting position.",
//         step5: "Repeat for 10-12 repetitions.",
//         step6: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "Wrist roller exercises are effective for both wrist flexors and extensors. Attach a wrist roller to a barbell, hold the roller with both hands, and roll it up and down to wind and unwind the weight.",
//         E_name: "Wrist Roller",
//         E_url: "https://example.com/wrist-roller-image.jpg",
//         E_desc: "Attach a wrist roller to a barbell. Hold the roller with both hands, and roll it up and down to wind and unwind the weight on the roller.",
//         step1: "Attach a wrist roller to a barbell and add weight plates to the barbell.",
//         step2: "Hold the roller with both hands with your arms extended in front of you.",
//         step3: "Roll the weight up and down by winding and unwinding the weight on the roller.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The farmer's walk is a functional exercise that strengthens your grip and forearms. Hold a heavy dumbbell in each hand, and walk while maintaining a strong grip on the dumbbells.",
//         E_name: "Farmer's Walk",
//         E_url: "https://example.com/farmers-walk-image.jpg",
//         E_desc: "Hold a heavy dumbbell in each hand and walk while maintaining a strong grip on the dumbbells. This exercise can also help with overall body stability.",
//         step1: "Hold a heavy dumbbell in each hand with your arms fully extended at your sides.",
//         step2: "Walk while maintaining a strong grip on the dumbbells.",
//         step3: "Walk for a certain distance or time period.",
//         step4: "Repeat for 10-12 repetitions or a designated distance.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The hand gripper exercise is a simple but effective way to work on grip strength and forearm muscles. Squeeze a hand gripper repeatedly to strengthen your fingers, palms, and wrists.",
//         E_name: "Hand Gripper Exercise",
//         E_url: "https://example.com/hand-gripper-image.jpg",
//         E_desc: "Squeeze a hand gripper repeatedly to strengthen your fingers, palms, and wrists. You can do this exercise while watching TV or during breaks.",
//         step1: "Hold a hand gripper in one hand with your fingers and palm on the handles.",
//         step2: "Squeeze the hand gripper as tightly as possible, then release it slowly.",
//         step3: "Repeat the squeezing and releasing motion for a designated number of repetitions.",
//         step4: "Switch to the other hand and repeat the exercise.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
// ]);

// const calfData = ([
//     {
//         E_mainDesc: "Now that we're aware of the benefits of calf workouts, let’s look at six effective calf exercises to begin your workout journey. These exercises have been selected so that even beginners can efficiently perform them. Notably, we are starting with basics, and you can perform these workouts even at your home. It is advisable to perform them for 30-45 seconds with a break of 20 seconds in between.",
//         E_name: "Standing Calf Raises",
//         E_url: "https://example.com/standing-calf-raises-image.jpg",
//         E_desc: "Standing calf raises are a great exercise for targeting the calf muscles. Stand on a raised surface (such as a block or step) with your heels hanging off, and raise your heels as high as you can.",
//         step1: "Stand on a raised surface with your heels hanging off and your toes on the surface.",
//         step2: "Raise your heels as high as you can by pushing through the balls of your feet.",
//         step3: "Lower your heels back down to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "Seated calf raises specifically target the soleus muscle in the calves. Sit on a bench with your knees bent at 90 degrees and your feet resting on a calf raise machine platform.",
//         E_name: "Seated Calf Raises",
//         E_url: "https://example.com/seated-calf-raises-image.jpg",
//         E_desc: "Sit on a bench with your knees bent at 90 degrees and your feet resting on a calf raise machine platform. Raise your heels as high as you can.",
//         step1: "Sit on a bench with your knees bent at 90 degrees and your feet resting on a calf raise machine platform.",
//         step2: "Raise your heels as high as you can by pushing through the balls of your feet.",
//         step3: "Lower your heels back down to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The donkey calf raise is a unique exercise that requires a partner or a specialized machine. It targets the gastrocnemius muscles of the calves. Your partner sits on your lower back, and you perform calf raises.",
//         E_name: "Donkey Calf Raises",
//         E_url: "https://example.com/donkey-calf-raises-image.jpg",
//         E_desc: "For this exercise, you need a partner or a specialized machine. Your partner sits on your lower back, and you perform calf raises to target the gastrocnemius muscles.",
//         step1: "Stand with your partner or use a specialized machine for support.",
//         step2: "Your partner sits on your lower back, and you lower your heels as far as you can.",
//         step3: "Raise your heels as high as possible, contracting your calf muscles.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The calf press on a leg press machine allows you to use heavy weights to target the calves effectively. Sit on a leg press machine and push the weight with your toes.",
//         E_name: "Calf Press (Leg Press Machine)",
//         E_url: "https://example.com/calf-press-image.jpg",
//         E_desc: "Sit on a leg press machine, place your toes on the lower part of the platform, and push the weight upward by extending your ankles.",
//         step1: "Sit on a leg press machine with your back against the pad and your toes on the lower part of the platform.",
//         step2: "Push the weight upward by extending your ankles, lifting your heels as high as you can.",
//         step3: "Lower the weight back down by bending your ankles.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The single-leg calf raise is an effective exercise for balance and calf development. Stand on one foot and raise your heel as high as possible, then lower it back down.",
//         E_name: "Single-Leg Calf Raises",
//         E_url: "https://example.com/single-leg-calf-raises-image.jpg",
//         E_desc: "Stand on one foot and raise your heel as high as possible, then lower it back down. This exercise improves balance and targets the calf muscles.",
//         step1: "Stand on one foot with the other foot raised slightly behind you.",
//         step2: "Raise your heel as high as possible by pushing through the ball of your foot.",
//         step3: "Lower your heel back down to the starting position.",
//         step4: "Repeat for 10-12 repetitions on each leg.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The box jumps exercise not only works your calf muscles but also improves explosive power. Stand in front of a sturdy box or platform, and jump onto it using both feet, then step back down.",
//         E_name: "Box Jumps",
//         E_url: "https://example.com/box-jumps-image.jpg",
//         E_desc: "Stand in front of a sturdy box or platform, and jump onto it using both feet. After landing, step back down and repeat for a designated number of repetitions.",
//         step1: "Stand in front of a sturdy box or platform with your feet hip-width apart.",
//         step2: "Jump onto the box using both feet, landing softly on top.",
//         step3: "Step back down and repeat for 10-12 repetitions.",
//         step4: "Rest for 1-2 minutes and then repeat."
//     },
// ]);

// const trapData = ([
//     {
//         E_mainDesc: "Now that we're aware of the benefits of trap workouts, let’s look at six effective trap exercises to begin your workout journey. These exercises have been selected so that even beginners can efficiently perform them. Notably, we are starting with basics, and you can perform these workouts at your home or gym. It is advisable to perform them for 30-45 seconds with a break of 20 seconds in between.",
//         E_name: "Barbell Shrugs",
//         E_url: "https://example.com/barbell-shrugs-image.jpg",
//         E_desc: "Barbell shrugs are a classic exercise for targeting the upper trapezius muscles. Hold a barbell with an overhand grip and shrug your shoulders towards your ears.",
//         step1: "Stand with your feet shoulder-width apart and hold a barbell with an overhand grip in front of your thighs.",
//         step2: "Shrug your shoulders towards your ears, lifting the barbell as high as possible.",
//         step3: "Lower the barbell back down to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "Dumbbell shrugs are similar to barbell shrugs but provide more freedom of movement. Hold a dumbbell in each hand and shrug your shoulders to work the upper traps.",
//         E_name: "Dumbbell Shrugs",
//         E_url: "https://example.com/dumbbell-shrugs-image.jpg",
//         E_desc: "Hold a dumbbell in each hand with your arms fully extended at your sides. Shrug your shoulders towards your ears to work the upper traps.",
//         step1: "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with your arms fully extended at your sides.",
//         step2: "Shrug your shoulders towards your ears, lifting the dumbbells as high as possible.",
//         step3: "Lower the dumbbells back down to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The face pull is an effective exercise for the rear deltoids and upper traps. Attach a rope handle to a cable machine and pull the rope towards your face, squeezing your shoulder blades together.",
//         E_name: "Face Pull",
//         E_url: "https://example.com/face-pull-image.jpg",
//         E_desc: "Attach a rope handle to a cable machine at chest height. Pull the rope towards your face while squeezing your shoulder blades together to work the upper traps and rear deltoids.",
//         step1: "Attach a rope handle to a cable machine at chest height.",
//         step2: "Pull the rope towards your face by squeezing your shoulder blades together.",
//         step3: "Slowly release the rope and return to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The farmer's walk is an excellent exercise for overall body stability and grip strength, including the upper traps. Hold a heavy dumbbell in each hand and walk while maintaining a strong grip on the dumbbells.",
//         E_name: "Farmer's Walk",
//         E_url: "https://example.com/farmers-walk-image.jpg",
//         E_desc: "Hold a heavy dumbbell in each hand with your arms fully extended at your sides. Walk while maintaining a strong grip on the dumbbells to engage the upper traps.",
//         step1: "Hold a heavy dumbbell in each hand with your arms fully extended at your sides.",
//         step2: "Walk while maintaining a strong grip on the dumbbells.",
//         step3: "Walk for a certain distance or time period.",
//         step4: "Repeat for 10-12 repetitions or a designated distance.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The upright row is an exercise that targets both the traps and front deltoids. Hold a barbell or dumbbells with an overhand grip and lift them up to your chin by raising your elbows.",
//         E_name: "Upright Row",
//         E_url: "https://example.com/upright-row-image.jpg",
//         E_desc: "Hold a barbell or dumbbells with an overhand grip, arms fully extended. Lift the weights up to your chin by raising your elbows to work the upper traps and front deltoids.",
//         step1: "Hold a barbell or dumbbells with an overhand grip, arms fully extended.",
//         step2: "Lift the weights up to your chin by raising your elbows.",
//         step3: "Lower the weights back down to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The prone trap raise is an isolation exercise for the lower traps. Lie face down on an incline bench with a dumbbell in each hand, and lift the dumbbells to shoulder level.",
//         E_name: "Prone Trap Raise",
//         E_url: "https://example.com/prone-trap-raise-image.jpg",
//         E_desc: "Lie face down on an incline bench with a dumbbell in each hand. Lift the dumbbells to shoulder level to target the lower traps.",
//         step1: "Lie face down on an incline bench with a dumbbell in each hand.",
//         step2: "Lift the dumbbells to shoulder level by squeezing your shoulder blades together.",
//         step3: "Lower the dumbbells back down to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
// ]);

// const hamstringData = ([
//     {
//         E_mainDesc: "Now that we're aware of the benefits of hamstring workouts, let’s look at six effective hamstring exercises to begin your workout journey. These exercises have been selected so that even beginners can efficiently perform them. You can perform these workouts at your home or gym. It is advisable to perform them for 30-45 seconds with a break of 20 seconds in between.",
//         E_name: "Romanian Deadlift",
//         E_url: "https://example.com/romanian-deadlift-image.jpg",
//         E_desc: "The Romanian deadlift is a compound exercise that targets the hamstrings and lower back. Hold a barbell or dumbbells in front of your thighs and hinge at the hips while keeping your back straight.",
//         step1: "Stand with your feet hip-width apart, holding a barbell or dumbbells in front of your thighs.",
//         step2: "Hinge at the hips, keeping your back straight, and lower the weights toward the ground.",
//         step3: "Lower the weights as far as your flexibility allows, feeling a stretch in your hamstrings.",
//         step4: "Engage your hamstrings and glutes to return to the upright position.",
//         step5: "Repeat for 10-12 repetitions.",
//         step6: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "Lying leg curls are a great isolation exercise for the hamstrings. Lie face down on a leg curl machine, curl your legs up by bending your knees, then lower them back down.",
//         E_name: "Lying Leg Curls",
//         E_url: "https://example.com/lying-leg-curls-image.jpg",
//         E_desc: "Lie face down on a leg curl machine, position your legs under the padded lever, and curl your legs up by bending your knees. Slowly lower them back down to work the hamstrings.",
//         step1: "Lie face down on a leg curl machine with your legs positioned under the padded lever.",
//         step2: "Curl your legs up by bending your knees as far as possible.",
//         step3: "Lower your legs back down to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The seated leg curl machine isolates the hamstrings. Sit on the machine, position your legs under the padded lever, and curl your legs up by bending your knees.",
//         E_name: "Seated Leg Curls",
//         E_url: "https://example.com/seated-leg-curls-image.jpg",
//         E_desc: "Sit on a seated leg curl machine with your legs positioned under the padded lever. Curl your legs up by bending your knees to target the hamstrings.",
//         step1: "Sit on a seated leg curl machine with your legs positioned under the padded lever.",
//         step2: "Curl your legs up by bending your knees as far as possible.",
//         step3: "Lower your legs back down to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The standing leg curl machine targets the hamstrings while standing. Position your legs under the padded lever, curl your legs up by bending your knees, and then lower them back down.",
//         E_name: "Standing Leg Curls",
//         E_url: "https://example.com/standing-leg-curls-image.jpg",
//         E_desc: "Stand at a standing leg curl machine with your legs positioned under the padded lever. Curl your legs up by bending your knees, then lower them back down to work the hamstrings.",
//         step1: "Stand at a standing leg curl machine with your legs positioned under the padded lever.",
//         step2: "Curl your legs up by bending your knees as far as possible.",
//         step3: "Lower your legs back down to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "Stiff-legged deadlifts are similar to Romanian deadlifts but involve a greater range of motion. Hold a barbell or dumbbells in front of your thighs and hinge at the hips while keeping your back straight.",
//         E_name: "Stiff-Legged Deadlifts",
//         E_url: "https://example.com/stiff-legged-deadlifts-image.jpg",
//         E_desc: "Hold a barbell or dumbbells in front of your thighs and hinge at the hips while keeping your back straight. Lower the weights as far as your flexibility allows to target the hamstrings.",
//         step1: "Stand with your feet hip-width apart, holding a barbell or dumbbells in front of your thighs.",
//         step2: "Hinge at the hips, keeping your back straight, and lower the weights toward the ground.",
//         step3: "Lower the weights as far as your flexibility allows, feeling a stretch in your hamstrings.",
//         step4: "Engage your hamstrings and glutes to return to the upright position.",
//         step5: "Repeat for 10-12 repetitions.",
//         step6: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The lying hamstring curl machine allows you to isolate the hamstrings while lying face down. Position your legs under the padded lever, curl your legs up by bending your knees, and lower them back down.",
//         E_name: "Lying Hamstring Curls",
//         E_url: "https://example.com/lying-hamstring-curls-image.jpg",
//         E_desc: "Lie face down on a lying hamstring curl machine with your legs positioned under the padded lever. Curl your legs up by bending your knees, then slowly lower them back down to work the hamstrings.",
//         step1: "Lie face down on a lying hamstring curl machine with your legs positioned under the padded lever.",
//         step2: "Curl your legs up by bending your knees as far as possible.",
//         step3: "Lower your legs back down to the starting position.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
// ]);

// const quadData = ([
//     {
//         E_mainDesc: "Now that we're aware of the benefits of quad workouts, let’s look at six effective quadriceps exercises to begin your workout journey. These exercises have been selected so that even beginners can efficiently perform them. You can perform these workouts at your home or gym. It is advisable to perform them for 30-45 seconds with a break of 20 seconds in between.",
//         E_name: "Barbell Squats",
//         E_url: "https://example.com/barbell-squats-image.jpg",
//         E_desc: "Barbell squats are a compound exercise that targets the quadriceps, hamstrings, and glutes. Hold a barbell on your upper back, squat down, and then return to the starting position.",
//         step1: "Stand with your feet shoulder-width apart and place a barbell on your upper back.",
//         step2: "Bend your knees and hips to lower your body into a squat position, keeping your back straight.",
//         step3: "Lower yourself as far as your flexibility allows, ideally until your thighs are parallel to the ground.",
//         step4: "Push through your heels to return to the starting position.",
//         step5: "Repeat for 10-12 repetitions.",
//         step6: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "Leg press is a great exercise for targeting the quadriceps. Sit on a leg press machine, place your feet shoulder-width apart on the platform, and push the weight up by extending your knees.",
//         E_name: "Leg Press",
//         E_url: "https://example.com/leg-press-image.jpg",
//         E_desc: "Sit on a leg press machine, position your feet shoulder-width apart on the platform, and push the weight up by extending your knees to work the quadriceps.",
//         step1: "Sit on a leg press machine with your back against the pad and place your feet shoulder-width apart on the platform.",
//         step2: "Push the weight upward by extending your knees, lifting the platform and squeezing your quads.",
//         step3: "Lower the weight back down by bending your knees.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The walking lunge is a dynamic exercise that targets the quads and provides an excellent lower body workout. Take a step forward and lunge, alternating between legs.",
//         E_name: "Walking Lunges",
//         E_url: "https://example.com/walking-lunges-image.jpg",
//         E_desc: "Take a step forward and lunge by bending both knees to a 90-degree angle. Alternate between legs to work the quadriceps and improve lower body strength.",
//         step1: "Stand with your feet together and your hands on your hips.",
//         step2: "Take a step forward with one leg and lunge by bending both knees to a 90-degree angle.",
//         step3: "Push off the front foot and bring your back foot forward to take another step and lunge with the opposite leg.",
//         step4: "Continue alternating between legs for a designated distance or number of lunges.",
//         step5: "Repeat for 10-12 repetitions per leg.",
//         step6: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The Bulgarian split squat is a single-leg exercise that targets the quads and improves balance. Place one foot behind you on a bench or elevated surface and lunge with the other leg.",
//         E_name: "Bulgarian Split Squats",
//         E_url: "https://example.com/bulgarian-split-squats-image.jpg",
//         E_desc: "Place one foot behind you on a bench or elevated surface and lunge with the other leg to target the quadriceps and improve balance.",
//         step1: "Stand with your back to a bench or elevated surface and place one foot behind you on it.",
//         step2: "Lunge forward with the other leg by bending both knees to 90-degree angles.",
//         step3: "Push through the front heel to return to the starting position.",
//         step4: "Repeat for 10-12 repetitions per leg.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The leg extension machine isolates the quadriceps. Sit on the machine, adjust the pads over your ankles, and extend your knees to lift the weight.",
//         E_name: "Leg Extensions",
//         E_url: "https://example.com/leg-extensions-image.jpg",
//         E_desc: "Sit on a leg extension machine, adjust the pads over your ankles, and extend your knees to lift the weight to isolate the quadriceps.",
//         step1: "Sit on a leg extension machine with your back against the pad and the pads adjusted over your ankles.",
//         step2: "Extend your knees to lift the weight, fully contracting your quadriceps at the top of the movement.",
//         step3: "Lower the weight back down by bending your knees.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The step-up exercise targets the quadriceps and improves lower body strength and balance. Step up onto a bench or platform with one leg and then step back down.",
//         E_name: "Step-Ups",
//         E_url: "https://example.com/step-ups-image.jpg",
//         E_desc: "Step up onto a bench or platform with one leg and then step back down to work the quadriceps and improve lower body strength and balance.",
//         step1: "Stand in front of a bench or platform with your feet hip-width apart.",
//         step2: "Step up onto the bench with one leg, fully extending your knee.",
//         step3: "Step back down with the same leg and return to the starting position.",
//         step4: "Repeat for 10-12 repetitions per leg.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
// ]);

// const gluteData = ([
//     {
//         E_mainDesc: "Building strong glutes can improve your lower body strength and overall athletic performance. Here are six effective glute exercises to add to your workout routine. These exercises are suitable for both beginners and advanced fitness enthusiasts. Perform each exercise for 30-45 seconds with a 20-second break in between.",
//         E_name: "Barbell Hip Thrusts",
//         E_url: "https://example.com/barbell-hip-thrusts-image.jpg",
//         E_desc: "Barbell hip thrusts are a fantastic exercise for targeting the glutes. Sit on the floor with your upper back against a bench, place a barbell over your hips, and thrust your hips upward.",
//         step1: "Sit on the floor with your upper back against a bench and a barbell over your hips.",
//         step2: "Bend your knees and place your feet flat on the ground, hip-width apart.",
//         step3: "Thrust your hips upward, squeezing your glutes at the top of the movement.",
//         step4: "Lower your hips back down and repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "Lunges are a versatile exercise that engages the glutes along with other leg muscles. Step forward and lunge to effectively target your glutes and improve lower body strength.",
//         E_name: "Walking Lunges",
//         E_url: "https://example.com/walking-lunges-image.jpg",
//         E_desc: "Take a step forward and lunge by bending both knees to a 90-degree angle. Alternate between legs to work the glutes and enhance lower body strength.",
//         step1: "Stand with your feet together and your hands on your hips.",
//         step2: "Take a step forward with one leg and lunge by bending both knees to a 90-degree angle.",
//         step3: "Push off the front foot and bring your back foot forward to take another step and lunge with the opposite leg.",
//         step4: "Continue alternating between legs for a designated distance or number of lunges.",
//         step5: "Repeat for 10-12 repetitions per leg.",
//         step6: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "Deadlifts are a compound exercise that engages multiple muscle groups, including the glutes. Bend at your hips and knees to lift a barbell from the ground while maintaining a straight back.",
//         E_name: "Barbell Deadlifts",
//         E_url: "https://example.com/barbell-deadlifts-image.jpg",
//         E_desc: "Bend at your hips and knees to lift a barbell from the ground while keeping your back straight. This exercise effectively targets the glutes among other muscles.",
//         step1: "Stand with your feet hip-width apart and a barbell in front of you.",
//         step2: "Bend at your hips and knees to lower yourself and grab the barbell with an overhand grip.",
//         step3: "Lift the barbell by straightening your hips and knees while keeping your back straight.",
//         step4: "Lower the barbell back down to the ground with control and repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "Glute bridges are a simple yet effective exercise to isolate and strengthen the glutes. Lie on your back with your knees bent and feet flat on the ground, then lift your hips off the ground.",
//         E_name: "Glute Bridges",
//         E_url: "https://example.com/glute-bridges-image.jpg",
//         E_desc: "Lie on your back with your knees bent and feet flat on the ground. Lift your hips off the ground by squeezing your glutes and pushing through your heels.",
//         step1: "Lie on your back with your knees bent and feet flat on the ground, hip-width apart.",
//         step2: "Engage your glutes and lift your hips off the ground, keeping your feet and shoulders on the floor.",
//         step3: "Hold the bridge position for a moment, then lower your hips back down.",
//         step4: "Repeat for 10-12 repetitions.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The donkey kick is a bodyweight exercise that targets the glutes and can be done without any equipment. Get on all fours and kick one leg backward, squeezing your glutes at the top of the movement.",
//         E_name: "Donkey Kicks",
//         E_url: "https://example.com/donkey-kicks-image.jpg",
//         E_desc: "Get on all fours with your hands and knees on the ground. Kick one leg backward, keeping it bent, and squeeze your glutes at the top of the movement.",
//         step1: "Start on your hands and knees with your wrists under your shoulders and knees under your hips.",
//         step2: "Lift one knee off the ground and kick that leg backward, keeping it bent at a 90-degree angle.",
//         step3: "Squeeze your glutes at the top of the movement, then lower your leg back down.",
//         step4: "Repeat for 10-12 repetitions per leg.",
//         step5: "Rest for 1-2 minutes and then repeat."
//     },
//     {
//         E_mainDesc: "The sumo squat is a variation of the squat that targets the inner thighs and glutes. Stand with your feet wider than shoulder-width apart and perform squats while keeping your knees in line with your toes.",
//         E_name: "Sumo Squats",
//         E_url: "https://example.com/sumo-squats-image.jpg",
//         E_desc: "Stand with your feet wider than shoulder-width apart and perform squats while keeping your knees in line with your toes. This exercise targets the inner thighs and glutes.",
//         step1: "Stand with your feet wider than shoulder-width apart and your toes pointing slightly outward.",
//         step2: "Bend your knees and hips to lower your body into a squat position, keeping your back straight.",
//         step3: "Lower yourself as far as your flexibility allows, ideally until your thighs are parallel to the ground.",
//         step4: "Push through your heels to return to the starting position.",
//         step5: "Repeat for 10-12 repetitions.",
//         step6: "Rest for 1-2 minutes and then repeat."
//     }
// ]);

// const lowerBackExercises = ([
//   {
//     E_mainDesc:
//       "Lower back exercises are essential for strengthening the muscles in your lower back and maintaining a healthy spine. Here are six effective exercises to help you build a strong lower back.",
//     E_name: "Deadlifts",
//     E_url: "https://example.com/deadlift_image.jpg",
//     E_desc:
//       "Deadlifts are a compound exercise that targets the lower back, as well as the hamstrings and glutes. To perform a deadlift, stand with your feet hip-width apart, bend at the hips and knees to lower the barbell to the ground, then stand back up while keeping your back straight and chest up.",
//     step1: "Stand with your feet hip-width apart, toes under the barbell.",
//     step2:
//       "Bend at your hips and knees to grip the barbell with a shoulder-width overhand grip.",
//     step3: "Keep your back straight, chest up, and engage your core.",
//     step4:
//       "Lift the barbell by extending your hips and knees, bringing your torso to an upright position.",
//     step5: "Lower the barbell back to the ground with controlled movement.",
//     step6:
//       "Repeat for 8-10 repetitions, rest for 1-2 minutes, and then repeat for additional sets.",
//   },
//   {
//     E_mainDesc:
//       "A strong lower back is crucial for overall strength and stability. Here are more lower back exercises to add to your routine.",
//     E_name: "Superman Exercise",
//     E_url: "https://example.com/superman_image.jpg",
//     E_desc:
//       "The Superman exercise targets the lower back muscles. To do this exercise, lie face down on the floor with your arms extended in front of you. Lift your arms and legs off the ground simultaneously, arching your back as you do so. Hold for a few seconds, then lower back down.",
//     step1:
//       "Lie face down on the floor with your arms extended in front of you and legs straight.",
//     step2:
//       "Simultaneously lift your arms, chest, and legs off the ground, arching your back.",
//     step3:
//       "Hold the lifted position for a few seconds, feeling the contraction in your lower back.",
//     step4: "Lower your arms and legs back to the ground with control.",
//     step5:
//       "Repeat for 12-15 repetitions, rest briefly, and perform multiple sets.",
//   },
//   {
//     E_mainDesc:
//       "Here are more lower back exercises to help you strengthen your lumbar muscles.",
//     E_name: "Bird Dog Exercise",
//     E_url: "https://example.com/bird_dog_image.jpg",
//     E_desc:
//       "The Bird Dog exercise improves lower back stability. Begin on your hands and knees. Extend one arm and the opposite leg simultaneously while keeping your back straight. Hold for a moment, then return to the starting position and switch sides.",
//     step1:
//       "Start on your hands and knees in a tabletop position, with your wrists under your shoulders and knees under your hips.",
//     step2:
//       "Simultaneously extend your right arm forward and your left leg backward, keeping them parallel to the ground.",
//     step3:
//       "Hold for a few seconds, maintaining balance and engaging your core.",
//     step4:
//       "Return to the starting position, then switch to extend your left arm and right leg.",
//     step5:
//       "Repeat for 10-12 repetitions on each side, rest, and perform additional sets.",
//   },
//   {
//     E_mainDesc:
//       "Building a strong lower back is crucial for maintaining good posture and preventing lower back pain. Here are three more exercises to help you achieve a powerful lower back.",
//     E_name: "Hyperextensions (Back Extensions)",
//     E_url: "https://example.com/hyperextensions_image.jpg",
//     E_desc:
//       "Hyperextensions target the lower back muscles. To perform this exercise, lie face down on a hyperextension bench or stability ball with your hips and feet secured. Cross your arms over your chest or place them behind your head. Lift your upper body as high as comfortably possible, then lower it back down.",
//     step1:
//       "Lie face down on a hyperextension bench or stability ball, with your hips and feet secured.",
//     step2:
//       "Cross your arms over your chest or place them behind your head for support.",
//     step3:
//       "Lift your upper body as high as comfortably possible while keeping your back straight.",
//     step4: "Lower your upper body back down with controlled movement.",
//     step5:
//       "Perform 12-15 repetitions, rest briefly, and repeat for multiple sets.",
//   },
//   {
//     E_mainDesc:
//       "Variety in your lower back workout routine can lead to better results. Here are two more exercises to add to your lower back training regimen.",
//     E_name: "Seated Cable Rows",
//     E_url: "https://example.com/seated_cable_rows_image.jpg",
//     E_desc:
//       "Seated cable rows primarily target the upper back but also engage the lower back. Sit at a cable row machine with your feet on the platform and knees slightly bent. Grab the handles with both hands, sit back, and then pull the handles toward your lower ribcage while squeezing your shoulder blades together. Slowly release the handles back to the starting position.",
//     step1:
//       "Sit at a cable row machine with your feet on the platform and knees slightly bent.",
//     step2:
//       "Grab the handles with both hands, keeping your palms facing each other.",
//     step3:
//       "Sit back slightly, maintain a straight back, and pull the handles toward your lower ribcage.",
//     step4:
//       "Squeeze your shoulder blades together as you pull the handles, then slowly release them back to the starting position.",
//     step5: "Perform 10-12 repetitions, rest, and repeat for additional sets.",
//   },
//   {
//     E_mainDesc:
//       "Maintaining lower back strength and flexibility is essential for overall fitness. Here's one more exercise to round out your lower back workout routine.",
//     E_name: "Prone Leg Raises",
//     E_url: "https://example.com/prone_leg_raises_image.jpg",
//     E_desc:
//       "Prone leg raises isolate the lower back and glutes. Lie face down on the floor with your arms extended forward. Lift your legs off the ground as high as you can, squeezing your glutes and lower back muscles. Lower your legs back down with control.",
//     step1:
//       "Lie face down on the floor with your arms extended forward and your legs straight.",
//     step2:
//       "Lift your legs off the ground as high as you can, engaging your glutes and lower back muscles.",
//     step3: "Hold the raised position for a moment, feeling the contraction.",
//     step4: "Lower your legs back down with control.",
//     step5:
//       "Complete 12-15 repetitions, rest briefly, and perform multiple sets.",
//   },
// ]);
// const backExercises = ([
//   {
//       E_mainDesc: "Strengthening your back is essential for maintaining good posture and overall upper body strength. Here are three effective back exercises to help you achieve a strong and toned back.",
//       E_name: "Pull-Ups",
//       E_url: "https://example.com/pull_ups_image.jpg",
//       E_desc: "Pull-ups are a classic back exercise that targets the lats and upper back muscles. To perform a pull-up, hang from a pull-up bar with your hands slightly wider than shoulder-width apart. Pull your body up towards the bar until your chin clears it, then lower your body back down with control.",
//       step1: "Hang from a pull-up bar with your hands slightly wider than shoulder-width apart, palms facing away.",
//       step2: "Pull your body up towards the bar, squeezing your shoulder blades together.",
//       step3: "Raise your chin above the bar, then lower your body back down with control.",
//       step4: "Complete 8-10 repetitions, rest briefly, and perform multiple sets."
//   },
//   {
//       E_mainDesc: "A strong and well-defined back is a goal for many fitness enthusiasts. Here are two more back exercises to incorporate into your workout routine.",
//       E_name: "Bent-Over Rows",
//       E_url: "https://example.com/bent_over_rows_image.jpg",
//       E_desc: "Bent-over rows work the upper and mid-back muscles. Stand with your feet hip-width apart and hold a barbell or dumbbells in front of your thighs with your palms facing your body. Bend at the hips and knees slightly, then hinge forward at the waist while keeping your back straight. Pull the weights toward your lower ribcage, squeezing your shoulder blades together, then lower the weights back down.",
//       step1: "Stand with your feet hip-width apart and hold a barbell or dumbbells in front of your thighs, palms facing your body.",
//       step2: "Bend at the hips and knees slightly, maintaining a straight back.",
//       step3: "Hinge forward at the waist while keeping your back straight.",
//       step4: "Pull the weights toward your lower ribcage, squeezing your shoulder blades together.",
//       step5: "Lower the weights back down with control.",
//       step6: "Perform 10-12 repetitions, rest, and repeat for multiple sets."
//   },
//   {
//       E_mainDesc: "Adding variety to your back workouts can lead to better results. Here's one more exercise to help you build a strong and balanced back.",
//       E_name: "Lat Pulldowns",
//       E_url: "https://example.com/lat_pulldowns_image.jpg",
//       E_desc: "Lat pulldowns target the latissimus dorsi (lats) and provide a great alternative to pull-ups. Sit at a lat pulldown machine with your knees secured under the pads. Grasp the bar with a wide grip, palms facing away. Pull the bar down to your upper chest, then slowly release it back up.",
//       step1: "Sit at a lat pulldown machine with your knees secured under the pads.",
//       step2: "Grasp the bar with a wide grip, palms facing away from you.",
//       step3: "Pull the bar down to your upper chest, squeezing your lats and keeping your elbows pointed down.",
//       step4: "Slowly release the bar back up to the starting position.",
//       step5: "Complete 10-12 repetitions, rest briefly, and perform multiple sets."
//   },
//   {
//     E_mainDesc: "A strong and well-developed back is essential for overall strength and posture. Here are three additional back exercises to help you achieve a balanced and powerful back.",
//     E_name: "T-Bar Rows",
//     E_url: "https://example.com/t_bar_rows_image.jpg",
//     E_desc: "T-Bar rows are excellent for targeting the middle back muscles. Place a T-Bar row machine over a landmine attachment or secure it in a corner. Straddle the bar, bend at your hips and knees, and grip the handles with both hands. Pull the bar towards your chest while keeping your back straight, then lower it back down.",
//     step1: "Straddle the T-Bar row machine, with your hips and knees bent and back straight.",
//     step2: "Grip the handles with both hands, palms facing inwards.",
//     step3: "Pull the bar towards your chest, squeezing your middle back muscles.",
//     step4: "Lower the bar back down to the starting position with control.",
//     step5: "Perform 8-10 repetitions, rest briefly, and repeat for multiple sets."
// },
// {
//     E_mainDesc: "Variation in your back workout routine can lead to better results. Here are two more effective back exercises to add to your training regimen.",
//     E_name: "Face Pulls",
//     E_url: "https://example.com/face_pulls_image.jpg",
//     E_desc: "Face pulls target the rear deltoids and upper back muscles. Attach a rope handle to a cable machine at chest height. Stand facing the machine, grab the rope with both hands, and step back. Pull the rope towards your face while squeezing your shoulder blades together, then return to the starting position.",
//     step1: "Attach a rope handle to a cable machine at chest height.",
//     step2: "Stand facing the machine, grab the rope with both hands, and step back to create tension.",
//     step3: "Pull the rope towards your face, squeezing your shoulder blades together.",
//     step4: "Return the rope to the starting position with control.",
//     step5: "Complete 12-15 repetitions, rest briefly, and perform multiple sets."
// },
// {
//     E_mainDesc: "Maintaining a well-rounded back workout is key to achieving your fitness goals. Here's one more exercise to help you build strength and definition in your back muscles.",
//     E_name: "Single-Arm Dumbbell Rows",
//     E_url: "https://example.com/single_arm_dumbbell_rows_image.jpg",
//     E_desc: "Single-arm dumbbell rows target the lats and provide excellent unilateral work. Place one knee and hand on a bench, holding a dumbbell in the opposite hand. Pull the dumbbell towards your hip while keeping your back straight, then lower it back down.",
//     step1: "Place one knee and hand on a bench, with the opposite foot on the ground, holding a dumbbell in one hand.",
//     step2: "Pull the dumbbell towards your hip, squeezing your lat muscle.",
//     step3: "Lower the dumbbell back down to the starting position with control.",
//     step4: "Perform 10-12 repetitions on each arm, rest briefly, and repeat for multiple sets."
// }
// ]);



// const latExercises = ([
//   {
//       E_mainDesc: "Developing strong and well-defined lat muscles is essential for a balanced upper body. Here are six effective exercises to target and build your lats.",
//       E_name: "Lat Pulldowns",
//       E_url: "https://example.com/lat_pulldowns_image.jpg",
//       E_desc: "Lat pulldowns are an excellent lat-targeting exercise. Sit at a lat pulldown machine with your knees secured under the pads. Grasp the bar with a wide grip, palms facing away. Pull the bar down to your upper chest, then slowly release it back up.",
//       step1: "Sit at a lat pulldown machine with your knees secured under the pads.",
//       step2: "Grasp the bar with a wide grip, palms facing away from you.",
//       step3: "Pull the bar down to your upper chest, squeezing your lat muscles and keeping your elbows pointed down.",
//       step4: "Slowly release the bar back up to the starting position.",
//       step5: "Complete 10-12 repetitions, rest briefly, and repeat for multiple sets."
//   },
//   {
//       E_mainDesc: "Variety in your lat workout can lead to better results. Here are two more exercises to add to your lat training routine.",
//       E_name: "Pull-Ups",
//       E_url: "https://example.com/pull_ups_image.jpg",
//       E_desc: "Pull-ups are a classic lat-building exercise. Hang from a pull-up bar with your hands slightly wider than shoulder-width apart, palms facing away. Pull your body up towards the bar until your chin clears it, then lower your body back down with control.",
//       step1: "Hang from a pull-up bar with your hands slightly wider than shoulder-width apart, palms facing away.",
//       step2: "Pull your body up towards the bar, squeezing your lats and keeping your core engaged.",
//       step3: "Raise your chin above the bar, then lower your body back down with control.",
//       step4: "Complete 8-10 repetitions, rest briefly, and perform multiple sets."
//   },
//   {
//       E_mainDesc: "Balanced lat development requires a combination of exercises. Here are three more lat-focused exercises to incorporate into your routine.",
//       E_name: "Bent-Over Rows",
//       E_url: "https://example.com/bent_over_rows_image.jpg",
//       E_desc: "Bent-over rows work the upper and mid-back muscles. Stand with your feet hip-width apart and hold a barbell or dumbbells in front of your thighs with your palms facing your body. Bend at the hips and knees slightly, then hinge forward at the waist while keeping your back straight. Pull the weights toward your lower ribcage, squeezing your shoulder blades together, then lower the weights back down.",
//       step1: "Stand with your feet hip-width apart and hold a barbell or dumbbells in front of your thighs, palms facing your body.",
//       step2: "Bend at the hips and knees slightly, maintaining a straight back.",
//       step3: "Hinge forward at the waist while keeping your back straight.",
//       step4: "Pull the weights toward your lower ribcage, squeezing your shoulder blades together.",
//       step5: "Lower the weights back down with control.",
//       step6: "Perform 10-12 repetitions, rest, and repeat for multiple sets."
//   },
//   {
//       E_name: "Single-Arm Lat Pulldowns",
//       E_url: "https://example.com/single_arm_lat_pulldowns_image.jpg",
//       E_desc: "Single-arm lat pulldowns provide unilateral work for balanced lat development. Attach a D-handle to the lat pulldown machine and sit facing it. Grasp the handle with one hand and pull it down to your side while keeping your back straight. Slowly release the handle back up.",
//       step1: "Attach a D-handle to the lat pulldown machine and sit facing it.",
//       step2: "Grasp the handle with one hand and pull it down to your side, focusing on squeezing your lat muscle.",
//       step3: "Slowly release the handle back up to the starting position with control.",
//       step4: "Complete 10-12 repetitions on each arm, rest briefly, and repeat for multiple sets."
//   },
//   {
//       E_name: "Lat Pulldown with Resistance Bands",
//       E_url: "https://example.com/lat_pulldown_resistance_bands_image.jpg",
//       E_desc: "Lat pulldowns using resistance bands are a portable alternative to traditional machines. Attach a resistance band to a sturdy anchor point overhead. Kneel or stand while holding the band, then pull it down to your chest while engaging your lat muscles. Slowly release the band back up.",
//       step1: "Attach a resistance band to a sturdy anchor point overhead.",
//       step2: "Kneel or stand while holding the band, keeping your back straight.",
//       step3: "Pull the band down to your chest, focusing on engaging your lats.",
//       step4: "Slowly release the band back up to the starting position with control.",
//       step5: "Complete 12-15 repetitions, rest briefly, and perform multiple sets."
//   },
//   {
//       E_name: "Lat Pulldown Behind the Neck",
//       E_url: "https://example.com/lat_pulldown_behind_the_neck_image.jpg",
//       E_desc: "Lat pulldowns behind the neck emphasize the rear part of your lats. Sit at a lat pulldown machine with your palms facing away and grip the bar wider than shoulder-width. Pull the bar down behind your neck to your upper traps, then slowly release it back up.",
//       step1: "Sit at a lat pulldown machine with your palms facing away and grip the bar wider than shoulder-width.",
//       step2: "Pull the bar down behind your neck to your upper traps, focusing on engaging your rear lats.",
//       step3: "Slowly release the bar back up to the starting position with control.",
//       step4: "Perform 8-10 repetitions, rest briefly, and repeat for multiple sets."
//   }
// ]);

// const obliquesExercises = [
//   {
//     E_mainDesc: "Strengthening your oblique muscles is vital for core stability. Here are five effective exercises to target and build your obliques.",
//     E_name: "Russian Twists",
//     E_url: "https://www.inspireusafoundation.org/wp-content/uploads/2023/09/russian-twist.gif",
//     E_desc: "Russian twists are a great oblique exercise. Sit on the floor with your knees bent, feet off the ground, and lean back slightly. Hold a weight or medicine ball with both hands and twist your torso to the left and right, touching the weight to the floor on each side.",
//     step1: "Sit on the floor with your knees bent and feet off the ground, leaning back slightly.",
//     step2: "Hold a weight or medicine ball with both hands and twist your torso to the left and right, touching the weight to the floor on each side.",
//     step3: "Complete 12-15 twists on each side, rest briefly, and repeat for multiple sets.",
//     step4: "Ensure proper form and controlled movement throughout the exercise."
//   },
//   {
//     E_mainDesc: "Diversify your oblique workout for better results. Here are two additional exercises to add to your oblique training routine.",
//     E_name: "Side Planks",
//     E_url: "https://www.inspireusafoundation.org/wp-content/uploads/2022/08/side-plank-1024x593.png",
//     E_desc: "Side planks target obliques and core strength. Lie on your side with your legs straight. Support your upper body on your forearm, forming a straight line from head to heels. Lift your hips off the ground, engaging your obliques. Hold this position for 20-30 seconds on each side.",
//     step1: "Lie on your side with your legs straight and support your upper body on your forearm, forming a straight line from head to heels.",
//     step2: "Lift your hips off the ground, engaging your obliques.",
//     step3: "Hold the position for 20-30 seconds on each side, rest briefly, and perform multiple sets.",
//     step4: "Maintain proper alignment and avoid letting your hips sag."
//   },
//   {
//     E_name: "Bicycle Crunches",
//     E_url: "https://newlife.com.cy/wp-content/uploads/2019/02/00031301-air-bike-m_waist_FIX_360.gif",
//     E_desc: "Bicycle crunches are effective for obliques and overall core strength. Lie on your back, place your hands behind your head, and lift your legs. Bring your right elbow and left knee together while extending your right leg. Alternate sides in a pedaling motion.",
//     step1: "Lie on your back, place your hands behind your head, and lift your legs.",
//     step2: "Bring your right elbow and left knee together while extending your right leg.",
//     step3: "Alternate sides in a pedaling motion. Perform 12-15 reps on each side, rest briefly, and repeat for multiple sets.",
//     step4: "Focus on keeping your shoulder blades off the ground throughout the exercise."
//   },
//   {
//     E_name: "Woodchoppers",
//     E_url: "https://www.inspireusafoundation.org/wp-content/uploads/2022/07/wood-chop-1024x833.png",
//     E_desc: "Woodchoppers are excellent for oblique strength. Stand with your feet shoulder-width apart, holding a weight or medicine ball with both hands. Start with the weight at one side of your body and lift it diagonally across your body, engaging your obliques. Repeat on both sides.",
//     step1: "Stand with your feet shoulder-width apart, holding a weight or medicine ball with both hands.",
//     step2: "Start with the weight at one side of your body and lift it diagonally across your body, engaging your obliques.",
//     step3: "Repeat the motion on both sides. Perform 10-12 repetitions on each side, rest briefly, and repeat for multiple sets.",
//     step4: "Maintain a strong core and controlled movement during the exercise."
//   },
//   {
//     E_name: "Oblique V-Ups",
//     E_url: "https://newlife.com.cy/wp-content/uploads/2019/12/17691301-Bodyweight-Side-Lying-Biceps-Curl_Upper-Arms_360.gif",
//     E_desc: "Oblique V-ups target the oblique muscles and core. Lie on your side, supporting your upper body with your forearm. Lift your legs and upper body simultaneously, forming a V shape. Lower and repeat on both sides.",
//     step1: "Lie on your side, supporting your upper body with your forearm.",
//     step2: "Lift your legs and upper body simultaneously, forming a V shape.",
//     step3: "Lower and repeat the motion on both sides. Complete 10-12 repetitions on each side, rest briefly, and perform multiple sets.",
//     step4: "Maintain a stable base and avoid excessive swinging during the exercise."
//   }
// ];

// absM.insertMany(absData);
// bicepM.insertMany(bicepsdata);
// chestM.insertMany(chestdata)
// tricepsM.insertMany(tricepsdata);
// shoulderM.insertMany(shoulderData);
// trapsM.insertMany(trapData);
// calfM.insertMany(calfData);
// forearmM.insertMany(forearmData);
// glutesM.insertMany(gluteData);
// hamestringM.insertMany(hamstringData);
// quadM.insertMany(quadData);
// backM.insertMany(backExercises);
// lowerBackM.insertMany(lowerBackExercises);
// latsM.insertMany(latExercises);
// obliquesM.insertMany(obliquesExercises);
app.listen(process.env.PORT);
