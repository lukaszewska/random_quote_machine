let floatingQuote = document.getElementById('floating-quote');
let quote = document.getElementById('quote');
let author = document.getElementById('author');
let button = document.getElementById('button');

let day = (new Date()).getDate();
let month = (new Date()).getMonth();
let year = (new Date()).getFullYear();
let date = document.getElementById('date');

switch(month) {
    case 0:
        month = "January";
        break;
    case 1:
        month = "February";
        break;
    case 2:
        month = "March";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
    case 6:
        month = "July";
        break;
    case 7:
        month = "August";
        break;
    case 8:
        month = "September";
        break;
    case 9:
        month = "October";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "December";
        break;
}
date.innerHTML = `for ${month} ${day}, ${year}`;

function randomQuote() {
    let random = Math.floor(Math.random()*quotes.length);
    let newQuote = `<p id="quote">${quotes[random].text}</p>`;
    let newAuthor = `<p id="author">${quotes[random].author}</p>`;
    floatingQuote.innerHTML = newQuote + newAuthor;
}

function pageHeight() {
    let page = document.querySelector('.topPage').offsetHeight;
    const pages = document.querySelectorAll('.page');
    pages.forEach(el => {
    el.style.height = page+"px";
    });
}

button.addEventListener('click', randomQuote);
button.addEventListener('click', pageHeight);

let quotes = [
    {
        text: '"Don\'t cry because it\'s over, smile because it happened."',
        author: 'Dr. Seuss'
    },
    {
        text: '"Be yourself. Everyone else is already taken."',
        author: 'Oscar Wilde'
    },
    {
        text: '"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe."',
        author: 'Albert Einstein'
    },
    {
        text: '"So many books, so little time."',
        author: 'Frank Zappa'
    },
    {
        text: '"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind."',
        author: 'Bernard M. Baruch'
    },
    {
        text: '"A room without books is like a body without a soul."',
        author: 'Marcus Tullius Cicero'
    },
    {
        text: '"You\'ve gotta dance like there\'s nobody watching, love like you\'ll never be hurt, sing like there\'s nobody listening, and live like it\'s heaven on earth."',
        author: 'William W. Purkey'
    },
    {
        text: '"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams."',
        author: 'Dr. Seuss'
    },
    {
        text: '"You only live once, but if you do it right, once is enough."',
        author: 'Mae West'
    },
    {
        text: '"Be the change that you wish to see in the world."',
        author: 'Mahatma Gandhi'
    },
    {
        text: '"In three words I can sum up everything I\'ve learned about life: it goes on."',
        author: 'Robert Frost'
    },
    {
        text: '"If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals."',
        author: 'J.K. Rowling'
    },
    {
        text: '"Don\'t walk in front of me… I may not follow, don\'t walk behind me… I may not lead. Walk beside me… just be my friend."',
        author: 'Albert Camus'
    },
    {
        text: '"Friendship... is born at the moment when one man says to another "What! You too? I thought that no one but myself..."',
        author: 'C.S. Lewis'
    },
    {
        text: '"No one can make you feel inferior without your consent."',
        author: 'Eleanor Roosevelt'
    },
    {
        text: '"If you tell the truth, you don\'t have to remember anything."',
        author: 'Mark Twain'
    },
    {
        text: '"A friend is someone who knows all about you and still loves you."',
        author: 'Elbert Hubbart'
    },
    {
        text: '"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."',
        author: 'Maya Angelou'
    },
    {
        text: '"Always forgive your enemies. Nothing annoys them so much."',
        author: 'Oscar Wilde'
    },
    {
        text: '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
        author: 'Mahatma Gandhi'
    },
    {
        text: '"To live is the rarest thing in the world. Most people exist, that is all."',
        author: 'Oscar Wilde'
    },
    {
        text: '"Without music, life would be a mistake."',
        author: 'Friedrich Nietzsche'
    },
    {
        text: '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."',
        author: 'Ralph Waldo Emerson'
    },
    {
        text: '"Insanity is doing the same thing, over and over again, but expecting different results."',
        author: 'Albert Einstein'
    },
    {
        text: '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
        author: 'Martin Luther King Jr.'
    },
    {
        text: '"Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring."',
        author: 'Marilyn Monroe'
    },
    {
        text: '"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."',
        author: 'Albert Einstein'
    },
    {
        text: '"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten."',
        author: 'Neil Gaiman'
    },
    {
        text: '"I have not failed. I\'ve just found 10,000 ways that won\'t work."',
        author: 'Thomas A. Edison'
    },
    {
        text: '"I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."',
        author: 'Albert Einstein'
    },
    {
        text: '"There is no greater agony than bearing an untold story inside you."',
        author: 'Maya Angelou'
    },
    {
        text: '"Everything you can imagine is real."',
        author: 'Pablo Picasso'
    },
    {
        text: '"To the well-organized mind, death is but the next great adventure."',
        author: 'J.K. Rowling'
    },
    {
        text: '"Life isn\'t about finding yourself. Life is about creating yourself."',
        author: 'George Bernard Shaw'
    },
    {
        text: '"Do what you can, with what you have, where you are."',
        author: 'Theodore Roosevelt'
    },
    {
        text: '"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us."',
        author: 'Helen Keller'
    },
    {
        text: '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
        author: 'Winston S. Churchill'
    },
    {
        text: '"So, this is my life. And I want you to know that I am both happy and sad and I\'m still trying to figure out how that could be."',
        author: 'Stephen Chbosky'
    },
    {
        text: '"You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us. And the world will live as one."',
        author: 'John Lennon'
    },
    {
        text: '"Go to heaven for the climate and hell for the company."',
        author: 'Benjamin Franklin Wade'
    },
    {
        text: '"A day without laughter is a day wasted."',
        author: ' Nicolas Chamfort'
    },
    {
        text: '"Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has."',
        author: 'Margaret Mead'
    },
    {
        text: '"How wonderful it is that nobody need wait a single moment before starting to improve the world."',
        author: 'Anne Frank'
    },
    {
        text: '"May you live every day of your life."',
        author: 'Jonathan Swift'
    },
    {
        text: '"We have to dare to be ourselves, however frightening or strange that self may prove to be."',
        author: 'May Sarton'
    },
    {
        text: '"Man is the only creature who refuses to be what he is."',
        author: 'Albert Camus'
    },
    {
        text: '"There is nothing either good or bad, but thinking makes it so."',
        author: 'William Shakespeare'
    },
    {
        text: '"Never let your sense of morals prevent you from doing what is right."',
        author: 'Isaac Asimov'
    },
    {
        text: '"Trust yourself. You know more than you think you do."',
        author: 'Benjamin Spock'
    },
    {
        text: '"You do not write your life with words...You write it with actions. What you think is not important. It is only important what you do."',
        author: 'Patrick Ness'
    },
    {
        text: '"Think left and think right and think low and think high. Oh, the thinks you can think up if only you try!."',
        author: 'Dr. Seuss'
    },
    {
        text: '"Without deviation from the norm, progress is not possible."',
        author: 'Frank Zappa'
    },
    {
        text: '"I am no bird; and no net ensnares me: I am a free human being with an independent will."',
        author: 'Charlotte Bronte'
    },
    {
        text: '"You need to learn how to select your thoughts just the same way you select your clothes every day. This is a power you can cultivate."',
        author: 'Elizabeth Gilbert'
    },
    {
        text: '"I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives."',
        author: 'Jane Austen'
    },
    {
        text: '"I believe great people do things before they are ready."',
        author: 'Amy Poehler'
    },
    {
        text: '"The beginning is always today."',
        author: 'Mary Shelley'
    },
    {
        text: '"When you can\'t find someone to follow, you have to find a way to lead by example."',
        author: 'Roxane Gay'
    },
    {
        text: '"I love to see a young girl go out and grab the world by the lapels. Life\'s a bitch. Yo\'ve got to go out and kick ass."',
        author: 'Maya Angelou'
    },
    {
        text: '"We must have ideals and try to live up to them, even if we never quite succeed. Life would be a sorry business without them. With them it\'s grand and great."',
        author: 'Lucy Maude Montgomery'
    },
    {
        text: '"There is a stubbornness about me that never can bear to be frightened at the will of others. My courage always rises at every attempt to intimidate me."',
        author: 'Jane Austen'
    },
    {
        text: '"My only advice is to stay aware, listen carefully, and yell for help if you need it."',
        author: 'Judy Blume'
    },
    {
        text: '"Don\'t try to comprehend with your mind. Your minds are very limited. Use your intuition."',
        author: 'Madeleine L\'Engel'
    },
    {
        text: '"What you\'re supposed to do when you don\'t like a thing is change it. If you can\'t change it, change the way you think about it. Don\'t complain."',
        author: 'Maya Angelou'
    },
    {
        text: '"Anything\'s possible if you\'ve got enough nerve."',
        author: 'J.K. Rowling'
    },
    {
        text: '"You should never be surprised when someone treats you with respect, you should expect it."',
        author: 'Sarah Dessen'
    },
    {
        text: '"The soul should always stand ajar, ready to welcome the ecstatic experience."',
        author: 'Emily Dickinson'
    },
    {
        text: '"I am a Woman Phenomenally. Phenomenal Woman, that\'s me."',
        author: 'Maya Angelou'
    },
    {
        text: '"What you do makes a difference, and you have to decide what kind of difference you want to make."',
        author: 'Jane Goodall'
    },
    {
        text: '"We do not need magic to change the world, we carry all the power we need inside ourselves already: we have the power to imagine better."',
        author: 'J.K. Rowling'
    },
    {
        text: '"A word after a word after a word is power."',
        author: 'Margaret Atwood'
    },
    {
        text: '"Perhaps when we find ourselves wanting everything, it is because we are dangerously close to wanting nothing."',
        author: 'Sylvia Plath'
    },
    {
        text: '"Put your ear down close to your soul and listen hard."',
        author: 'Anne Sexton'
    },
    {
        text: '"The joy that isn\'t shared dies young."',
        author: 'Anne Sexton'
    },
    {
        text: '"There never was a war that was not inward."',
        author: 'Marianne Moore'
    },
    {
        text: '"When someone shows you who they are, believe them the first time."',
        author: 'Maya Angelou'
    },
    {
        text: '"Indifference and neglect often do much more damage than outright dislike."',
        author: 'J.K. Rowling'
    },
    {
        text: '"An eye for an eye only leads to more blindness."',
        author: 'Benjamin Spock'
    },
    {
        text: '"There is really nothing more to say-except why. But since why is difficult to handle, one must take refuge in how."',
        author: 'Toni Morrison'
    },
    {
        text: '"You wanna fly, you got to give up the shit that weighs you down."',
        author: 'Toni Morrison'
    },
    {
        text: '"Like any artist without an art form, she became dangerous."',
        author: 'Toni Morrison'
    },
    {
        text: '"Real courage is when you know you\'re licked before you begin, but you begin anyway and see it through no matter what."',
        author: 'Harper Lee'
    },
    {
        text: '"The most common way people give up their power is by thinking they don\'t have any."',
        author: 'Alice Walker'
    },
    {
        text: '"Don\'t wait around for other people to be happy for you. Any happiness you get you\'ve got to make yourself."',
        author: 'Alice Walker'
    },
    {
        text: '"I have learned not to worry about love; but to honor its coming with all my heart."',
        author: 'Alice Walker'
    },
    {
        text: '"To free us from the expectations of others, to give us back to ourselves – there lies the great, singular power of self-respect."',
        author: 'Joan Didion'
    },
    {
        text: '"The question isn\'t who is going to let me; it\'s who is going to stop me."',
        author: 'Ayn Rand'
    },
    {
        text: '"Outside of a dog, a book is man\'s best friend. Inside of a dog it\'s too dark to read."',
        author: 'Groucho Marx'
    },
    {
        text: '"A day without sunshine is like, you know, night."',
        author: 'Steve Martin'
    },
    {
        text: '"Never put off till tomorrow what may be done day after tomorrow just as well."',
        author: 'Mark Twain'
    },
    {
        text: '"Women and cats will do as they please, and men and dogs should relax and get used to the idea."',
        author: 'Robert A. Heinlein'
    },
    {
        text: '"All you need is love. But a little chocolate now and then doesn\'t hurt."',
        author: 'Charles M. Schulz'
    },
    {
        text: '"I\'m not afraid of death; I just don\'t want to be there when it happens."',
        author: 'Woody Allen'
    },
    {
        text: '"I find television very educating. Every time somebody turns on the set, I go into the other room and read a book."',
        author: 'Groucho Marx'
    },
    {
        text: '"The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it."',
        author: 'Terry Prachett'
    },
    {
        text: '"The reason I talk to myself is because I\'m the only one whose answers I accept."',
        author: 'Terry Pratchett'
    },
    {
        text: '"It\'s no use going back to yesterday, because I was a different person then."',
        author: 'Lewis Carroll'
    },
    {
        text: '"Never memorize something that you can look up."',
        author: 'Albert Einstein'
    },
    {
        text: '"There are two motives for reading a book; one, that you enjoy it; the other, that you can boast about it."',
        author: 'Bertrand Russell'
    },
    {
        text: '"I generally avoid temptation unless I can\'t resist it."',
        author: 'Mae West'
    }
]