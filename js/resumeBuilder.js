/*
Code to dynamically render the resume page
Mary Eckmeier, 8/17/2015
 */

var bio =
{
  "name":"Brett Laidlaw",
  "role":"Woods Walker",
  "contacts":
    {
      "mobile":"651.324.3850",
      "email": "brettlaidlaw@eckmeier.com",
      "github": "https://github.com/meckmeier",
      "twitter": "@troutcaviar",
      "location":"Ridgeland, WI"
    },
  "biopic":"images/myback_small.jpg",
  "skills":["writer", "cooking demos", "speaking engagements", "local foods booster"],
  "welcomeMessage":"Same as it ever was"
};
bio.display=function ()
{
      var formattedname = HTMLheaderName.replace("%data%",bio.name);
      var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
      var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);

      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

      $("#topContacts").append(formattedLocation);
      $("#topContacts").append(formattedTwitter);
      $("#topContacts").append(formattedGithub);
      $("#topContacts").append(formattedEmail);
      $("#topContacts").append(formattedMobile);
      $("#header").prepend(formattedrole);
      $("#header").prepend(formattedname);
      $("#header").prepend(formattedImage);

     if(bio.skills.length > 0)
      {
        $("#header").append(HTMLskillsStart);
         for (skill in bio.skills)
             {
               var formattedSkills =HTMLskills.replace("%data%",bio.skills[skill]);
               $("#skills").append(formattedSkills);
             }
      }
      $("#footerContacts").append(formattedLocation);
      $("#footerContacts").append(formattedTwitter);
      $("#footerContacts").append(formattedGithub);
      $("#footerContacts").append(formattedEmail);
      $("#footerContacts").append(formattedMobile);
    };

var   work=
  {"jobs":
    [
      { "employer":"Minnesota Historical Society Press",
        "title":"Trout Caviar: Recipes from a Northern Forager",
        "location":"St. Paul, MN",
        "dates":"2011",
        "description":"Author of local-focused cookbook. Presentations, readings, and general promotions."
      },
      { "employer":"Real Bread",
        "title":"Baker and proprietor",
        "location":"St. Paul, MN",
        "dates":"2004 - 2011",
        "description":"Owned and operated artisan bread bakery selling at local farmers market."
      },
     {  "employer":"Sichuan University",
        "title":"English Professor",
        "location":"Chengdu, Sichuan, China",
        "dates":"1989",
        "description":"Taught English to both university students and adult learners."
      },
     {  "employer":"Norton Publishing",
        "title":"Three Nights in the Heart of the Earth/ Blue Bel Air",
        "location":"Minneapolis, MN",
        "dates":"1980",
        "description":"Two novels published early in the author's career. They are both lyric and deeply moving stories."
      },
    ]
  };
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
var projects =
  {"projects":
    [
      {
        "title":"Different vegetables",
        "dates":"2008-2011",
        "description":"Grew interesting and beautiful vegetable in our garden.",
        "images": ["images/root_small.jpg"]
      },
      {
        "title":"Sandwiches a la Smorebrod",
        "dates":"1995-2012",
        "description":"Created beautiful smorebrod style sandwiches for blog post. Served al fresco on the hill above our house.",
        "images": ["images/sandwich1_small.jpg","images/sandwich2_small.jpg", "images/sandwich3_small.jpg" ]
      },
      {
        "title":"Various Access databases",
        "dates":"1995-2012",
        "description":"Created stand-alone database solutions using MS Access for various small businesses, in multiple industries (health-care, non-profits, construction companies, financial institutions)",
        "images": ["images/wall_small.jpg"]
      },
      {
        "title":"Customized training",
        "dates":"1994-2012",
        "description":"Developed customized training focused primarily on Microsoft products (Word, Excel, Access and PowerPoint).",
        "images": ["images/nose_small.jpg"]
      }
   ]
  };
projects.display = function ()
 {
  for (project in projects.projects)
  {
    $("#projects").append(HTMLprojectStart)
    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    var formatteddatesWorked = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formatteddescription =HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formatteddatesWorked);
    $(".project-entry:last").append(formatteddescription);
    for (image in projects.projects[project].images)
      {
          var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImages);
      }
  }
};

var education =
  {"schools":
    [
      {
        "name":"Orange Coast College",
        "location": "Costa Mesa, CA",
        "degree":"Associate of Arts",
        "dates":1980,
        "majors":["General Education"],
        "url":"http://www.orangecoastcollege.edu/pages/home.aspx"
      },
      {
        "name":"UC Irvine",
        "location": "Irvine, CA",
        "degree":"Bachelors",
        "dates":1983,
        "majors":["Social Ecology"],
        "url": "http://uci.edu/"
      },
      {
        "name":"Udacity",
        "location": "Ridgeland, WI",
        "degree":"Nanodegree",
        "dates":2015,
        "majors":"Front End Web Development",
        "url":"http://www.udacity.customized"
      }
    ],
  "onlineCourses":
    [
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
  {  $("#education").append(HTMLschoolStart);
    var formattedSchool = HTMLschoolName.replace("%data%",education.schools[school].name);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedDegree =HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    var formattedLocation  = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchool);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedDegree);
    $(".education-entry:last").append(formattedMajor);
    $(".education-entry:last").append(formattedLocation);
  };
  $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses)
  {
    $("#education").append(HTMLschoolStart);
    var formattedCourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title + " - " + education.onlineCourses[course].school);
    var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedCourse);
    $(".education-entry:last").append(formattedDate);
    $(".education-entry:last").append(formattedUrl);
  }
  };

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
