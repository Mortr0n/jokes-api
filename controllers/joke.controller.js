const Joke = require('../models/joke.model');

module.exports = {

    findAllJokes: (req, res) => {
        Joke.find()
            .then((allJokes) => {
                console.log(allJokes);
                res.json(allJokes);
            })
            .catch((err) => console.log(err));
    },

    findOneJoke: (req, res) => {
        Joke.findOne({ _id: req.params.id })
            .then((oneJoke) => {
                console.log(oneJoke);
                res.json(oneJoke);
            })
            .catch((err) => console.log(err));
    },

    createJoke: (req, res) => {
        Joke.create(req.body)
            .then((newJoke) => {
                console.log(newJoke);
                res.json(newJoke);
            })
            .catch((err) => console.log(err));
    },

    deleteJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then((jokeToDelete) => {
                console.log(jokeToDelete);
                res.json(jokeToDelete);
            })
            .catch((err) => console.log(err));
    },

    updateJoke: (req, res) => {
        Joke.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedAnimal => {
                res.json({ updatedAnimal })
            })
            .catch((err) => console.log(err));
    },

}