![Banner](https://i.imgur.com/JfM2LL1.jpg)

# Project Overview

## SKIP Chinese Dictionary

https://skip-chinese.netlify.app/ 

**Current load issue: HTTP-only API not accepted by deploy (App will be re-uploaded after API fix.)

## Project Description

The SKIP Chinese Dictionary is a Chinese radical dictionary where users can lookup characters by radical. In applying the SKIP method used for some Japanese character dictionaries to the Kanxi radical system, the user can not only find by radical, but can select if the radical appears in left-right, top-bottom, enclosed, or full-character configurations, ensuring an efficient lookup experience. 

## The SKIP Method and Credits
The SKIP method was developed by linguistic rock star Jack Halpern of the ![Kanji Dictionary Publishing Society](http://www.kanji.org/). It appears here with permission in compliance with the conditions of use. More information can be found ![here](http://www.kanji.org/kanji/dictionaries/skip_permission.htm).

## API and Data Sample

![Chinese Character Web API](http://ccdb.hemiola.com/)

The Chinese Character Web API is an API built from the [Unihan Database](http://www.unicode.org/reports/tr38/#N10260), which is the comprehensive database of Chinese, Japanese, Korean, and Vietnamese language information and character sets as put out by the Unicode Consortium. 

### API Data Sample

```JSON
[
    {
        "string": "一",
        "ktotalstrokes": "1",
        "kmandarin": "YI1"
    },
    {
        "string": "丁",
        "ktotalstrokes": "2",
        "kmandarin": "DING1 ZHENG1"
    },
    {
        "string": "丂",
        "ktotalstrokes": "2",
        "kmandarin": "KAO3 QIAO3 YU2"
    },
    {
        "string": "七",
        "ktotalstrokes": "2",
        "kmandarin": "QI1"
    },
    {
        "string": "丄",
        "ktotalstrokes": "2",
        "kmandarin": "SHANG4 SHANG3"
    },
    {
        "string": "丅",
        "ktotalstrokes": "2",
        "kmandarin": "XIA4"
    },
    {
        "string": "丆",
        "ktotalstrokes": "2",
        "kmandarin": null
    },
    {
        "string": "万",
        "ktotalstrokes": "3",
        "kmandarin": "WAN4 MO4"
    },
    {
        "string": "丈",
        "ktotalstrokes": "3",
        "kmandarin": "ZHANG4"
    }
]
```

## Wireframes
![Wireframe](https://i.imgur.com/mFgAHez.png)


### MVP/PostMVP


#### MVP

- Present user with selection of character configuration: left-right, top-bottom, enclure, solid
- Present user with radicals that fit their configuration category, where user will select radical stroke count
- Present user with characters that meet the configuration category, radical stroke count, and total stroke count


#### PostMVP

- Allow user to click on a character and view its information (pronunciation, stroke number, on/kun readings, and associated information)


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Monday, 5/11| Pseudocode, core HTML, splitting radicals into categories | Incomplete
|Tuesday, 5/12| Js main structure, CSS flexbox structure, getting information from API | Incomplete
|Wednesday, 5/13| DOM added to JS for selection options | Incomplete
|Thursday, 5/14| General cleanup | Incomplete
|Friday, 5/15| Present | Incomplete


## Priority Matrix and Timeframes

![Priority Matrix](https://i.imgur.com/CgQCmTp.jpg)

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| 1. Pseudocode and planning | H | 3 hours | |
| 2. Splitting radicals by category | H | 3 hours | |
| 3. HTML Structure | M | 2hrs |  |  |
| 4. CSS Structure | M | 3hrs |  |  |
| 5. JS Main Structure (Planning API endpoints in JS) | H | 5hrs |  |  |
| 5. Adding DOM to JS | H | 5hrs |  |  |
| 6. CSS Flexbox fine-tuning | H | 3hrs |  |  |
| 7. General cleanup and unexpected tasks | L | 7hrs |  |  |
|  |   | 31hrs |  |   |
