/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio={
  "name":"Mary Eckmeier",
  "role":"Front End Web Developer",
  "contacts": {
      "email": "mary@eckmeier.com",
      "phone": "651-690-2434",
      "twitter": "foragerswife",
      "location":"Ridgeland, WI"
  },
  "pictureURL":"images/fry.jpg",
  "skills":["database design","business intelligence implementation", "sql server", "technical training","small business applications", "baker"],
  "welcomeMessage":"Old lady coding"

};
bio.display= function()
{
  var formattedname=HTMLheaderName.replace("%data%",bio.name);
  var formattedrole=HTMLheaderRole.replace("%data%", bio.role);
  var formattedImage =HTMLbioPic.replace("%data%", bio.pictureURL);
  $("#header").prepend(formattedrole);
  $("#header").prepend(formattedname);
  $("#header").prepend(formattedImage);
 if(bio.skills.length > 0)
 {    $("#header").append(HTMLskillsStart);
     for (skill in bio.skills)
         {var formattedSkills =HTMLskills.replace("%data%",bio.skills[skill]);
          $("#skills").append(formattedSkills);
         }
 }
}
var   work= {"jobs":[
  {
    "employer":"US Bank",
    "title":"BI Guru",
    "location":"Minneapolis, MN",
    "dates":"7/2015 - current",
    "description":"Go to person for Wealth Management data mart -- located data; cleansed; cubed; presented and supported data"
  },
  {
    "employer":"Eckmeier Consulting Services",
    "title":"Principal",
    "location":"St. Paul, MN",
    "dates":"1994 - 7/2015",
    "description":"Consulting services around business intelligence (Microsoft Stack), report writer, trainer and all around databases support (usually MS Access for small clients)"
  },
  {
    "employer":"National Business Systems",
    "title":"Network Specialist",
    "location":"Bloomington, MN",
    "dates":"1993-1994",
    "description":"Technical support, including Netware network, general hardware and software support"
  },
  {
    "employer":"Briggs and Morgan",
    "title":"Corporate Trainer",
    "location":"St. Paul, MN",
    "dates":"1987-1991",
    "description":"Provided technical training for conversion to a novell network and personal computers from standalone memory typewrites to all employees from lawyers to legal secretaries."
  },
  {
    "employer":"Grand Teton Lodge Company",
    "title":"Sales Assistant",
    "location":"Moran, WY",
    "dates":"1983-1985",
    "description":"Office support for sales manager at large resort in Grand Teton National Park"
  },
  {
    "employer":"Grand Teton Science School",
    "title":"Office Manager",
    "location":"Kelly, WY",
    "dates":"1985-1986",
    "description":"Office manager for science school offering science education for adults and children's programs."
  }
]};
work.display=function ()
{
  for (job in work.jobs)
  {
    $("#workExperience").append(HTMLworkStart)
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedLocation =HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployer);
    $(".work-entry:last").append(formattedJobTitle);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
};

var projects = {"projects":[
  {
    "title":"Profitability Model",
    "datesWorked":"July - August 2015",
    "description":"Developed database driven solution using SQL Server to allocate expenses from P&L to individual accounts based on business defined allocation rules for large financial company.",
    "images": ["www.troutcaviar.blogspot","www.udacity.com"]
  },
  {
      "title":"BrioQuery training",
      "datesWorked":"1995-2012",
      "description":"Developed customized training program for large financial company using BrioQuery to create ad hoc and standardized reports against their data warehouse.",
      "images": ["www.troutcaviar.blogspot","www.udacity.com"]
    },
  {
      "title":"Various Access databases",
      "datesWorked":"1995-2012",
      "description":"Created stand-alone database solutions using MS Access for various small businesses, in multiple industries (health-care, non-profits, construction companies, financial institutions)",
      "images": ["www.troutcaviar.blogspot","www.udacity.com"]
    }
]};
projects.display = function ()
 {
  for (project in projects.projects)
  {
    $("#projects").append(HTMLprojectStart)
    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    var formatteddatesWorked = HTMLprojectDates.replace("%data%", projects.projects[project].datesWorked);
    var formatteddescription =HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formatteddatesWorked);
    $(".project-entry:last").append(formatteddescription);
  }
};

var education = {"schools":[
  {
    "name":"Orange Coast College",
    "location": "Costa Mesa, CA",
    "degree":"Associates",
    "dates":1980,
    "majors":"General Education"
  },
  {
    "name":"UC Irvine",
    "location": "Irvine, CA",
    "degree":"Bachelors",
    "dates":1983,
    "majors":"Social Ecology"
  },
  {
    "name":"Udacity",
    "location": "Ridgeland, WI",
    "degree":"Nanodegree",
    "dates":2015,
    "majors":"Front End Web Development"
  }
],
  "onlineCourse": [
    {"title":"HTML and CSS",
      "school":"Udacity",
      "dates":"July 2015",
      "url":"www.udacity.com"
    },
    {"title":"Responsive Web Design",
      "school":"Udacity",
      "dates":"August 2015",
      "url":"www.udacity.com"
    },
    {"title":"Responsive Images",
      "school":"Udacity",
      "dates":"August 2015",
      "url":"www.udacity.com"
    },
    {"title":"Javascript Basics",
      "school":"Udacity",
      "dates":"July 2015",
      "url":"www.udacity.com"
    }
  ]
} ;
education.display = function ()
 {
  for (school in education.schools)
  {  $("#education").append(HTMLschoolStart)
    var formattedSchool = HTMLschoolName.replace("%data%",education.schools[school].name);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedDegree =HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    var formattedLocation  = HTMLschoolLocation.replace("%dataT", education.schools[school].location);
    $(".education-entry:last").append(formattedSchool);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedDegree);
    $(".education-entry:last").append(formattedMajor);
    $(".education-entry:last").append(formattedLocation);
  }
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
