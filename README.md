# Mapping Components In React

![](https://media.istockphoto.com/photos/flags-of-the-americas-picture-id93436189?k=20&m=93436189&s=612x612&w=0&h=Hmq-cMTxvBYKGLMJvhliyWEWjYGh1VbQZHheOK3G1vg=)

## Overview

In this lesson, we'll learn how to take a data set and utilize the `.map` method to return multiple components to display in our application. `.map` is one of the most useful array methods in the React eco system as it allows us to create one component to display multiple pieces of information.

## Objectives

By the end of this, students should be able to:

- Create a list component utilizing `.map()`

## Getting Started

To start this build out, begin by creating a new React project:

- `fork` and `clone`
- `cd` into the newly created directory and run `npm install` to install dependencies
- Create a `components` folder in the `src` directory.
- Open your project up in VS Code with `code .`
- Run `npm run dev` to start your development server

## Creating Parent Components

Start by creating two components `SideBar`, and `MainContent` in the `components` directory.

**Don't forget to export your components!**

---

Add the following jsx in `SideBar`:

```jsx
return (
  <div className="side-bar">
    <div className="side-info">
      <h1>SideBar</h1>
      <h2>Using this app, we'll display an array of country data by mapping through it and returning some JSX. When done correctly, we should see a full list of countries on the right side of our screen!</h2>
    </div>
  </div>
)
```

---

In your `MainContent` component, ***accept props as an argument*** and add the following jsx:

```jsx
return (
  <div className="main">
    <h1>Countries</h1>
  </div>
)
```

---

### Adding The Sidebars

In `App.jsx`, import both the `SideBar` and `MainContent` components:

```js
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'
```

Next we'll display both of our components:

```js
const App = () => {

  return (
    <div className="flex-row">
      <SideBar />
      <MainContent />
    </div>
  )
}
```

## Mapping Data and Returning JSX

Now that we've added our two components, we'll display some information.

In the `src` folder, create a `countries.js` (not jsx) file and add the following content:

<details><summary>Country Data</summary>

```js
const countries = [
  {
    name: 'Afghanistan',
    population: '38,928,346',
    capital: 'Kabul',
    language: 'Pashto, Dari',
    id: 'Afghanistan',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Afghanistan'
  },
  {
    name: 'Albania',
    population: '2,877,797',
    capital: 'Tirana',
    language: 'Albanian',
    id: 'Albania',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Albania'
  },
  {
    name: 'Algeria',
    population: '43,851,044',
    capital: 'Algiers',
    language: 'Arabic',
    id: 'Algeria',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Algeria'
  },
  {
    name: 'Andorra',
    population: '77,265',
    capital: 'Andorra la Vella',
    language: 'Catalan',
    id: 'Andorra',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Andorra'
  },
  {
    name: 'Angola',
    population: '32,866,272',
    capital: 'Luanda',
    language: 'Portuguese',
    id: 'Angola',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Angola'
  },
  {
    name: 'Antigua and Barbuda',
    population: '97,929',
    capital: "Saint John's",
    language: 'English',
    id: 'AntiguaAndBarbuda',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Antigua_and_Barbuda'
  },
  {
    name: 'Argentina',
    population: '45,195,774',
    capital: 'Buenos Aires',
    language: 'Spanish',
    id: 'Argentina',
    continent: 'South America',
    url: 'https://en.wikipedia.org/wiki/Argentina'
  },
  {
    name: 'Armenia',
    population: '2,963,243',
    capital: 'Yerevan',
    language: 'Armenian',
    id: 'Armenia',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Armenia'
  },
  {
    name: 'Australia',
    population: '25,499,884',
    capital: 'Canberra',
    language: 'English',
    id: 'Australia',
    continent: 'Oceania',
    url: 'https://en.wikipedia.org/wiki/Australia'
  },
  {
    name: 'Austria',
    population: '9,006,398',
    capital: 'Vienna',
    language: 'German',
    id: 'Austria',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Austria'
  },
  {
    name: 'Azerbaijan',
    population: '10,139,177',
    capital: 'Baku',
    language: 'Azerbaijani',
    id: 'Azerbaijan',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Azerbaijan'
  },
  {
    name: 'Bahamas',
    population: '393,244',
    capital: 'Nassau',
    language: 'English',
    id: 'Bahamas',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Bahamas'
  },
  {
    name: 'Bahrain',
    population: '1,701,575',
    capital: 'Manama',
    language: 'Arabic',
    id: 'Bahrain',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Bahrain'
  },
  {
    name: 'Bangladesh',
    population: '164,689,383',
    capital: 'Dhaka',
    language: 'Bengali',
    id: 'Bangladesh',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Bangladesh'
  },
  {
    name: 'Barbados',
    population: '287,375',
    capital: 'Bridgetown',
    language: 'English',
    id: 'Barbados',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Barbados'
  },
  {
    name: 'Belarus',
    population: '9,449,323',
    capital: 'Minsk',
    language: 'Belarusian, Russian',
    id: 'Belarus',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Belarus'
  },
  {
    name: 'Belgium',
    population: '11,589,623',
    capital: 'Brussels',
    language: 'Dutch, French, German',
    id: 'Belgium',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Belgium'
  },
  {
    name: 'Belize',
    population: '397,628',
    capital: 'Belmopan',
    language: 'English',
    id: 'Belize',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Belize'
  },
  {
    name: 'Benin',
    population: '12,123,200',
    capital: 'Porto-Novo',
    language: 'French',
    id: 'Benin',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Benin'
  },
  {
    name: 'Bhutan',
    population: '771,608',
    capital: 'Thimphu',
    language: 'Dzongkha',
    id: 'Bhutan',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Bhutan'
  },
  {
    name: 'Bolivia',
    population: '11,673,021',
    capital: 'Sucre',
    language: 'Spanish, Quechua, Aymara',
    id: 'Bolivia',
    continent: 'South America',
    url: 'https://en.wikipedia.org/wiki/Bolivia'
  },
  {
    name: 'Bosnia and Herzegovina',
    population: '3,280,819',
    capital: 'Sarajevo',
    language: 'Bosnian, Croatian, Serbian',
    id: 'BosniaAndHerzegovina',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina'
  },
  {
    name: 'Botswana',
    population: '2,351,627',
    capital: 'Gaborone',
    language: 'English, Setswana',
    id: 'Botswana',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Botswana'
  },
  {
    name: 'Brazil',
    population: '211,049,527',
    capital: 'Brasília',
    language: 'Portuguese',
    id: 'Brazil',
    continent: 'South America',
    url: 'https://en.wikipedia.org/wiki/Brazil'
  },
  {
    name: 'Brunei',
    population: '437,479',
    capital: 'Bandar Seri Begawan',
    language: 'Malay',
    id: 'Brunei',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Brunei'
  },
  {
    name: 'Bulgaria',
    population: '6,948,445',
    capital: 'Sofia',
    language: 'Bulgarian',
    id: 'Bulgaria',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Bulgaria'
  },
  {
    name: 'Burkina Faso',
    population: '20,903,273',
    capital: 'Ouagadougou',
    language: 'French',
    id: 'BurkinaFaso',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Burkina_Faso'
  },
  {
    name: 'Burundi',
    population: '11,890,784',
    capital: 'Gitega',
    language: 'Kirundi, French',
    id: 'Burundi',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Burundi'
  },
  {
    name: 'Cabo Verde',
    population: '555,987',
    capital: 'Praia',
    language: 'Portuguese',
    id: 'CaboVerde',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Cape_Verde'
  },
  {
    name: 'Cambodia',
    population: '16,718,965',
    capital: 'Phnom Penh',
    language: 'Khmer',
    id: 'Cambodia',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Cambodia'
  },
  {
    name: 'Cameroon',
    population: '26,545,863',
    capital: 'Yaoundé',
    language: 'French, English',
    id: 'Cameroon',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Cameroon'
  },
  {
    name: 'Canada',
    population: '37,364,117',
    capital: 'Ottawa',
    language: 'English, French',
    id: 'Canada',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Canada'
  },
  {
    name: 'Central African Republic',
    population: '4,829,767',
    capital: 'Bangui',
    language: 'French, Sango',
    id: 'CentralAfricanRepublic',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Central_African_Republic'
  },
  {
    name: 'Chad',
    population: '16,425,864',
    capital: "N'Djamena",
    language: 'Arabic, French',
    id: 'Chad',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Chad'
  },
  {
    name: 'Chile',
    population: '19,116,201',
    capital: 'Santiago',
    language: 'Spanish',
    id: 'Chile',
    continent: 'South America',
    url: 'https://en.wikipedia.org/wiki/Chile'
  },
  {
    name: 'China',
    population: '1,402,625,888',
    capital: 'Beijing',
    language: 'Mandarin',
    id: 'China',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/China'
  },
  {
    name: 'Colombia',
    population: '50,882,891',
    capital: 'Bogotá',
    language: 'Spanish',
    id: 'Colombia',
    continent: 'South America',
    url: 'https://en.wikipedia.org/wiki/Colombia'
  },
  {
    name: 'Comoros',
    population: '869,601',
    capital: 'Moroni',
    language: 'Comorian, Arabic, French',
    id: 'Comoros',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Comoros'
  },
  {
    name: 'Congo',
    population: '5,518,087',
    capital: 'Brazzaville',
    language: 'French',
    id: 'Congo',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Republic_of_the_Congo'
  },
  {
    name: 'Costa Rica',
    population: '5,094,118',
    capital: 'San José',
    language: 'Spanish',
    id: 'CostaRica',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Costa_Rica'
  },
  {
    name: "Ivory Coast (Côte d'Ivoire)",
    population: '26,378,274',
    capital: 'Yamoussoukro',
    language: 'French',
    id: 'IvoryCoast',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Ivory_Coast'
  },
  {
    name: 'Croatia',
    population: '4,105,267',
    capital: 'Zagreb',
    language: 'Croatian',
    id: 'Croatia',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Croatia'
  },
  {
    name: 'Cuba',
    population: '11,326,616',
    capital: 'Havana',
    language: 'Spanish',
    id: 'Cuba',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Cuba'
  },
  {
    name: 'Cyprus',
    population: '1,207,359',
    capital: 'Nicosia',
    language: 'Greek, Turkish',
    id: 'Cyprus',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Cyprus'
  },
  {
    name: 'Czech Republic (Czechia)',
    population: '10,708,981',
    capital: 'Prague',
    language: 'Czech',
    id: 'CzechRepublic',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Czech_Republic'
  },
  {
    name: 'Democratic Republic of the Congo',
    population: '89,561,403',
    capital: 'Kinshasa',
    language: 'French',
    id: 'DemocraticRepublicOfTheCongo',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo'
  },
  {
    name: 'Denmark',
    population: '5,792,202',
    capital: 'Copenhagen',
    language: 'Danish',
    id: 'Denmark',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Denmark'
  },
  {
    name: 'Djibouti',
    population: '988,000',
    capital: 'Djibouti',
    language: 'French, Arabic',
    id: 'Djibouti',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Djibouti'
  },
  {
    name: 'Dominica',
    population: '71,986',
    capital: 'Roseau',
    language: 'English',
    id: 'Dominica',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Dominica'
  },
  {
    name: 'Dominican Republic',
    population: '10,847,910',
    capital: 'Santo Domingo',
    language: 'Spanish',
    id: 'DominicanRepublic',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Dominican_Republic'
  },
  {
    name: 'Ecuador',
    population: '17,643,054',
    capital: 'Quito',
    language: 'Spanish',
    id: 'Ecuador',
    continent: 'South America',
    url: 'https://en.wikipedia.org/wiki/Ecuador'
  },
  {
    name: 'Egypt',
    population: '104,124,440',
    capital: 'Cairo',
    language: 'Arabic',
    id: 'Egypt',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Egypt'
  },
  {
    name: 'El Salvador',
    population: '6,486,205',
    capital: 'San Salvador',
    language: 'Spanish',
    id: 'ElSalvador',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/El_Salvador'
  },
  {
    name: 'Equatorial Guinea',
    population: '1,402,985',
    capital: 'Malabo',
    language: 'Spanish, French, Portuguese',
    id: 'EquatorialGuinea',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Equatorial_Guinea'
  },
  {
    name: 'Eritrea',
    population: '3,546,421',
    capital: 'Asmara',
    language: 'Tigrinya, Arabic, English',
    id: 'Eritrea',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Eritrea'
  },
  {
    name: 'Estonia',
    population: '1,326,535',
    capital: 'Tallinn',
    language: 'Estonian',
    id: 'Estonia',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Estonia'
  },
  {
    name: 'Eswatini',
    population: '1,160,164',
    capital: 'Mbabane',
    language: 'English, Swazi',
    id: 'Eswatini',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Eswatini'
  },
  {
    name: 'Ethiopia',
    population: '114,963,588',
    capital: 'Addis Ababa',
    language: 'Amharic',
    id: 'Ethiopia',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Ethiopia'
  },
  {
    name: 'Fiji',
    population: '896,445',
    capital: 'Suva',
    language: 'English, Fijian, Hindi',
    id: 'Fiji',
    continent: 'Oceania',
    url: 'https://en.wikipedia.org/wiki/Fiji'
  },
  {
    name: 'Finland',
    population: '5,540,720',
    capital: 'Helsinki',
    language: 'Finnish, Swedish',
    id: 'Finland',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Finland'
  },
  {
    name: 'France',
    population: '65,273,511',
    capital: 'Paris',
    language: 'French',
    id: 'France',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/France'
  },
  {
    name: 'Gabon',
    population: '2,225,734',
    capital: 'Libreville',
    language: 'French',
    id: 'Gabon',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Gabon'
  },
  {
    name: 'Gambia',
    population: '2,416,668',
    capital: 'Banjul',
    language: 'English',
    id: 'Gambia',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/The_Gambia'
  },
  {
    name: 'Georgia',
    population: '3,989,167',
    capital: 'Tbilisi',
    language: 'Georgian',
    id: 'Georgia',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Georgia_(country)'
  },
  {
    name: 'Germany',
    population: '83,783,942',
    capital: 'Berlin',
    language: 'German',
    id: 'Germany',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Germany'
  },
  {
    name: 'Ghana',
    population: '31,072,940',
    capital: 'Accra',
    language: 'English',
    id: 'Ghana',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Ghana'
  },
  {
    name: 'Greece',
    population: '10,423,054',
    capital: 'Athens',
    language: 'Greek',
    id: 'Greece',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Greece'
  },
  {
    name: 'Grenada',
    population: '112,523',
    capital: "St. George's",
    language: 'English',
    id: 'Grenada',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Grenada'
  },
  {
    name: 'Guatemala',
    population: '17,915,568',
    capital: 'Guatemala City',
    language: 'Spanish',
    id: 'Guatemala',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Guatemala'
  },
  {
    name: 'Guinea',
    population: '13,132,795',
    capital: 'Conakry',
    language: 'French',
    id: 'Guinea',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Guinea'
  },
  {
    name: 'Guinea-Bissau',
    population: '1,968,001',
    capital: 'Bissau',
    language: 'Portuguese',
    id: 'GuineaBissau',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Guinea-Bissau'
  },
  {
    name: 'Guyana',
    population: '786,552',
    capital: 'Georgetown',
    language: 'English',
    id: 'Guyana',
    continent: 'South America',
    url: 'https://en.wikipedia.org/wiki/Guyana'
  },
  {
    name: 'Haiti',
    population: '11,402,528',
    capital: 'Port-au-Prince',
    language: 'French',
    id: 'Haiti',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Haiti'
  },
  {
    name: 'Holy See',
    population: '801',
    capital: 'Vatican City (city-state)',
    language: 'Italian, Latin',
    id: 'HolySee',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Holy_See'
  },
  {
    name: 'Honduras',
    population: '9,904,607',
    capital: 'Tegucigalpa',
    language: 'Spanish',
    id: 'Honduras',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Honduras'
  },
  {
    name: 'Hungary',
    population: '9,660,351',
    capital: 'Budapest',
    language: 'Hungarian',
    id: 'Hungary',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Hungary'
  },
  {
    name: 'Iceland',
    population: '366,423',
    capital: 'Reykjavik',
    language: 'Icelandic',
    id: 'Iceland',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Iceland'
  },
  {
    name: 'India',
    population: '1,380,004,385',
    capital: 'New Delhi',
    language: 'Hindi, English',
    id: 'India',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/India'
  },
  {
    name: 'Indonesia',
    population: '273,523,615',
    capital: 'Jakarta',
    language: 'Indonesian',
    id: 'Indonesia',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Indonesia'
  },
  {
    name: 'Iran',
    population: '83,992,949',
    capital: 'Tehran',
    language: 'Persian (Farsi)',
    id: 'Iran',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Iran'
  },
  {
    name: 'Iraq',
    population: '40,222,493',
    capital: 'Baghdad',
    language: 'Arabic, Kurdish',
    id: 'Iraq',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Iraq'
  },
  {
    name: 'Ireland',
    population: '4,937,786',
    capital: 'Dublin',
    language: 'English, Irish',
    id: 'Ireland',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Ireland'
  },
  {
    name: 'Israel',
    population: '8,655,535',
    capital: 'Jerusalem',
    language: 'Hebrew',
    id: 'Israel',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Israel'
  },
  {
    name: 'Italy',
    population: '60,461,826',
    capital: 'Rome',
    language: 'Italian',
    id: 'Italy',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Italy'
  },
  {
    name: 'Jamaica',
    population: '2,961,167',
    capital: 'Kingston',
    language: 'English',
    id: 'Jamaica',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Jamaica'
  },
  {
    name: 'Japan',
    population: '126,476,461',
    capital: 'Tokyo',
    language: 'Japanese',
    id: 'Japan',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Japan'
  },
  {
    name: 'Jordan',
    population: '10,203,134',
    capital: 'Amman',
    language: 'Arabic',
    id: 'Jordan',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Jordan'
  },
  {
    name: 'Kazakhstan',
    population: '18,776,707',
    capital: 'Nur-Sultan',
    language: 'Kazakh, Russian',
    id: 'Kazakhstan',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Kazakhstan'
  },
  {
    name: 'Kenya',
    population: '53,771,296',
    capital: 'Nairobi',
    language: 'Swahili, English',
    id: 'Kenya',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Kenya'
  },
  {
    name: 'Kiribati',
    population: '119,449',
    capital: 'South Tarawa',
    language: 'English, Gilbertese',
    id: 'Kiribati',
    continent: 'Oceania',
    url: 'https://en.wikipedia.org/wiki/Kiribati'
  },
  {
    name: 'Kuwait',
    population: '4,270,571',
    capital: 'Kuwait City',
    language: 'Arabic',
    id: 'Kuwait',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Kuwait'
  },
  {
    name: 'Kyrgyzstan',
    population: '6,524,195',
    capital: 'Bishkek',
    language: 'Kyrgyz, Russian',
    id: 'Kyrgyzstan',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Kyrgyzstan'
  },
  {
    name: 'Laos',
    population: '7,275,560',
    capital: 'Vientiane',
    language: 'Lao',
    id: 'Laos',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Laos'
  },
  {
    name: 'Latvia',
    population: '1,886,198',
    capital: 'Riga',
    language: 'Latvian',
    id: 'Latvia',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Latvia'
  },
  {
    name: 'Lebanon',
    population: '6,825,445',
    capital: 'Beirut',
    language: 'Arabic',
    id: 'Lebanon',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Lebanon'
  },
  {
    name: 'Lesotho',
    population: '2,142,249',
    capital: 'Maseru',
    language: 'English, Sesotho',
    id: 'Lesotho',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Lesotho'
  },
  {
    name: 'Liberia',
    population: '5,057,681',
    capital: 'Monrovia',
    language: 'English',
    id: 'Liberia',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Liberia'
  },
  {
    name: 'Libya',
    population: '6,871,292',
    capital: 'Tripoli',
    language: 'Arabic',
    id: 'Libya',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Libya'
  },
  {
    name: 'Liechtenstein',
    population: '38,128',
    capital: 'Vaduz',
    language: 'German',
    id: 'Liechtenstein',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Liechtenstein'
  },
  {
    name: 'Lithuania',
    population: '2,722,289',
    capital: 'Vilnius',
    language: 'Lithuanian',
    id: 'Lithuania',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Lithuania'
  },
  {
    name: 'Luxembourg',
    population: '625,978',
    capital: 'Luxembourg City',
    language: 'Luxembourgish, French, German',
    id: 'Luxembourg',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Luxembourg'
  },
  {
    name: 'Madagascar',
    population: '27,691,018',
    capital: 'Antananarivo',
    language: 'Malagasy, French',
    id: 'Madagascar',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Madagascar'
  },
  {
    name: 'Malawi',
    population: '19,129,952',
    capital: 'Lilongwe',
    language: 'English, Chichewa',
    id: 'Malawi',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Malawi'
  },
  {
    name: 'Malaysia',
    population: '32,365,999',
    capital: 'Kuala Lumpur',
    language: 'Malay',
    id: 'Malaysia',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Malaysia'
  },
  {
    name: 'Maldives',
    population: '540,544',
    capital: 'Malé',
    language: 'Maldivian',
    id: 'Maldives',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Maldives'
  },
  {
    name: 'Mali',
    population: '20,250,833',
    capital: 'Bamako',
    language: 'French',
    id: 'Mali',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Mali'
  },
  {
    name: 'Malta',
    population: '441,543',
    capital: 'Valletta',
    language: 'Maltese, English',
    id: 'Malta',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Malta'
  },
  {
    name: 'Marshall Islands',
    population: '59,190',
    capital: 'Majuro',
    language: 'Marshallese, English',
    id: 'MarshallIslands',
    continent: 'Oceania',
    url: 'https://en.wikipedia.org/wiki/Marshall_Islands'
  },
  {
    name: 'Mauritania',
    population: '4,649,658',
    capital: 'Nouakchott',
    language: 'Arabic',
    id: 'Mauritania',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Mauritania'
  },
  {
    name: 'Mauritius',
    population: '1,271,767',
    capital: 'Port Louis',
    language: 'English',
    id: 'Mauritius',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Mauritius'
  },
  {
    name: 'Mexico',
    population: '128,932,753',
    capital: 'Mexico City',
    language: 'Spanish',
    id: 'Mexico',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Mexico'
  },
  {
    name: 'Micronesia',
    population: '548,914',
    capital: 'Palikir',
    language: 'English',
    id: 'Micronesia',
    continent: 'Oceania',
    url: 'https://en.wikipedia.org/wiki/Federated_States_of_Micronesia'
  },
  {
    name: 'Moldova',
    population: '4,033,963',
    capital: 'Chisinau',
    language: 'Romanian',
    id: 'Moldova',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Moldova'
  },
  {
    name: 'Monaco',
    population: '39,242',
    capital: 'Monaco',
    language: 'French',
    id: 'Monaco',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Monaco'
  },
  {
    name: 'Mongolia',
    population: '3,278,290',
    capital: 'Ulaanbaatar',
    language: 'Mongolian',
    id: 'Mongolia',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Mongolia'
  },
  {
    name: 'Montenegro',
    population: '628,066',
    capital: 'Podgorica',
    language: 'Montenegrin',
    id: 'Montenegro',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Montenegro'
  },
  {
    name: 'Morocco',
    population: '36,910,560',
    capital: 'Rabat',
    language: 'Arabic',
    id: 'Morocco',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Morocco'
  },
  {
    name: 'Mozambique',
    population: '31,255,435',
    capital: 'Maputo',
    language: 'Portuguese',
    id: 'Mozambique',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Mozambique'
  },
  {
    name: 'Myanmar',
    population: '54,409,800',
    capital: 'Naypyidaw',
    language: 'Burmese',
    id: 'Myanmar',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Myanmar'
  },
  {
    name: 'Namibia',
    population: '2,540,905',
    capital: 'Windhoek',
    language: 'English',
    id: 'Namibia',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Namibia'
  },
  {
    name: 'Nauru',
    population: '10,824',
    capital: 'Yaren',
    language: 'Nauruan, English',
    id: 'Nauru',
    continent: 'Oceania',
    url: 'https://en.wikipedia.org/wiki/Nauru'
  },
  {
    name: 'Nepal',
    population: '29,136,808',
    capital: 'Kathmandu',
    language: 'Nepali',
    id: 'Nepal',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Nepal'
  },
  {
    name: 'Netherlands',
    population: '17,134,872',
    capital: 'Amsterdam',
    language: 'Dutch',
    id: 'Netherlands',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Netherlands'
  },
  {
    name: 'New Zealand',
    population: '4,822,233',
    capital: 'Wellington',
    language: 'English, Māori',
    id: 'NewZealand',
    continent: 'Oceania',
    url: 'https://en.wikipedia.org/wiki/New_Zealand'
  },
  {
    name: 'Nicaragua',
    population: '6,624,554',
    capital: 'Managua',
    language: 'Spanish',
    id: 'Nicaragua',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Nicaragua'
  },
  {
    name: 'Niger',
    population: '24,206,644',
    capital: 'Niamey',
    language: 'French',
    id: 'Niger',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Niger'
  },
  {
    name: 'Nigeria',
    population: '206,139,589',
    capital: 'Abuja',
    language: 'English',
    id: 'Nigeria',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Nigeria'
  },
  {
    name: 'North Korea',
    population: '25,778,816',
    capital: 'Pyongyang',
    language: 'Korean',
    id: 'NorthKorea',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/North_Korea'
  },
  {
    name: 'North Macedonia',
    population: '2,083,374',
    capital: 'Skopje',
    language: 'Macedonian',
    id: 'NorthMacedonia',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/North_Macedonia'
  },
  {
    name: 'Norway',
    population: '5,421,241',
    capital: 'Oslo',
    language: 'Norwegian',
    id: 'Norway',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Norway'
  },
  {
    name: 'Oman',
    population: '5,106,626',
    capital: 'Muscat',
    language: 'Arabic',
    id: 'Oman',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Oman'
  },
  {
    name: 'Pakistan',
    population: '220,892,340',
    capital: 'Islamabad',
    language: 'Urdu',
    id: 'Pakistan',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Pakistan'
  },
  {
    name: 'Palau',
    population: '18,094',
    capital: 'Ngerulmud',
    language: 'English',
    id: 'Palau',
    continent: 'Oceania',
    url: 'https://en.wikipedia.org/wiki/Palau'
  },
  {
    name: 'Panama',
    population: '4,314,767',
    capital: 'Panama City',
    language: 'Spanish',
    id: 'Panama',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Panama'
  },
  {
    name: 'Papua New Guinea',
    population: '8,947,024',
    capital: 'Port Moresby',
    language: 'English',
    id: 'PapuaNewGuinea',
    continent: 'Oceania',
    url: 'https://en.wikipedia.org/wiki/Papua_New_Guinea'
  },
  {
    name: 'Paraguay',
    population: '7,132,538',
    capital: 'Asunción',
    language: 'Spanish, Guarani',
    id: 'Paraguay',
    continent: 'South America',
    url: 'https://en.wikipedia.org/wiki/Paraguay'
  },
  {
    name: 'Peru',
    population: '32,971,854',
    capital: 'Lima',
    language: 'Spanish',
    id: 'Peru',
    continent: 'South America',
    url: 'https://en.wikipedia.org/wiki/Peru'
  },
  {
    name: 'Philippines',
    population: '109,581,078',
    capital: 'Manila',
    language: 'Filipino, English',
    id: 'Philippines',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Philippines'
  },
  {
    name: 'Poland',
    population: '37,846,611',
    capital: 'Warsaw',
    language: 'Polish',
    id: 'Poland',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Poland'
  },
  {
    name: 'Portugal',
    population: '10,196,709',
    capital: 'Lisbon',
    language: 'Portuguese',
    id: 'Portugal',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Portugal'
  },
  {
    name: 'Qatar',
    population: '2,881,053',
    capital: 'Doha',
    language: 'Arabic',
    id: 'Qatar',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Qatar'
  },
  {
    name: 'Romania',
    population: '19,237,691',
    capital: 'Bucharest',
    language: 'Romanian',
    id: 'Romania',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Romania'
  },
  {
    name: 'Russia',
    population: '145,934,462',
    capital: 'Moscow',
    language: 'Russian',
    id: 'Russia',
    continent: 'Europe, Asia',
    url: 'https://en.wikipedia.org/wiki/Russia'
  },
  {
    name: 'Rwanda',
    population: '12,952,218',
    capital: 'Kigali',
    language: 'Kinyarwanda, French, English',
    id: 'Rwanda',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Rwanda'
  },
  {
    name: 'Saint Kitts and Nevis',
    population: '53,199',
    capital: 'Basseterre',
    language: 'English',
    id: 'SaintKittsAndNevis',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Saint_Kitts_and_Nevis'
  },
  {
    name: 'Saint Lucia',
    population: '183,627',
    capital: 'Castries',
    language: 'English',
    id: 'SaintLucia',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Saint_Lucia'
  },
  {
    name: 'Saint Vincent and the Grenadines',
    population: '110,940',
    capital: 'Kingstown',
    language: 'English',
    id: 'SaintVincentAndTheGrenadines',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines'
  },
  {
    name: 'Samoa',
    population: '198,414',
    capital: 'Apia',
    language: 'Samoan, English',
    id: 'Samoa',
    continent: 'Oceania',
    url: 'https://en.wikipedia.org/wiki/Samoa'
  },
  {
    name: 'San Marino',
    population: '33,931',
    capital: 'San Marino',
    language: 'Italian',
    id: 'SanMarino',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/San_Marino'
  },
  {
    name: 'Sao Tome and Principe',
    population: '219,159',
    capital: 'São Tomé',
    language: 'Portuguese',
    id: 'SaoTomeAndPrincipe',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/São_Tomé_and_Príncipe'
  },
  {
    name: 'Saudi Arabia',
    population: '34,813,871',
    capital: 'Riyadh',
    language: 'Arabic',
    id: 'SaudiArabia',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Saudi_Arabia'
  },
  {
    name: 'Senegal',
    population: '16,743,927',
    capital: 'Dakar',
    language: 'French',
    id: 'Senegal',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Senegal'
  },
  {
    name: 'Serbia',
    population: '8,737,371',
    capital: 'Belgrade',
    language: 'Serbian',
    id: 'Serbia',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Serbia'
  },
  {
    name: 'Seychelles',
    population: '98,347',
    capital: 'Victoria',
    language: 'French, English, Seselwa',
    id: 'Seychelles',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Seychelles'
  },
  {
    name: 'Sierra Leone',
    population: '7,976,983',
    capital: 'Freetown',
    language: 'English',
    id: 'SierraLeone',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Sierra_Leone'
  },
  {
    name: 'Singapore',
    population: '5,850,342',
    capital: 'Singapore',
    language: 'English, Malay, Mandarin, Tamil',
    id: 'Singapore',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Singapore'
  },
  {
    name: 'Slovakia',
    population: '5,459,642',
    capital: 'Bratislava',
    language: 'Slovak',
    id: 'Slovakia',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Slovakia'
  },
  {
    name: 'Slovenia',
    population: '2,078,938',
    capital: 'Ljubljana',
    language: 'Slovene',
    id: 'Slovenia',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Slovenia'
  },
  {
    name: 'Solomon Islands',
    population: '686,884',
    capital: 'Honiara',
    language: 'English',
    id: 'SolomonIslands',
    continent: 'Oceania',
    url: 'https://en.wikipedia.org/wiki/Solomon_Islands'
  },
  {
    name: 'Somalia',
    population: '15,893,222',
    capital: 'Mogadishu',
    language: 'Somali, Arabic',
    id: 'Somalia',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Somalia'
  },
  {
    name: 'South Africa',
    population: '59,308,690',
    capital: 'Pretoria',
    language: 'IsiZulu, IsiXhosa, Afrikaans, English',
    id: 'SouthAfrica',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/South_Africa'
  },
  {
    name: 'South Sudan',
    population: '11,193,725',
    capital: 'Juba',
    language: 'English',
    id: 'SouthSudan',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/South_Sudan'
  },
  {
    name: 'Spain',
    population: '46,754,778',
    capital: 'Madrid',
    language: 'Spanish',
    id: 'Spain',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Spain'
  },
  {
    name: 'Sri Lanka',
    population: '21,413,249',
    capital: 'Colombo',
    language: 'Sinhala, Tamil',
    id: 'SriLanka',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Sri_Lanka'
  },
  {
    name: 'Sudan',
    population: '43,849,260',
    capital: 'Khartoum',
    language: 'Arabic, English',
    id: 'Sudan',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Sudan'
  },
  {
    name: 'Suriname',
    population: '586,632',
    capital: 'Paramaribo',
    language: 'Dutch',
    id: 'Suriname',
    continent: 'South America',
    url: 'https://en.wikipedia.org/wiki/Suriname'
  },
  {
    name: 'Sweden',
    population: '10,099,265',
    capital: 'Stockholm',
    language: 'Swedish',
    id: 'Sweden',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Sweden'
  },
  {
    name: 'Switzerland',
    population: '8,372,000',
    capital: 'Bern',
    language: 'German, French, Italian, Romansh',
    id: 'Switzerland',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Switzerland'
  },
  {
    name: 'Syria',
    population: '17,500,658',
    capital: 'Damascus',
    language: 'Arabic',
    id: 'Syria',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Syria'
  },
  {
    name: 'Taiwan',
    population: '23,816,775',
    capital: 'Taipei',
    language: 'Mandarin',
    id: 'Taiwan',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Taiwan'
  },
  {
    name: 'Tajikistan',
    population: '9,537,645',
    capital: 'Dushanbe',
    language: 'Tajik',
    id: 'Tajikistan',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Tajikistan'
  },
  {
    name: 'Tanzania',
    population: '61,500,000',
    capital: 'Dodoma',
    language: 'Swahili, English',
    id: 'Tanzania',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Tanzania'
  },
  {
    name: 'Thailand',
    population: '69,799,978',
    capital: 'Bangkok',
    language: 'Thai',
    id: 'Thailand',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Thailand'
  },
  {
    name: 'Togo',
    population: '8,278,724',
    capital: 'Lomé',
    language: 'French',
    id: 'Togo',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Togo'
  },
  {
    name: 'Tonga',
    population: '105,695',
    capital: "Nuku'alofa",
    language: 'Tongan, English',
    id: 'Tonga',
    continent: 'Oceania',
    url: 'https://en.wikipedia.org/wiki/Tonga'
  },
  {
    name: 'Trinidad and Tobago',
    population: '1,399,488',
    capital: 'Port of Spain',
    language: 'English',
    id: 'TrinidadAndTobago',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/Trinidad_and_Tobago'
  },
  {
    name: 'Tunisia',
    population: '11,818,619',
    capital: 'Tunis',
    language: 'Arabic',
    id: 'Tunisia',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Tunisia'
  },
  {
    name: 'Turkey',
    population: '82,003,882',
    capital: 'Ankara',
    language: 'Turkish',
    id: 'Turkey',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Turkey'
  },
  {
    name: 'Turkmenistan',
    population: '6,031,200',
    capital: 'Ashgabat',
    language: 'Turkmen',
    id: 'Turkmenistan',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Turkmenistan'
  },
  {
    name: 'Tuvalu',
    population: '11,792',
    capital: 'Funafuti',
    language: 'Tuvaluan, English',
    id: 'Tuvalu',
    continent: 'Oceania',
    url: 'https://en.wikipedia.org/wiki/Tuvalu'
  },
  {
    name: 'Uganda',
    population: '45,741,007',
    capital: 'Kampala',
    language: 'English, Swahili',
    id: 'Uganda',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Uganda'
  },
  {
    name: 'Ukraine',
    population: '43,733,762',
    capital: 'Kiev',
    language: 'Ukrainian',
    id: 'Ukraine',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Ukraine'
  },
  {
    name: 'United Arab Emirates',
    population: '9,890,400',
    capital: 'Abu Dhabi',
    language: 'Arabic',
    id: 'UnitedArabEmirates',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/United_Arab_Emirates'
  },
  {
    name: 'United Kingdom',
    population: '66,834,405',
    capital: 'London',
    language: 'English',
    id: 'UnitedKingdom',
    continent: 'Europe',
    url: 'https://en.wikipedia.org/wiki/United_Kingdom'
  },
  {
    name: 'United States',
    population: '331,002,651',
    capital: 'Washington, D.C.',
    language: 'English',
    id: 'UnitedStates',
    continent: 'North America',
    url: 'https://en.wikipedia.org/wiki/United_States'
  },
  {
    name: 'Uruguay',
    population: '3,473,730',
    capital: 'Montevideo',
    language: 'Spanish',
    id: 'Uruguay',
    continent: 'South America',
    url: 'https://en.wikipedia.org/wiki/Uruguay'
  },
  {
    name: 'Uzbekistan',
    population: '33,469,203',
    capital: 'Tashkent',
    language: 'Uzbek',
    id: 'Uzbekistan',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Uzbekistan'
  },
  {
    name: 'Vanuatu',
    population: '307,145',
    capital: 'Port Vila',
    language: 'Bislama, English, French',
    id: 'Vanuatu',
    continent: 'Oceania',
    url: 'https://en.wikipedia.org/wiki/Vanuatu'
  },
  {
    name: 'Venezuela',
    population: '28,435,940',
    capital: 'Caracas',
    language: 'Spanish',
    id: 'Venezuela',
    continent: 'South America',
    url: 'https://en.wikipedia.org/wiki/Venezuela'
  },
  {
    name: 'Vietnam',
    population: '97,338,579',
    capital: 'Hanoi',
    language: 'Vietnamese',
    id: 'Vietnam',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Vietnam'
  },
  {
    name: 'Yemen',
    population: '29,825,964',
    capital: 'Sanaa',
    language: 'Arabic',
    id: 'Yemen',
    continent: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Yemen'
  },
  {
    name: 'Zambia',
    population: '18,383,955',
    capital: 'Lusaka',
    language: 'English',
    id: 'Zambia',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Zambia'
  },
  {
    name: 'Zimbabwe',
    population: '14,862,924',
    capital: 'Harare',
    language: 'English, Shona, Sindebele',
    id: 'Zimbabwe',
    continent: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Zimbabwe'
  }
]

export default countries
```

</details>

Next we'll import this file into `App.jsx`:

```js
import countries from './countries'
```

Now, we can pass this data as *props* to our `MainContent` component...

```jsx
return (
  <div className="flex-row">
    <SideBar />
    <MainContent countries={countries}/>
  </div>
)
```

## Mapping Data

Now that we've loaded our data in to `MainContent.jsx`, we'll use it to return a a list of countries and their capitals.

Inside the `MainContent` component under our `h1`, let's add in the following:

```jsx
<div className="main">
  <h1>Countries</h1>
  <ul>
    {props.countries.map((country) => (
      <li className="country">
        <h3>Country: {country.name}</h3>
        <h5>Capital: {country.capital}</h5>
      </li>
    ))}
  </ul>
</div>
```

Break Down:

- We're going to display a list of countries inside of a `ul`
- We use the `{}` notation to tell the React compiler that the next bit of code is JavaScript
- We utilize the `.map` method on the `countries` data which will in turn give us access to each country object.
- We then utilize the `()` syntax to return multiple jsx elements without having to use the `return` keyword.
- Finally, the capital and country name are provided to each `li` element with heading tags.

*At this point, we can check our browsers and open the console, and you should see a warning/error!*

This warning/error is not a breaking one, which means that your application will still run. However the performance will take a hit in larger applications. Luckily, it's an easy fix!

#### What are keys and why do we need them?

The `key` prop is a special property that react uses to keep track of what order elements from an array are displayed/rendered. Essentially, think of each key as a number for the deli counter at your local supermarket. It keeps track of the next person/element in line.

A few rules for keys:

- Keys must be unique, (this is how react keeps track of order)
- Keys are attached to the parent containing element inside of the `.map`, in our example `li`.
- We *can* use an `index` as a key, however this is discouraged due to indexes being unstable (they can change). When working with real data, we'll typically have a unique id for each item.
- You can use any unique reference as a key. In our countries example, each id field is unique so we can use that as well.

#### Implementing Keys

To implement this `key` prop, we can simply attach it to the containing parent, in our case `li`. Modify your `.map` to the following:

```jsx
{props.countries.map((country) => (
  <li key={country.id} className="country">
    <h3>Country: {country.name}</h3>
    <h5>Capital: {country.capital}</h5>
  </li>
))}
```

If you refresh your browser, you'll notice the warning has now disappeared and we are free to continue working.

### Mapping Components

During the previous section, we learned how we can map through some data and return some `jsx`. In this section, we'll adapt the `.map` to return a component instead.

In your `components` folder, create a new component called `Country`. This component will accept `props` as an argument.

**Don't forget to export your component!**

Add the following `jsx` to your `Country`:

```jsx
return (
  <li className="country" id={props.id}>
    <div className="country-info">
      <h3>Country: {props.name}</h3>
      <h5>Capital: {props.capital}</h5>
      <h5>Population: {props.population}</h5>
    </div>
  </li>
)
```

Next import your `Country` into `MainContent.jsx`:

```js
import Country from './Country'
```

Our next step is to utilize `.map` to return a `Country` instead of our `li`. Comment out the current `.map`:

```jsx
{
  /* {props.countries.map((country) => (
    <li key={country.capital}>
        <h3>Country: {country.name}</h3>
        <h5>Capital: {country.capital}</h5>
    </li>
  ))} */
}
```

**Hint: You can use <kbd>cmd</kbd> + <kbd>/</kbd> if you're on a Mac or <kbd>ctrl</kbd>+<kbd>/</kbd> if you're on Linux/Windows to comment out a section of code.**

We'll add the following jsx below the commented out code:

**Don't forget your key! I'm going to add id and population as well!**

```jsx
{props.countries.map((country) => (
  <Country
    key={country.id}
    capital={country.capital}
    name={country.name}
    population={country.population}
    id={country.id}
  />
))}
```

If you check your browser, you'll see that our countries are still displayed but with some much nicer styling!

Once you're done, the result should look like [this](https://mappingcountries.surge.sh/).

## Recap

In this lesson, we:

- Utilized `.map()` to iterate over some data and return components/elements that can display each piece of data.
- We learned how `keys` play an important role in the react ecosystem.

## Resources

- [Embedding .map() in JSX (React Docs)](https://reactjs.org/docs/lists-and-keys.html#embedding-map-in-jsx)
- [Keys (React Docs)](https://reactjs.org/docs/lists-and-keys.html#keys)
- [Components and Props (React Docs)](https://reactjs.org/docs/components-and-props.html)
- [Additional Mapping Components Reading](https://coursework.vschool.io/mapping-components-in-react/)
