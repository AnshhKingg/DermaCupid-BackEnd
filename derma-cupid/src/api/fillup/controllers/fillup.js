'use strict';

/**
 * A set of functions called "actions" for `fillup`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    let data = {
      'Non-working': ['Student', 'Looking for a job', 'Not working', 'Retired'],
      'IT/Computers& Software': [
        'Software Professional',
        'Hardware & Networking professional',
        'Web / Graphic Designer',
      ],
      'Engineer (Non-IT)': [
        'Civil Engineer',
        'Electrical Engineer',
        'Mechanical Engineer',
        'Non - IT Engineer',
      ],
      'Self employed': ['Agent/Broker/Trader', 'Business Person', 'Entrepreneur'],
      'Marketing & Sales': [
        'Marketing Professional',
        'Sales Professional',
        'Product Manager',
        'Logistics / Supply chain management',
        'Business Analyst',
        'Digital Marketing',
      ],
      'Accounting, Banking & Finance': [
        'Banking Professional',
        'Chartered Accountant',
        'Company Secretary',
        'Finance Professional',
        'Financial Analyst',
        'Investment Professional',
        'Accounting Professional',
      ],
      'Administration & HR': [
        'Admin Professional',
        'Front office / Secretary',
        'Human Resources Professional',
      ],
      'Education & Training': [
        'Principal / Director',
        'Professor',
        'Lecturer',
        'Teacher',
        'Research Professional',
        'Librarian',
        'Adjunct Faculty / Instructor',
      ],
      'Medical & Healthcare': [
        'Dentist',
        'Doctor',
        'Medical Transcriptionist',
        'Nurse',
        'Pharmacist',
        'Physiotherapist',
        'Psychologist',
        'Veterinary Doctor',
        'Yoga Teacher',
        'Healthcare Professional',
      ],
      'Media, Advertising & Entertainment': [
        'Actor / Model',
        'Advertising Professional',
        'Entertainment Professional',
        'Event Manager',
        'Journalist',
        'Media Professional',
        'Public Relations Professional',
      ],
      Agriculture: ['Farmer', 'Horticulturist', 'Agriculture Professional'],
      'Airline & Aviation': [
        'Air Hostess / Flight Attendant',
        'Pilot / Co - Pilot',
        'Aviation Professional',
      ],
      'Architecture & Design': [
        'Architect',
        'Interior Designer',
        'Landscape Architect',
      ],
      'Artists, Animators & Web Designers': [
        ' Animator',
        'Commercial Artist',
        'Painter',
        'Artist',
      ],
      'Beauty, Fashion & Jewellery': [
        'Beautician / Cosmetologist',
        'Makeup artist',
        'Fashion Designer',
        'Hairstylist',
        'Jewellery Designer',
      ],
      'BPO, KPO, & Customer Support': ['BPO / KPO / Customer support'],
      'Civil Services / Law Enforcement': [
        'Civil servant',
        'Police',
        'Law Enforcement Employee',
        'Security Professional',
      ],
      Defense: ['Airforce', 'Army', 'Navy', 'Defense Services'],
      'Hotel & Hospitality': [
        'Chef / Sommelier / Food Critic',
        'Catering Professional',
        'Hotel & Hospitality Professional',
      ],
      Legal: ['Lawyer', 'Legal Professional', 'Judge'],
      'Merchant Navy': ['Merchant Naval Officer', 'Mariner'],
      Science: ['Biologist / Botanist', 'Physicist', 'Researcher / Scientist'],
      'Corporate Professionals': [
        'CEO / Chairman / President',
        'VP / GM',
        'Sr.Manager / Manager',
        'Consultant / Supervisor / Team Leads',
      ],
      Others: [
        'Photographer',
        'Blogger / Vlogger',
        'Writer',
        'Politician',
        'Social Worker / NGO',
        'Sportsperson',
        'Gym instructor',
        'Fitness Professional',
        'Operator / Technician',
        'Travel & Tourism Professional',
        'Transportation Professional',
        'Others',
      ],
    };
    let theData = []
    let count = 1;
    for (const [key, value] of Object.entries(data)) {
      let theNamesList = []
      for(let i=0; i<value.length; i++)
      {
        theNamesList.push({Name: value[i],id: count})
        count++;
      }
      theData.push({
        Profession: key,
        NameList: theNamesList
      })
    }
    // ctx.body = theData
    // return ctx
    for await (const d of theData) {
      const entry = await strapi.db.query('api::register-profession.register-profession').create({
        data: {
          Profession: d['Profession'],
          NameList: d['NameList']
          // Value: d
        },
      });
    }
    ctx.status = 201
    ctx.body = 'ok'
  }
};
