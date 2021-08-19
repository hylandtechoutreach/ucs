# Machine Learning Presentation Notes

## Slide 1 (Machine Learning)
Title - introduce topic

## Slide 2 (Where have you seen robots?)
Start by talking about A.I. more broadly. Ask the question on the slide to the students, allow them to discuss it. When giving this presentation virtually, encourage them to answer in the Zoom chat.

## Slide 3 (Steven Spielberg A.I. + Examples)
>Animation: Click once to trigger the appearance of all examples.

The examples in this slide, counter clockwise from top left:

- A.I. Artificial Intelligence (2001)
- Bender from Futurama
- Ava from Ex Machina (2014)
- Metropolis (1927)
- Data from Star Trek: The Next Generation
- Rosie from The Jetsons
- R2D2 from Star Wars (1977)
- WOPR from War Games (1983)

Ask the students if they recognize any of these. 

"The idea of artificial intelligence dates back to antiquity, where the concept was a storytelling device and a philosophical question. The list of modern depictions of AI goes on and on."

#### Slide 4-13
Hidden

## Slide 14 (Do you know how artificial intelligence?)
Ask the question on the slide to the students, allow them to discuss it. When giving this presentation virtually, encourage them to answer in the Zoom chat.

## Slide 15 (Real World A.I.)
>Animations: Click to trigger each individual example.

"There are several real-world applications of artificial intelligence! Although some of these things were originally science fiction, at this point, artificial intelligence is indeed science. Examples include:

- Deep Blue, the chess computer that beat world champion Garry Kasparov
- Robots that harvest produce at the optimal time
- Smart speakers like Amazon Alexa
- Computer-aided medical diagnosis, like the ability to estimate bone age
- Snapchat filters that use facial recognition (e.g. sports television personality Stephen A. Smith as a baby)
- Video games characters like the ghosts from Pac Man
- Automated online assistant chat bots"

## Slide 16 (Machine Learning intro slide)
"One interesting subset of artificial intelligence is Machine Learning."

Ask the students if they can guess what machine learning is.

## Slide 17 (What do machine learning algorithms do?)
>Animation: There are six total animations on this slide, as indicated below with `click`.

First, ask the question to the students. `click`

Explain that machine learning algorithms take in a bunch of data, and then find and apply patterns from the data. `click`

"**Non-ML algorithms** will take in an input, do something to it, and provide the output. An example of one of these algorithms is the squaring algorithm." Ask the students if they know what the squaring algorithm is: `click` it is simply the input multiplied by itself. `click`

"On the other hand, **machine learning algorithms** take in a bunch of data and figure out the rules that determine the relationship between the data. `click` For example, given a set of (x, y) pairs, the machine learning algorithm can determine that the relationship between them is the square algorithm." `click`

_Important to mention for the Kahoot_: "In the real world, machine learning algorithms are useful when the rules of a problem are unknown. Tasks that involve following rules which can be worked out are not a good use for machine learning. For example, it would not make sense to use a machine learning approach to calculate the tax on a restaurant bill; no learning is necessary for that."

## Slide 18 (How are machine learning models built?)
>Animation: Each of the three steps in the process is animated, as indicated below with `click`.

First, ask the question to the students. `click`

Go over the (simplified) steps a machine learning algorithm takes.

Emphasize the importance of data collection and preparation – this is often the most expensive part of the process. 

"Note that developers should find as many examples as possible, but it is important to stay practical! It does not make sense to take months building an enormous dataset when a smaller one might do just as well." `click`

"The training phase is where the actual model is built – this is where the machine learns." `click`

"Iteration is just adjusting the model if it does not perform well enough."

"After these steps, the machine learning model should be ready for application!"

## Slide 19 (Should datasets be varied?)
>Animation: There are seven total animations on this slide, as indicated below with `click`.

Ask the students if they think data should be varied or not. `click` It should be varied!

"Let's look at an example. Say a machine learning algorithm has been trained with a dataset containing three dogs. Specifically, three yellow lab puppies." `click` `click` `click`

"Given a picture of a Chihuahua," `click` "would the model recognize it as a dog?" (Let the students answer) `click`

"No! It is very important to vary the training data as much as possible, so that it is robust." `click`

"Ultimately, machine learning algorithms are only as good as the data they are given. If the data collector or preparer has some bias, that will be present in the machine learning model. It is always important to consider these factors when providing data to an algorithm."

## Slide 20 (Approaches)
>Animation: Each of the three approaches listed is animated.

Go over three of the approaches to machine learning. The important things to emphasize are:

- Supervised Learning: Labeled Data
- Unsupervised Learning: Unlabeled Data
- Reinforcement Learning: Positive and Negative Feedback

## Slide 21 (A supervised example)
>Animation: There are eight total animations on this slide, as indicated below with `click`.

"A spam filter is given a bunch of training data of e-mails that have been labeled SPAM or NOT SPAM." `click` `click` `click` `click`

"In the real world, it is usually necessary to have a LOT of data to properly train an ML algorithm. It is important that the data is all **reliable**." `click`

Ask the students if they can find the pattern. `click`

"Every message marked as SPAM comes from a **.biz** e-mail address and contains misspelled words!" `click`

"For another example e-mail from yahoo.com saying 'Good morning,' would the machine learning model recognize it as SPAM or NOT SPAM?" `click`

"It's NOT SPAM because it comes from a **.com** e-mail address and contains no misspellings. This is a very simplified example, but it shows how a machine learning model can learn to recognize things based on relevant features!"

## Slide 22 (Questions?)
Ask the students if they have any questions.