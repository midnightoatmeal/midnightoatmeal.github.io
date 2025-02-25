const thoughts = [
  
"I set out to know the secrets of the heart only to understand that the heart doesnt exist.”,
"Everyone was infinitely evil and good; and thats how we were carrying on.",
"I had so much love in me that I could drown my lover.",
"I needed a friend; God wasnt enough.",
"Being with no heart is terribly boring.",
"Dostoevsky was meant to write only about love.",
"Sometimes I forget that Dostoevsky was an alien.",
"The meaning of life can be found in the tastelessness of water.",
"Quantum mechanics is science's way of approaching mysticism.",
"All private suffering stems from annoying God.",
"Everything is happening for the first and the last time forever.”,
"I think what most intelligent people do wrong is to begin to ignore conscience in the light of their knowledge. Conscience is raw light, and knowledge, which is new, is an artificial light.",
"More knowledge can obscure your view sometimes.",
"There's infinite wisdom in serving others, more than books can ever hold.",
"Fear the beginning of the disappearance of pain.",
"When seeing a young mammal struggling to take its first steps, its neurons trying to make the connections to make sense of this ride that's about to begin, to make sense of standing up, it's so evident that we are nothing more than random particles accidentally stitched up together, and are kicked out of blissful nothingness into this life of pain and unnecessary misery. But then the next thing it does is to go and lick its mother.",
"I found myself a nilhist, but that never prevented me from being completely in love with existence.",
"I'm not sure if I've gone mad or my if life is about to begin.",
"Religions are merely different languages that reach the same place.",
"We cannot make any decisions in life. But there's only one eternal decision we make every time: to choose good or to choose evil.",
"Comedy is dangerous because in the guise of laughter and fun it tends to change your mind",
"It's the insane men that determine the age's sanity.",
"The purpose of a prayer is that it calms your nervous system by articulating the problem that's bothering you.",
"Be like the universe: desireless.",
"Love is just a chemical reaction. But when artists fall in love, they end up making an abyss out of love, so that others can see the depths of love and give it importance again.",
"Fools don't give a shit.",
"There was no being average in any profession. You're either one of the greats or mediocre.",
"The real tragedy isn't the pain; but losing the ability to feel it because of it.",
"My thoughts blew up and my mind went deaf, and since then even my anxieties are peaceful.",
"Having children is the cheap way of achieving immortality.",
"Feels like I could weep for an eternity.",
"Going mad is existence's way of saying I love you.",
"I don't agree with or wish to follow the Devil, but I had sympathies for him.",
"We should annoy Satan by disobeying him.",
"If you can't code in the 21st century, you can't read",
"Time changes everything. If your father took a photograph of you that you don't like, wait for years and years and come back to that photo again when he's not around anymore, and see if you still don't like it.",
"Both nothingness and everything wasn't enough. I wanted something else.",
"Artists are just purer priests.",
"Priests are failed artists, because they began to serve a dogma.",
"Priests begin their journey as artists, but end up impure.",
"Astrology is real because we still live in the universe that our ancestors thought of.",
"I love my solitude, but on nights sometimes when I realize that nobody can bond with me, I feel a silent unease; as if I'm a tree or a cloud; part of nature, but not human.",
"Why do you think the mind exists if there isn't a God?",
"Nobody can figure you out if you keep going deep within yourself.",
"Rationing dopamine is bit psychopathic.",
"I feel like Ram with ten heads.",
"What we call normalcy is essentially monkey behaviour.",
"Make a sad soul laugh.",
"Religious people are actually right, but prematurely.",
"People are not delusional enough",
"Being perfect is bad enough: being nearly perfect is worst.",
"I continuously keep reaching the end, and the end keeps on ending, and a new ending appears.",
"To be led astray by God.",
"Depression tends to bring with it a profound laziness. And then both feed on itself, and begin to end the human soul.",
"Language has the danger to entrap man from seeing the truth.",
"The entire point of Harry Potter was that the hero (you) has within himself a part of the worst evil. And despite that, he chooses to use that evil to break stupid rules to do the actual good. Rowling was trying to instil that philosophy in every child's daily life, so that when they'd grow up, they'd stand against unreasonable rules and question them, and not wave sticks in a costume.",
"The purpose of religion is to hack the permanent biological fear.",
"As if the whole of existence has been waiting for life to emerge so that someone could coin the word 'absurd,' and so the universe could wipe its brow.",
"Let the external events be taken care of by the universe, the God. You're here only to take care of the internal, the other god, you.",
"Human beings can hold an eternity in themselves.",
"Man wanted to tame eternity, so he created the clock, and Time was born; Time is nothing but a ghost of eternity. Something that gives the illusion of slicing that eternal now into past and future.",
"Don't envy the happiest joy of others; don't fear the saddest sorrow of others: your life already has the happiest of all joys and the saddest of all sadnesses.",
"It's both simultaneously fair and unfair that we are brought into this world without our consent, a world where we don't know about anything, and yet where our mistaken decisions have consequences.”,
"If you think you know enough to know God's existence or non-existence, you don't know enough.",
"Krishna is a different God. Jesus, Buddha, Ram, they were all serious, never smiled. But Krishna not only stared into the abyss, he reached the ends of the abyss and returned laughing",
"Turning every curse into a boon is the biggest boon; turning every boon into a curse in the biggest curse.",
"Being human is unnatural. We are animals, and our intrusive instincts are the natural, default mode. But society, a fictional place where we have given a chance to live freely and to pursue our place in the universe and our happiness, hinders our way to follow those instincts. If we want to have given a chance to achieve that godly fulfillment, we must give up our old animal ways in exchange for that promise. That's the only way. And the only way to make life worth living for ourselves and the rest of the species. And every art and literature, from the mythology of Hercules to the modern ones like Superman, every hero film and book reminds us to give up that instinct again and again for the new generation that comes again and again.",
"Every art is merely a way of life; and the moment men turn it dogmatic by holding it too tightly, it becomes a religion.",
"Pride is the hollow mountain between you and change.",
"An end is just another beginning.",
"Not seeing the soul in others is the same as not seeing the soul in oneself.",
"Manipulating words is manipulating reality.",
"Life is nothing but what we truly wish for, and the consequences of getting them.",
"The beauty of serendipity is that it shows up only for you."

];

const thoughtsPerPage = 10;
let currentPage = 1;

function displayThoughts() {
    const start = (currentPage - 1) * thoughtsPerPage;
    const end = start + thoughtsPerPage;
    const thoughtsContainer = document.getElementById("thoughts-container");

    // Clear existing content
    thoughtsContainer.innerHTML = "";

    // Display only the thoughts for the current page
    thoughts.slice(start, end).forEach(thought => {
        const p = document.createElement("p");
        p.textContent = thought;
        thoughtsContainer.appendChild(p);
    });

    // Update page number
    document.getElementById("pageNumber").textContent = `Page ${currentPage}`;

    // Disable/Enable buttons
    document.getElementById("prevBtn").disabled = currentPage === 1;
    document.getElementById("nextBtn").disabled = end >= thoughts.length;
}

// Navigation Functions
function nextPage() {
    if ((currentPage * thoughtsPerPage) < thoughts.length) {
        currentPage++;
        displayThoughts();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayThoughts();
    }
}

// Load first page
displayThoughts();
